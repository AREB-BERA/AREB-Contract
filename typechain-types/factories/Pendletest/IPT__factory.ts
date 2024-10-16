/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPT, IPTInterface } from "../../Pendletest/IPT";

const _abi = [
  {
    inputs: [],
    name: "PTsupply",
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
] as const;

export class IPT__factory {
  static readonly abi = _abi;
  static createInterface(): IPTInterface {
    return new utils.Interface(_abi) as IPTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPT {
    return new Contract(address, _abi, signerOrProvider) as IPT;
  }
}
