// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./IYT.sol";

contract YT {
    uint public b = 2;
    function YTsupply() external view returns(uint){
       return b;
    }
}