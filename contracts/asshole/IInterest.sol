// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IInterest {
    function pp() external;
    function index2() external view returns(uint);
}