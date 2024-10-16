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
} from "./common";

export interface XyyzInterface extends utils.Interface {
  functions: {
    "a()": FunctionFragment;
    "add()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "hash(uint256)": FunctionFragment;
    "hash2()": FunctionFragment;
    "number()": FunctionFragment;
    "owner()": FunctionFragment;
    "sxr()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "a"
      | "add"
      | "balanceOf"
      | "hash"
      | "hash2"
      | "number"
      | "owner"
      | "sxr"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "a", values?: undefined): string;
  encodeFunctionData(functionFragment: "add", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hash",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "hash2", values?: undefined): string;
  encodeFunctionData(functionFragment: "number", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "sxr", values?: undefined): string;

  decodeFunctionResult(functionFragment: "a", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "number", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sxr", data: BytesLike): Result;

  events: {};
}

export interface Xyyz extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: XyyzInterface;

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
    a(overrides?: CallOverrides): Promise<[BigNumber]>;

    add(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash(
      n: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hash2(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    number(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    sxr(overrides?: CallOverrides): Promise<[BigNumber] & { age: BigNumber }>;
  };

  a(overrides?: CallOverrides): Promise<BigNumber>;

  add(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash(
    n: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  hash2(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  number(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  sxr(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    add(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash(
      n: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    hash2(overrides?: CallOverrides): Promise<[BigNumber, string]>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    sxr(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash(
      n: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash2(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    sxr(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    a(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash(
      n: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash2(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    number(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sxr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
