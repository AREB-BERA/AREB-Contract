/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICrocSwapDex,
  ICrocSwapDexInterface,
} from "../../AREB.sol/ICrocSwapDex";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "callpath",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "cmd",
        type: "bytes",
      },
    ],
    name: "userCmd",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class ICrocSwapDex__factory {
  static readonly abi = _abi;
  static createInterface(): ICrocSwapDexInterface {
    return new utils.Interface(_abi) as ICrocSwapDexInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICrocSwapDex {
    return new Contract(address, _abi, signerOrProvider) as ICrocSwapDex;
  }
}
