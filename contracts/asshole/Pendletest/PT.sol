// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./IPT.sol";

contract PT {
    uint public a = 1;
    function PTsupply() external view returns(uint){
       return a;
    }
}