// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Isxr.sol";
import "./Interest.sol";

struct DAI{
    uint d;
    uint m;
}

contract sxr is InterestManager {
    uint public m;

    function add() public {
        m++;
    }

    function calc() public pure returns(uint){
        DAI memory empty;
        return (empty.d + 1);
    }
}