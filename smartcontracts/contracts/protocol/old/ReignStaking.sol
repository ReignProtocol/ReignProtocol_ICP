//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";


/// @title ReignStaking
/// @author Aggrey
/// @notice Reign staking dapp which allows users to stake their USDC tokens and earn rewards

contract ReignStaking is ERC20 {

    ///////////////////////////////////////////////////
    /////////  ERROR MESSAGES    //////////////////////
    ///////////////////////////////////////////////////
    error ReignStaking__InvalidAddress();
    error ReignStaking__InvalidAmount();
    error ReignStaking__NotOwner();

    mapping(address => uint256) public s_stakingBalance;
    mapping(address => bool) public s_isStaking;
    mapping(address => uint256) public s_startDate;
    mapping(address => uint256) public s_usdcYield;


    string public contractName = "Reign Staking";
    address public owner;
    IERC20 public usdcToken;
    uint public APR;

    event Stake(address indexed from, uint256 amount);
    event Unstake(address indexed from, uint256 amount);
    event YieldWithdraw(address indexed to, uint256 amount);

    constructor(IERC20 _usdcToken, uint _APR) ERC20("StakedReign", "sREIGN") {
        usdcToken = _usdcToken;
        APR = _APR;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert ReignStaking__NotOwner();
        }   
        _;
    }

    function changeAPR(uint _APR) public onlyOwner {
        APR = _APR;
    }


    function stake(uint256 amount) public {
        if(amount <= 0 && usdcToken.balanceOf(msg.sender) < amount) {
            revert ReignStaking__InvalidAmount();
        }
        if (s_isStaking[msg.sender]) {
            uint256 toTransfer = calculateYieldTotal(msg.sender);
            s_usdcYield[msg.sender] += toTransfer;
        }

        _mint(msg.sender, amount);
        usdcToken.transferFrom(msg.sender, address(this), amount);
        s_stakingBalance[msg.sender] += amount;
        s_startDate[msg.sender] = block.timestamp;
        s_isStaking[msg.sender] = true;
        emit Stake(msg.sender, amount);




    }

    function unstake(uint256 amount) public {
        if(amount <= 0 && s_stakingBalance[msg.sender] < amount) {
            revert ReignStaking__InvalidAmount();
            }

         uint256 yieldTransfer = calculateYieldTotal(msg.sender);
         s_startDate[msg.sender] = block.timestamp;
         uint256 balTransfer = amount;
         amount = 0 ;
            s_stakingBalance[msg.sender] -= balTransfer;
            _burn(msg.sender, balTransfer);
            if(s_stakingBalance[msg.sender] == 0) {
                s_isStaking[msg.sender] = false;
                usdcToken.transfer(msg.sender, balTransfer + s_usdcYield[msg.sender] + yieldTransfer);
                s_usdcYield[msg.sender] = 0;
            } else {
                usdcToken.transfer(msg.sender, balTransfer);
                s_usdcYield[msg.sender] += yieldTransfer;
            }
            emit Unstake(msg.sender, balTransfer);
    }
    function calculateYieldTime(address user) public view returns(uint256) {
        uint256 end = block.timestamp;
        uint256 totalTime = end - s_startDate[user];
        return totalTime;
    }

    function calculateYieldTotal(address user) public view returns(uint256) {
        uint256 time = calculateYieldTime(user)*(10**18);
        uint256 rate = 31536000*APR;
        uint256 timerate = time/rate;
        uint256 rawYield = (s_stakingBalance[user]*timerate)/10**18;
        return rawYield;
    }

    function withdrawYield() public {
        uint256 toTransfer = calculateYieldTotal(msg.sender);
        
        if(toTransfer <= 0 || s_usdcYield[msg.sender] <= 0) revert ReignStaking__InvalidAmount();

        if(s_usdcYield[msg.sender]  != 0) {
            uint256 oldBalance = s_usdcYield[msg.sender];
            s_usdcYield[msg.sender] = 0;
            toTransfer += oldBalance;
        }

        s_startDate[msg.sender] = block.timestamp;
        usdcToken.transfer(msg.sender, toTransfer);
        emit YieldWithdraw(msg.sender, toTransfer);
    }

    function getTotalYield() public view returns(uint256) {
        uint256 currentYield = calculateYieldTotal(msg.sender);
        return s_usdcYield[msg.sender] + currentYield;
    }

    function withdrawTo(uint256 amount, address _receiver) public onlyOwner {
        if(usdcToken.balanceOf(address(this)) < amount) {
            revert ReignStaking__InvalidAmount();
        }
        usdcToken.transfer(_receiver, amount);
    }
        
        
        
















}