// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

struct SwapStep {
    uint256 poolIdx;
    address base;
    address quote;
    bool isBuy;
}

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function approve(address spender, uint256 value) external returns (bool);

    function transfer(address to, uint256 value) external returns (bool);
}

interface IBeraCrocMultiSwap {
    function multiSwap(
        SwapStep[] memory _steps,
        uint128 _amount,
        uint128 _minOut
    ) external payable returns (uint128 out);
}

interface ICrocSwapDex {
    function userCmd(
        uint16 callpath,
        bytes calldata cmd
    ) external payable returns (bytes memory);
}

interface IStakingVault {
    function stake(uint256 _amount) external;

    function getReward(address account) external returns (uint256);
}

interface IBGT {
    function balanceOf(address account) external view returns (uint256);

    function redeem(address receiver, uint256 amount) external;
}

interface IHenloDexRouterV1 {
    function factory() external view returns (address);

    function WETH() external view returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);

    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    )
        external
        payable
        returns (uint amountToken, uint amountETH, uint liquidity);

    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);

    function removeLiquidityETH(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountETH);

    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountA, uint amountB);

    function removeLiquidityETHWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountToken, uint amountETH);

    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapExactETHForTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);

    function swapTokensForExactETH(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapExactTokensForETH(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapETHForExactTokens(
        uint amountOut,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);

    function quote(
        uint amountA,
        uint reserveA,
        uint reserveB
    ) external pure returns (uint amountB);

    function getAmountOut(
        uint amountIn,
        uint reserveIn,
        uint reserveOut
    ) external pure returns (uint amountOut);

    function getAmountIn(
        uint amountOut,
        uint reserveIn,
        uint reserveOut
    ) external pure returns (uint amountIn);

    function getAmountsOut(
        uint amountIn,
        address[] calldata path
    ) external view returns (uint[] memory amounts);

    function getAmountsIn(
        uint amountOut,
        address[] calldata path
    ) external view returns (uint[] memory amounts);

    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountETH);

    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountETH);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;

    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;

    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}

