/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MalebiInterface extends utils.Interface {
  functions: {
    "AREB()": FunctionFragment;
    "ArebContract()": FunctionFragment;
    "BGT()": FunctionFragment;
    "BexMultiSwap()": FunctionFragment;
    "CrocSwapDex()": FunctionFragment;
    "HenloDexRouter()": FunctionFragment;
    "Honey()": FunctionFragment;
    "Honey_USDC_BEX_LP()": FunctionFragment;
    "StakingVault()": FunctionFragment;
    "USDC()": FunctionFragment;
    "WBERA()": FunctionFragment;
    "addLiquidityAndStake()": FunctionFragment;
    "claimBGT()": FunctionFragment;
    "claimBgtAndBuyBack()": FunctionFragment;
    "convertBGT2Bera(address,uint256)": FunctionFragment;
    "defineAreb(address)": FunctionFragment;
    "flag()": FunctionFragment;
    "owner()": FunctionFragment;
    "swapBeraForAreb(uint256)": FunctionFragment;
    "withDrawHoney()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AREB"
      | "ArebContract"
      | "BGT"
      | "BexMultiSwap"
      | "CrocSwapDex"
      | "HenloDexRouter"
      | "Honey"
      | "Honey_USDC_BEX_LP"
      | "StakingVault"
      | "USDC"
      | "WBERA"
      | "addLiquidityAndStake"
      | "claimBGT"
      | "claimBgtAndBuyBack"
      | "convertBGT2Bera"
      | "defineAreb"
      | "flag"
      | "owner"
      | "swapBeraForAreb"
      | "withDrawHoney"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "AREB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ArebContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "BGT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BexMultiSwap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CrocSwapDex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "HenloDexRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Honey", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "Honey_USDC_BEX_LP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "StakingVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "WBERA", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addLiquidityAndStake",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claimBGT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimBgtAndBuyBack",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convertBGT2Bera",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "defineAreb",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "flag", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapBeraForAreb",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withDrawHoney",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "AREB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ArebContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "BGT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BexMultiSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CrocSwapDex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "HenloDexRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Honey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "Honey_USDC_BEX_LP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "StakingVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WBERA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimBGT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimBgtAndBuyBack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertBGT2Bera",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "defineAreb", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flag", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapBeraForAreb",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withDrawHoney",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Malebi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MalebiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AREB(overrides?: CallOverrides): Promise<[string]>;

    ArebContract(overrides?: CallOverrides): Promise<[string]>;

    BGT(overrides?: CallOverrides): Promise<[string]>;

    BexMultiSwap(overrides?: CallOverrides): Promise<[string]>;

    CrocSwapDex(overrides?: CallOverrides): Promise<[string]>;

    HenloDexRouter(overrides?: CallOverrides): Promise<[string]>;

    Honey(overrides?: CallOverrides): Promise<[string]>;

    Honey_USDC_BEX_LP(overrides?: CallOverrides): Promise<[string]>;

    StakingVault(overrides?: CallOverrides): Promise<[string]>;

    USDC(overrides?: CallOverrides): Promise<[string]>;

    WBERA(overrides?: CallOverrides): Promise<[string]>;

    addLiquidityAndStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimBGT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimBgtAndBuyBack(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    convertBGT2Bera(
      target: PromiseOrValue<string>,
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    defineAreb(
      _areb: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flag(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    swapBeraForAreb(
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withDrawHoney(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  AREB(overrides?: CallOverrides): Promise<string>;

  ArebContract(overrides?: CallOverrides): Promise<string>;

  BGT(overrides?: CallOverrides): Promise<string>;

  BexMultiSwap(overrides?: CallOverrides): Promise<string>;

  CrocSwapDex(overrides?: CallOverrides): Promise<string>;

  HenloDexRouter(overrides?: CallOverrides): Promise<string>;

  Honey(overrides?: CallOverrides): Promise<string>;

  Honey_USDC_BEX_LP(overrides?: CallOverrides): Promise<string>;

  StakingVault(overrides?: CallOverrides): Promise<string>;

  USDC(overrides?: CallOverrides): Promise<string>;

  WBERA(overrides?: CallOverrides): Promise<string>;

  addLiquidityAndStake(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimBGT(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimBgtAndBuyBack(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  convertBGT2Bera(
    target: PromiseOrValue<string>,
    bgtYieldFromVault: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  defineAreb(
    _areb: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flag(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  swapBeraForAreb(
    bgtYieldFromVault: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withDrawHoney(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AREB(overrides?: CallOverrides): Promise<string>;

    ArebContract(overrides?: CallOverrides): Promise<string>;

    BGT(overrides?: CallOverrides): Promise<string>;

    BexMultiSwap(overrides?: CallOverrides): Promise<string>;

    CrocSwapDex(overrides?: CallOverrides): Promise<string>;

    HenloDexRouter(overrides?: CallOverrides): Promise<string>;

    Honey(overrides?: CallOverrides): Promise<string>;

    Honey_USDC_BEX_LP(overrides?: CallOverrides): Promise<string>;

    StakingVault(overrides?: CallOverrides): Promise<string>;

    USDC(overrides?: CallOverrides): Promise<string>;

    WBERA(overrides?: CallOverrides): Promise<string>;

    addLiquidityAndStake(overrides?: CallOverrides): Promise<void>;

    claimBGT(overrides?: CallOverrides): Promise<BigNumber>;

    claimBgtAndBuyBack(overrides?: CallOverrides): Promise<void>;

    convertBGT2Bera(
      target: PromiseOrValue<string>,
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    defineAreb(
      _areb: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    flag(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    swapBeraForAreb(
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    withDrawHoney(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    AREB(overrides?: CallOverrides): Promise<BigNumber>;

    ArebContract(overrides?: CallOverrides): Promise<BigNumber>;

    BGT(overrides?: CallOverrides): Promise<BigNumber>;

    BexMultiSwap(overrides?: CallOverrides): Promise<BigNumber>;

    CrocSwapDex(overrides?: CallOverrides): Promise<BigNumber>;

    HenloDexRouter(overrides?: CallOverrides): Promise<BigNumber>;

    Honey(overrides?: CallOverrides): Promise<BigNumber>;

    Honey_USDC_BEX_LP(overrides?: CallOverrides): Promise<BigNumber>;

    StakingVault(overrides?: CallOverrides): Promise<BigNumber>;

    USDC(overrides?: CallOverrides): Promise<BigNumber>;

    WBERA(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidityAndStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimBGT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimBgtAndBuyBack(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    convertBGT2Bera(
      target: PromiseOrValue<string>,
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    defineAreb(
      _areb: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flag(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    swapBeraForAreb(
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withDrawHoney(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AREB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ArebContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BGT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BexMultiSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CrocSwapDex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    HenloDexRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Honey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Honey_USDC_BEX_LP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    StakingVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WBERA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addLiquidityAndStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimBGT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimBgtAndBuyBack(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    convertBGT2Bera(
      target: PromiseOrValue<string>,
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    defineAreb(
      _areb: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flag(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapBeraForAreb(
      bgtYieldFromVault: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withDrawHoney(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
