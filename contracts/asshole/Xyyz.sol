// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//import "./Interest.sol";

struct Xox{
    uint256 age;
}

contract Xyyz {
    address public owner;
    uint public a;
    Xox public sxr;
    mapping (address => uint256 )public balanceOf;

    constructor(){
        owner = msg.sender;
    }

    function add() public returns(uint){
        balanceOf[msg.sender] = 100;
        require(balanceOf[msg.sender] > 10);
        a++;
        return a;
    }

    function number() external view returns(uint){
        return block.number;
    }

    function hash(uint n) external view returns(bytes32){
        return blockhash(n);
    }

    function hash2() external  returns(uint,bytes32) {
        add();
        return (block.number,blockhash(block.number));
    }

    // function init(uint _age) external {
    //     sxr.age = _age;
    // }

    // function readsxr() external view returns(uint){
    //     return sxr.age;
    // }
}

