// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Isxr.sol";

contract XoxManage{
    Isxr public sxr;

    function upgrade() public view returns(uint){
        return sxr.index2();
    }

    function henduocanshu() public view returns(uint){
        uint a = upgrade();
        uint b = a+1;
        uint c = b+1;
        uint d = c+1;
        uint e = d+1;
        uint f = e+1;
        uint g = f+1;
        uint h = g+1;
        uint i = h+1;
        uint j = i+1;
        uint l = j+1;
        return l;
    }
}