/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBeraCrocMultiSwap,
  IBeraCrocMultiSwapInterface,
} from "../../HoneyManager.sol/IBeraCrocMultiSwap";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "poolIdx",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "base",
            type: "address",
          },
          {
            internalType: "address",
            name: "quote",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isBuy",
            type: "bool",
          },
        ],
        internalType: "struct SwapStep[]",
        name: "_steps",
        type: "tuple[]",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_minOut",
        type: "uint128",
      },
    ],
    name: "multiSwap",
    outputs: [
      {
        internalType: "uint128",
        name: "out",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IBeraCrocMultiSwap__factory {
  static readonly abi = _abi;
  static createInterface(): IBeraCrocMultiSwapInterface {
    return new utils.Interface(_abi) as IBeraCrocMultiSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBeraCrocMultiSwap {
    return new Contract(address, _abi, signerOrProvider) as IBeraCrocMultiSwap;
  }
}
