/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface IHoneyManagerInterface extends utils.Interface {
  functions: {
    "addLiquidityAndStake()": FunctionFragment;
    "claimBgtAndBuyBack()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "addLiquidityAndStake" | "claimBgtAndBuyBack"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidityAndStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimBgtAndBuyBack",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidityAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimBgtAndBuyBack",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IHoneyManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHoneyManagerInterface;

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
    addLiquidityAndStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimBgtAndBuyBack(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidityAndStake(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimBgtAndBuyBack(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidityAndStake(overrides?: CallOverrides): Promise<void>;

    claimBgtAndBuyBack(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addLiquidityAndStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimBgtAndBuyBack(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidityAndStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimBgtAndBuyBack(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
