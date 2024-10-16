/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBGT, IBGTInterface } from "../../HoneyManager.sol/IBGT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBGT__factory {
  static readonly abi = _abi;
  static createInterface(): IBGTInterface {
    return new utils.Interface(_abi) as IBGTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBGT {
    return new Contract(address, _abi, signerOrProvider) as IBGT;
  }
}