contract HoneyManager {
    IERC20 public Honey;
    IERC20 public USDC;
    IERC20 public Honey_USDC_BEX_LP;
    IERC20 public WBERA;
    IERC20 public AREB;
    IBeraCrocMultiSwap public BexMultiSwap;
    ICrocSwapDex public CrocSwapDex;
    IStakingVault public StakingVault;
    IBGT public BGT;
    IHenloDexRouterV1 public HenloDexRouter;
    address public owner;
    address public ArebContract;
    uint256 public flag = 100;
    

    constructor(
        address _honey, //0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03
        address _usdc, //0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c
        address _lpConduit, //0xd69adb6fb5fd6d06e6ceec5405d95a37f96e3b96, Honey-USDC pair on Bex
        address _wbera, //0x7507c1dc16935B82698e4C63f2746A2fCf994dF8
        address _BexMultiSwap, //0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D,router to swap between Honey and USDC on Bex
        address _CrocSwapDex, //0xAB827b1Cc3535A9e549EE387A6E9C3F02F481B49,router to add liquidity on Bex
        address _stakingVault, //0xe3b9B72ba027FD6c514C0e5BA075Ac9c77C23Afa
        address _bgt, //0xbDa130737BDd9618301681329bF2e46A016ff9Ad
        address _HenloRouter //0x482270069fF98a0dF528955B651494759b3B2F8C
    ) {
        Honey = IERC20(_honey);
        USDC = IERC20(_usdc);
        Honey_USDC_BEX_LP = IERC20(_lpConduit);
        WBERA = IERC20(_wbera);
        BexMultiSwap = IBeraCrocMultiSwap(_BexMultiSwap);
        CrocSwapDex = ICrocSwapDex(_CrocSwapDex);
        StakingVault = IStakingVault(_stakingVault);
        BGT = IBGT(_bgt);
        HenloDexRouter = IHenloDexRouterV1(_HenloRouter);
        owner = msg.sender;
    }

    modifier onlyAreb() {
        require(msg.sender == ArebContract);
        _;
    }

    function defineAreb(address _areb) external {
        require(msg.sender == owner);
        ArebContract = _areb;
        AREB = IERC20(_areb);
        owner = address(0);
    }

    function addLiquidityAndStake() external onlyAreb {
        _addLiquidityAndStake();
    }

    // be called when checkEpoch is triggered in Areb Contract
    function claimBgtAndBuyBack() external onlyAreb {
        //claim the BGT earned during the passed days
        uint256 bgtYieldFromVault = StakingVault.getReward(address(this));
        //flag = bgtYieldFromVault;
        //convert bgt to bera,get the same amount
        BGT.redeem(address(this), bgtYieldFromVault);
        // use bera to buy areb on HenloDex
        // first approve WBERA for HenloDexRouterV1 as a spender
        WBERA.approve(address(HenloDexRouter), bgtYieldFromVault);
        address[] memory path = new address[](3);
        path[0] = address(WBERA);
        path[1] = address(Honey);
        path[2] = address(AREB);
        uint256[] memory swapResults = HenloDexRouter.swapExactETHForTokens{
            value: bgtYieldFromVault
        }(0, path, address(this), (block.timestamp + 600));
        //only burn the areb got from HenloDex in this step
        //not burning all the areb in address(this)
        uint256 arebFromBuyBack = swapResults[swapResults.length - 1];
        //flag = arebFromBuyBack;
        AREB.transfer(address(1), arebFromBuyBack);
    }

    //----- just for test step by step -----//

    function claimBGT() external returns (uint256) {
        uint256 bgtYieldFromVault = StakingVault.getReward(address(this));
        return bgtYieldFromVault;
    }

    function convertBGT2Bera(uint256 bgtYieldFromVault) external {
        BGT.redeem(address(this), bgtYieldFromVault);
    }

    function swapBeraForAreb(uint256 bgtYieldFromVault) external {
        WBERA.approve(address(HenloDexRouter), bgtYieldFromVault);
        address[] memory path = new address[](3);
        path[0] = address(WBERA);
        path[1] = address(Honey);
        path[2] = address(AREB);
        uint256[] memory swapResults = HenloDexRouter.swapExactETHForTokens{
            value: bgtYieldFromVault
        }(0, path, address(this), (block.timestamp + 600));
        //only burn the areb got from HenloDex in this step
        //not burning all the areb in address(this)
        uint256 arebFromBuyBack = swapResults[swapResults.length - 1];
        flag = arebFromBuyBack;
        //AREB.transfer(address(1), arebFromBuyBack);
    }

    function burnAreb(uint256 amountToBurn) external {
        AREB.transfer(address(1), amountToBurn);
    }

    //----- test end ------//

    // sell half of the Honey at address(this) into usdc on Bex
    // and then add LP into the honey-usdc pair on Bex
    // and stake it into the vault to earn BGT
    function _addLiquidityAndStake() internal {
        //sell half of the Honey here into usdc on Bex
        SwapStep memory step = SwapStep({
            poolIdx: 36000,
            base: address(Honey),
            quote: address(USDC),
            isBuy: true
        });
        SwapStep[] memory steps = new SwapStep[](1);
        steps[0] = step;
        uint256 initialHoneyBalance = Honey.balanceOf(address(this));
        uint256 half = initialHoneyBalance / 2;
        uint128 half128 = uint128(half);

        //approve Honey before swap it into usdc
        //approve for BexCrocMultiSwap contract
        Honey.approve(address(BexMultiSwap), half);
        //do swap
        uint128 usdcFromSwap = BexMultiSwap.multiSwap(steps, half128, 0);
        // add the Honey and Usdc into Honey-Usdc pair to get LP
        // approve for CrocSwapDex contract, approve a little bit more to ensure success
        Honey.approve(address(CrocSwapDex), (half * 2));
        USDC.approve(address(CrocSwapDex), (usdcFromSwap * 2));

        _addLiquidityToBex(usdcFromSwap);

        // stake the LP into Vault
        // approve for the staking vault contract before staking
        uint256 lpBalanceOnBex = Honey_USDC_BEX_LP.balanceOf(address(this));
        Honey_USDC_BEX_LP.approve(address(StakingVault), lpBalanceOnBex);
        // do staking
        StakingVault.stake(lpBalanceOnBex);
    }

    function _addLiquidityToBex(uint128 qty) internal {
        //uint16 callpath = 128;
        uint8 code = 32; // fixed in quote tokens. usdc is usually less than henoy
        address base = address(Honey); // address
        address quote = address(USDC); // address
        uint256 poolIdx = 36000; // uint256
        int24 bidTick = 0; // int24
        int24 askTick = 0; // int24
        uint128 qty1 = qty;
        uint128 limitLower = 0; // uint128
        uint128 limitHigher = type(uint128).max; // uint128
        uint8 settleFlags = 0; // uint8
        address lpConduit = address(Honey_USDC_BEX_LP); // address
        bytes memory cmd = abi.encode(
            code, // uint8
            base, // address
            quote, // address
            poolIdx, // uint256
            bidTick, // int24
            askTick, // int24
            qty1, // uint128
            limitLower, // uint128
            limitHigher, // uint128
            settleFlags, // uint8
            lpConduit // address
        );
        //do add liquidity
        CrocSwapDex.userCmd(uint16(128), cmd);
    }

    receive() external payable {}
}
