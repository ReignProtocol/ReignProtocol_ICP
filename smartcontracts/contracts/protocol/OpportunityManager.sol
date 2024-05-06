//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

import {BaseUpgradeablePausable} from "./BaseUpgradeablePausable.sol";
import {ReignConfig} from "./ReignConfig.sol";
import {IOpportunityPool} from "../interfaces/IOpportunityPool.sol";
import {IOpportunityManager} from "../interfaces/IOpportunityManager.sol";
import {CollateralToken} from "./CollateralToken.sol";
import {IReignKeeper} from "../interfaces/IReignKeeper.sol";
import {IERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import {Constants} from "./Constants.sol";
import {ConfigHelper} from "./ConfigHelper.sol";

contract OpportunityManager is BaseUpgradeablePausable, IOpportunityManager {
    //////////////////////////////////////////////// 
    /////////  ERROR MESSAGES    //////////////////
    ////////////////////////////////////////////////
    error OpportunityManager__InvalidAddress();
    error OpportunityManager__LoanTypeOutOfRange();
    error OpportunityManager__InvalidAmount();
    error OpportunityManager__LoanInterestInvalid();
    error OpportunityManager__InvalidLoanTenure();
    error OpportunityManager__InvalidPaymentFrequency();
    error OpportunityManager__InvalidOppoortunityNameLength();
    error OpportunityManager__SameCollateralDocument();

    ReignConfig public reignConfig;
    CollateralToken public collateralToken;
    using ConfigHelper for ReignConfig;


    mapping(bytes32 => Opportunity) public opportunityToId;
    mapping(address => bytes32[]) public opportunityOf;
    mapping(bytes32 => bool) public isOpportunity;
    // opportunityID => selected 9 auditors
    mapping(bytes32 => address[9]) underwritersOf;

    mapping(address => bytes32[]) public underwriterToOpportunity;
    mapping(bytes32 => uint256) public override writeOffDaysOf;

    // storing all the opportunities in an array.
    bytes32[] public opportunityIds;

    function initialize(ReignConfig _reignConfig) external initializer {
        if(address(_reignConfig) == address(0)) revert OpportunityManager__InvalidAddress();
        reignConfig = ReignConfig(_reignConfig);
        address owner = reignConfig.reignAdminAddress();
        if(owner == address(0)) revert OpportunityManager__InvalidAddress();

        _BaseUpgradeablePausable_init(owner);
        collateralToken = CollateralToken(reignConfig.collateralTokenAddress());
    }

      function getTotalOpportunities() external override view returns (uint256) {
        return opportunityIds.length;
    }

    function getOpportunityOf(address _borrower)
        external
        override
        view
        returns (bytes32[] memory)
    {
        require(address(_borrower) != address(0), "invalid borrower address");
        return opportunityOf[_borrower];
    }   

    function createOpportunity(CreateOpportunity memory _opportunityData) external override nonReentrant whenNotPaused {
        if(uint8(_opportunityData.loanType) > uint8(LoanType.ArmotizedLoan)) revert OpportunityManager__LoanTypeOutOfRange();
        if(_opportunityData.loanAmount <= 0) revert OpportunityManager__InvalidAmount();
        if(address(_opportunityData.borrower) == address(0)) revert OpportunityManager__InvalidAddress();
        if(_opportunityData.loanInterest <= 0 && _opportunityData.loanInterest > (100 * Constants.sixDecimals())) revert OpportunityManager__LoanInterestInvalid();
        if(_opportunityData.loanTermInDays <= 0) revert OpportunityManager__InvalidLoanTenure();
        if(_opportunityData.paymentFrequencyInDays <= 0) revert OpportunityManager__InvalidPaymentFrequency();
        if(bytes(_opportunityData.opportunityName).length > 50) revert OpportunityManager__InvalidOppoortunityNameLength();

        bytes32 id = keccak256(abi.encodePacked(_opportunityData.collateralDocument));
        if(isOpportunity[id]) revert OpportunityManager__SameCollateralDocument();


        Opportunity memory _opportunity;
        _opportunity.opportunityId = id;
        _opportunity.borrower = _opportunityData.borrower;
        _opportunity.opportunityName = _opportunityData.opportunityName;
        _opportunity.opportunityDescription = _opportunityData.opportunityDescription;
        _opportunity.loanType = _opportunityData.loanType;
        _opportunity.loanAmount = _opportunityData.loanAmount;
        _opportunity.loanTermInDays = _opportunityData.loanTermInDays;
        _opportunity.loanInterest = _opportunityData.loanInterest;
        _opportunity.paymentFrequencyInDays = _opportunityData
            .paymentFrequencyInDays;
        _opportunity.collateralDocument = _opportunityData.collateralDocument;
        _opportunity.InvestmentLoss = _opportunityData.InvestmentLoss;
        _opportunity.createdAt = block.timestamp;
        writeOffDaysOf[id] = reignConfig.getWriteOffDays();

        opportunityToId[id] = _opportunity;
        opportunityOf[_opportunityData.borrower].push(id);
        isOpportunity[id] = true;
        opportunityIds.push(id);




    }

        // In future, this function assign random underwriters to a opportunity ID. currently it only assign 1 underwriter
    function assignUnderwriters(bytes32 _opportunityId, address _underwriter)
        external
        override
        onlyAdmin
        nonReentrant
        whenNotPaused
    {
        //require(_underwriter != address(0), "Invalid Address");
        if(_underwriter == address(0)) revert OpportunityManager__InvalidAddress();

        // require(
        //     isOpportunity[_opportunityId] == true,
        //     "Opportunity ID doesn't exist"
        // );
        if(!isOpportunity[_opportunityId]) revert OpportunityManager__InvalidAddress();


        require(
            opportunityToId[_opportunityId].opportunityStatus ==
                OpportunityStatus.UnderReview,
            "Opportunity is already Judged"
        );
        underwritersOf[_opportunityId][0] = _underwriter;
        underwriterToOpportunity[_underwriter].push(_opportunityId);
    }


    function voteOpportunity(bytes32 _opportunityId, uint8 _status)
        external
        override
        nonReentrant
        whenNotPaused
    {
        require(
            underwritersOf[_opportunityId][0] == msg.sender,
            "You are not an audiitor for this Opportunity."
        );
        require(
            isOpportunity[_opportunityId] == true,
            "Opportunity ID doesn't exist"
        );
        require(
            _status >= uint8(OpportunityStatus.Rejected) &&
                _status <= uint8(OpportunityStatus.Unsure),
            "Status : out of range"
        );
        require(
            opportunityToId[_opportunityId].opportunityStatus ==
                OpportunityStatus.UnderReview,
            "Opportunity is already Judged"
        );
        opportunityToId[_opportunityId].opportunityStatus = OpportunityStatus(
            _status
        );

        if (_status == uint8(OpportunityStatus.Approved)) {
            mintCollateral(_opportunityId);
            createOpportunityPool(_opportunityId);
        }
    }

    function mintCollateral(bytes32 _opportunityId) private {
        require(
            isOpportunity[_opportunityId] == true,
            "Opportunity ID doesn't exist"
        );
        require(
            opportunityToId[_opportunityId].opportunityStatus ==
                OpportunityStatus.Approved,
            "Opportunity is not approved"
        );
        opportunityToId[_opportunityId].opportunityStatus = OpportunityStatus
            .Collateralized;
        collateralToken.safeMint(
            msg.sender,
            opportunityToId[_opportunityId].collateralDocument
        );
    }

     function createOpportunityPool(bytes32 _opportunityId)
        private
        returns (address pool)
    {
        require(
            opportunityToId[_opportunityId].opportunityStatus ==
                OpportunityStatus.Collateralized,
            "Collateral of the Opportunity is not minted."
        );
        require(
            isOpportunity[_opportunityId] == true,
            "Opportunity ID doesn't exist"
        );

        address poolImplAddress = reignConfig.poolImplAddress();
        pool = deployMinimal(poolImplAddress);
        IOpportunityPool(pool).initialize(
            reignConfig,
            opportunityToId[_opportunityId].opportunityId,
            opportunityToId[_opportunityId].loanAmount,
            opportunityToId[_opportunityId].loanTermInDays,
            opportunityToId[_opportunityId].loanInterest,
            opportunityToId[_opportunityId].paymentFrequencyInDays,
            uint8(opportunityToId[_opportunityId].loanType)
        );
        opportunityToId[_opportunityId].opportunityPoolAddress = pool;
        opportunityToId[_opportunityId].opportunityStatus = OpportunityStatus
            .Active;
        return pool;
    }

     function deployMinimal(address _logic) internal returns (address proxy) {
        bytes20 targetBytes = bytes20(_logic);
        // solhint-disable-next-line no-inline-assembly
        assembly {
            let clone := mload(0x40)
            mstore(
                clone,
                0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000
            )
            mstore(add(clone, 0x14), targetBytes)
            mstore(
                add(clone, 0x28),
                0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000
            )
            proxy := create(0, clone, 0x37)
        }
        return proxy;
    }

     function markDrawDown(bytes32 id) external override {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        require(
            opportunityToId[id].opportunityStatus == OpportunityStatus.Active,
            "Opportunity pool is not active"
        );
        require(
            msg.sender == opportunityToId[id].opportunityPoolAddress,
            "Only Opportunity Pool can mark it as drawdown"
        );
        require(
            opportunityToId[id].opportunityPoolAddress != address(0),
            "Opportunity Pool is not created yet"
        );
        opportunityToId[id].opportunityStatus = OpportunityStatus.DrawnDown;
        IReignKeeper(reignConfig.reignKeeperAddress())
            .addOpportunityInKeeper(id);
    }

    function isDrawdown(bytes32 id) public override view returns (bool) {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        if (
            uint8(opportunityToId[id].opportunityStatus) ==
            uint8(OpportunityStatus.DrawnDown)
        ) return true;
        else return false;
    }

    function markRepaid(bytes32 id) external override {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        require(
            opportunityToId[id].opportunityStatus ==
                OpportunityStatus.DrawnDown,
            "Opportunity pool is haven't drawdown yet."
        );
        require(
            msg.sender == opportunityToId[id].opportunityPoolAddress,
            "Only Opportunity Pool can mark it as repaid"
        );
        require(
            opportunityToId[id].opportunityPoolAddress != address(0),
            "Opportunity Pool is not created yet"
        );
        opportunityToId[id].opportunityStatus = OpportunityStatus.Repaid;
        IReignKeeper(reignConfig.reignKeeperAddress())
            .removeOpportunityFromKeeper(id);
    }

    function isRepaid(bytes32 id) public override view returns (bool) {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        if (
            uint8(opportunityToId[id].opportunityStatus) ==
            uint8(OpportunityStatus.Repaid)
        ) return true;
        else return false;
    }

    function isActive(bytes32 id) external override view returns (bool) {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        if (
            uint8(opportunityToId[id].opportunityStatus) ==
            uint8(OpportunityStatus.Active)
        ) return true;
        else return false;
    }

    function getBorrower(bytes32 id) external override view returns (address) {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        return opportunityToId[id].borrower;
    }

    function getOpportunityPoolAddress(bytes32 id)
        external
        override
        view
        returns (address)
    {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        require(
            uint8(opportunityToId[id].opportunityStatus) >=
                uint8(OpportunityStatus.Active),
            "Opportunity must be active/drawndown/repaid"
        );
        address poolAddress = opportunityToId[id].opportunityPoolAddress;
        require(
            poolAddress != address(0),
            "Opportunity pool address haven't created yet"
        );
        return poolAddress;
    }

    function getAlltheOpportunitiesOf(address borrower)
        external
        override
        view
        returns (bytes32[] memory)
    {
        require(borrower != address(0), "Invalid Borrower sddress");
        bytes32[] memory opportunities = opportunityOf[borrower];
        return opportunities;
    }

    function getUnderWritersOpportunities(address _underwriter)
        external
        override
        view
        returns (bytes32[] memory)
    {
        require(_underwriter != address(0), "Invalid underwriter sddress");
        bytes32[] memory opportunities = underwriterToOpportunity[_underwriter];
        return opportunities;
    }

    function getOpportunityNameOf(bytes32 _opportunityId)
        external
        override
        view
        returns (string memory)
    {
        require(
            isOpportunity[_opportunityId] == true,
            "Opportunity ID doesn't exist"
        );
        Opportunity memory opportunityDetails = opportunityToId[_opportunityId];
        return opportunityDetails.opportunityName;
    }

    function markWriteOff(bytes32 id, address _pool) external override {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        require(
            opportunityToId[id].opportunityStatus ==
                OpportunityStatus.DrawnDown,
            "Opportunity pool is haven't drawdown yet."
        );
        require(
            msg.sender == reignConfig.reignKeeperAddress(),
            "Only reignKeeper can mark it as writeoff"
        );
        opportunityToId[id].opportunityStatus = OpportunityStatus.WriteOff;
        IOpportunityPool(_pool).writeOffOpportunity();
    }

    function isWriteOff(bytes32 id) public override view returns (bool) {
        require(isOpportunity[id] == true, "Opportunity ID doesn't exist");
        if (
            uint8(opportunityToId[id].opportunityStatus) ==
            uint8(OpportunityStatus.WriteOff)
        ) return true;
        else return false;
    }


















}