// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

contract speechLock {
    uint256 public LPlockTime;
    uint256 public SpeechLockTime;
    bool public LPlockTimeDetermined;
    bool public SpeechLockTimeDetermined;

    IERC20 public Speech;
    IERC20 public LP;

    address public owner;

    constructor(address _lp, address _speech){
        owner = msg.sender;
        Speech = IERC20(_speech);
        LP = IERC20(_lp);
    }
    
    function lockLP() public {
        require(msg.sender == owner && !LPlockTimeDetermined);
        LPlockTime = block.timestamp + 30*86400;
        LPlockTimeDetermined = true;
    }
    // 75% locked for future use
    function lockSpeech() public {
        require(msg.sender == owner && !SpeechLockTimeDetermined);
        SpeechLockTime = block.timestamp + 90*86400;
        SpeechLockTimeDetermined = true;
    }

    function withdrawLP(address _to) public {
        require(msg.sender == owner && block.timestamp >= LPlockTime);
        uint256 lpBalance = LP.balanceOf(address(this));
        LP.transfer(_to, lpBalance);
    }

    function withdrawSpeech(address _to,uint256 _amount) public {
        require(msg.sender == owner && block.timestamp >= SpeechLockTime);
        uint256 speechBalance = Speech.balanceOf(address(this));
        require(_amount <= speechBalance);
        Speech.transfer(_to, _amount);
    }

}