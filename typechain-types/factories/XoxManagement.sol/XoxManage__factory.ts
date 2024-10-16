/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  XoxManage,
  XoxManageInterface,
} from "../../XoxManagement.sol/XoxManage";

const _abi = [
  {
    inputs: [],
    name: "henduocanshu",
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
    inputs: [],
    name: "sxr",
    outputs: [
      {
        internalType: "contract Isxr",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "upgrade",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506103e8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a8ff302414610046578063b429357914610064578063d55ec69714610082575b600080fd5b61004e6100a0565b60405161005b91906102a2565b60405180910390f35b61006c6100c4565b60405161007991906102d6565b60405180910390f35b61008a61018c565b60405161009791906102d6565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806100cf61018c565b905060006001826100e09190610320565b905060006001826100f19190610320565b905060006001826101029190610320565b905060006001826101139190610320565b905060006001826101249190610320565b905060006001826101359190610320565b905060006001826101469190610320565b905060006001826101579190610320565b905060006001826101689190610320565b905060006001826101799190610320565b9050809b50505050505050505050505090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d2ba00b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021e9190610385565b905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061026861026361025e84610223565b610243565b610223565b9050919050565b600061027a8261024d565b9050919050565b600061028c8261026f565b9050919050565b61029c81610281565b82525050565b60006020820190506102b76000830184610293565b92915050565b6000819050919050565b6102d0816102bd565b82525050565b60006020820190506102eb60008301846102c7565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061032b826102bd565b9150610336836102bd565b925082820190508082111561034e5761034d6102f1565b5b92915050565b600080fd5b610362816102bd565b811461036d57600080fd5b50565b60008151905061037f81610359565b92915050565b60006020828403121561039b5761039a610354565b5b60006103a984828501610370565b9150509291505056fea26469706673582212204ba21a470fc7f2297bcb41f70c504d2ef0b345907779fef26dd18b7ba6f77ac364736f6c63430008110033";

type XoxManageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XoxManageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XoxManage__factory extends ContractFactory {
  constructor(...args: XoxManageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<XoxManage> {
    return super.deploy(overrides || {}) as Promise<XoxManage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): XoxManage {
    return super.attach(address) as XoxManage;
  }
  override connect(signer: Signer): XoxManage__factory {
    return super.connect(signer) as XoxManage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XoxManageInterface {
    return new utils.Interface(_abi) as XoxManageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XoxManage {
    return new Contract(address, _abi, signerOrProvider) as XoxManage;
  }
}
