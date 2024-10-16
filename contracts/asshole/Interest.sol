// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./IInterest.sol";

abstract contract InterestManager{
    uint public index = 5;

    function index2() public view returns(uint){
        return index+1;
    }
}