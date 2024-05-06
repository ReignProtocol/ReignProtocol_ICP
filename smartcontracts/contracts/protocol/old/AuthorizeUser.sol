//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

import {IAuthorizeUser} from "../../interfaces/IAuthorizeUser.sol";
import {BaseUpgradeablePausable} from "../BaseUpgradeablePausable.sol";
import {ReignConfig} from "../ReignConfig.sol";
import {ConfigHelper} from "../ConfigHelper.sol";
import {Constants} from "../Constants.sol";

contract AuthorizeUser is BaseUpgradeablePausable, IAuthorizeUser {
    /////////////////////////////////////////////
    /////////  ERROR MESSAGES    ////////////////
    /////////////////////////////////////////////
    error UnauthorizedUser__InvalidAddress();
    error UnauthorizedUser__NotAuthorized();

    ReignConfig private reignConfig;
    using ConfigHelper for ReignConfig;
    mapping(address => bool) public authorizedUserList;

    event AuthorizedUserListed(address indexed member);
    event AuthorizedUserUnlisted(address indexed member);

    function initialize(ReignConfig _reignConfig) public initializer {
        if(address(_reignConfig) == address(0)) revert UnauthorizedUser__InvalidAddress();
        reignConfig = ReignConfig(_reignConfig);
        address owner = reignConfig.reignAdminAddress();
        if(owner == address(0)) revert UnauthorizedUser__InvalidAddress();

        _BaseUpgradeablePausable_init(owner);
        _setupRole(Constants.getAuthorizeUserRole(), owner);
        _setRoleAdmin(Constants.getAuthorizeUserRole(), Constants.getAdminRole());
        
    }

    modifier onlyAuthorizeUserRole(){
        if(!hasRole(Constants.getAuthorizeUserRole(), msg.sender)){
            revert UnauthorizedUser__NotAuthorized();
        }
        _;
    }

    function addToAuthorized(address _user) external override onlyAuthorizeUserRole{
        if(_user == address(0)) revert UnauthorizedUser__InvalidAddress();
        authorizedUserList[_user] = true;
        emit AuthorizedUserListed(_user);

    }

    function removeFromAuthorized(address _user) external override onlyAuthorizeUserRole{
        if(_user == address(0)) revert UnauthorizedUser__InvalidAddress();
        authorizedUserList[_user] = false;
        emit AuthorizedUserUnlisted(_user);
    }

    function isAuthorized(address _user) external view override returns(bool){
        if(_user == address(0)) revert UnauthorizedUser__InvalidAddress();
        return authorizedUserList[_user];
    }

}
