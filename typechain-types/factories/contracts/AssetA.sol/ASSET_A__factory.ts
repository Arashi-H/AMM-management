/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ASSET_A,
  ASSET_AInterface,
} from "../../../contracts/AssetA.sol/ASSET_A";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "N",
        type: "uint256",
      },
    ],
    name: "mintNTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f41535345545f41000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f41414100000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000969291906200024f565b508060049080519060200190620000af9291906200024f565b505050620000c633612710620000cc60201b60201c565b620004ab565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200013f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001369062000337565b60405180910390fd5b62000153600083836200024560201b60201c565b806002600082825462000167919062000387565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001be919062000387565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000225919062000359565b60405180910390a362000241600083836200024a60201b60201c565b5050565b505050565b505050565b8280546200025d90620003ee565b90600052602060002090601f016020900481019282620002815760008555620002cd565b82601f106200029c57805160ff1916838001178555620002cd565b82800160010185558215620002cd579182015b82811115620002cc578251825591602001919060010190620002af565b5b509050620002dc9190620002e0565b5090565b5b80821115620002fb576000816000905550600101620002e1565b5090565b60006200030e601f8362000376565b91506200031b8262000482565b602082019050919050565b6200033181620003e4565b82525050565b600060208201905081810360008301526200035281620002ff565b9050919050565b600060208201905062000370600083018462000326565b92915050565b600082825260208201905092915050565b60006200039482620003e4565b9150620003a183620003e4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620003d957620003d862000424565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200040757607f821691505b602082108114156200041e576200041d62000453565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61147c80620004bb6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a357806395d89b41146101d3578063a457c2d7146101f1578063a9059cbb14610221578063dd62ed3e14610251578063e7c8f44714610281576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610ef9565b60405180910390f35b6100f160048036038101906100ec9190610cfb565b61032f565b6040516100fe9190610ede565b60405180910390f35b61010f610352565b60405161011c919061101b565b60405180910390f35b61013f600480360381019061013a9190610cac565b61035c565b60405161014c9190610ede565b60405180910390f35b61015d61038b565b60405161016a9190611036565b60405180910390f35b61018d60048036038101906101889190610cfb565b610394565b60405161019a9190610ede565b60405180910390f35b6101bd60048036038101906101b89190610c47565b6103cb565b6040516101ca919061101b565b60405180910390f35b6101db610413565b6040516101e89190610ef9565b60405180910390f35b61020b60048036038101906102069190610cfb565b6104a5565b6040516102189190610ede565b60405180910390f35b61023b60048036038101906102369190610cfb565b61051c565b6040516102489190610ede565b60405180910390f35b61026b60048036038101906102669190610c70565b61053f565b604051610278919061101b565b60405180910390f35b61029b60048036038101906102969190610d37565b6105c6565b005b6060600380546102ac9061114b565b80601f01602080910402602001604051908101604052809291908181526020018280546102d89061114b565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d3565b90506103478185856105db565b600191505092915050565b6000600254905090565b6000806103676105d3565b90506103748582856107a6565b61037f858585610832565b60019150509392505050565b60006012905090565b60008061039f6105d3565b90506103c08185856103b1858961053f565b6103bb919061106d565b6105db565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546104229061114b565b80601f016020809104026020016040519081016040528092919081815260200182805461044e9061114b565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b5050505050905090565b6000806104b06105d3565b905060006104be828661053f565b905083811015610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa90610fdb565b60405180910390fd5b61051082868684036105db565b60019250505092915050565b6000806105276105d3565b9050610534818585610832565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6105d03382610ab3565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064290610fbb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b290610f3b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610799919061101b565b60405180910390a3505050565b60006107b2848461053f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082c578181101561081e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081590610f5b565b60405180910390fd5b61082b84848484036105db565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089990610f9b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610912576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090990610f1b565b60405180910390fd5b61091d838383610c13565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099a90610f7b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a36919061106d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a9a919061101b565b60405180910390a3610aad848484610c18565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1a90610ffb565b60405180910390fd5b610b2f60008383610c13565b8060026000828254610b41919061106d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b96919061106d565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bfb919061101b565b60405180910390a3610c0f60008383610c18565b5050565b505050565b505050565b600081359050610c2c81611418565b92915050565b600081359050610c418161142f565b92915050565b600060208284031215610c5957600080fd5b6000610c6784828501610c1d565b91505092915050565b60008060408385031215610c8357600080fd5b6000610c9185828601610c1d565b9250506020610ca285828601610c1d565b9150509250929050565b600080600060608486031215610cc157600080fd5b6000610ccf86828701610c1d565b9350506020610ce086828701610c1d565b9250506040610cf186828701610c32565b9150509250925092565b60008060408385031215610d0e57600080fd5b6000610d1c85828601610c1d565b9250506020610d2d85828601610c32565b9150509250929050565b600060208284031215610d4957600080fd5b6000610d5784828501610c32565b91505092915050565b610d69816110d5565b82525050565b6000610d7a82611051565b610d84818561105c565b9350610d94818560208601611118565b610d9d816111db565b840191505092915050565b6000610db560238361105c565b9150610dc0826111ec565b604082019050919050565b6000610dd860228361105c565b9150610de38261123b565b604082019050919050565b6000610dfb601d8361105c565b9150610e068261128a565b602082019050919050565b6000610e1e60268361105c565b9150610e29826112b3565b604082019050919050565b6000610e4160258361105c565b9150610e4c82611302565b604082019050919050565b6000610e6460248361105c565b9150610e6f82611351565b604082019050919050565b6000610e8760258361105c565b9150610e92826113a0565b604082019050919050565b6000610eaa601f8361105c565b9150610eb5826113ef565b602082019050919050565b610ec981611101565b82525050565b610ed88161110b565b82525050565b6000602082019050610ef36000830184610d60565b92915050565b60006020820190508181036000830152610f138184610d6f565b905092915050565b60006020820190508181036000830152610f3481610da8565b9050919050565b60006020820190508181036000830152610f5481610dcb565b9050919050565b60006020820190508181036000830152610f7481610dee565b9050919050565b60006020820190508181036000830152610f9481610e11565b9050919050565b60006020820190508181036000830152610fb481610e34565b9050919050565b60006020820190508181036000830152610fd481610e57565b9050919050565b60006020820190508181036000830152610ff481610e7a565b9050919050565b6000602082019050818103600083015261101481610e9d565b9050919050565b60006020820190506110306000830184610ec0565b92915050565b600060208201905061104b6000830184610ecf565b92915050565b600081519050919050565b600082825260208201905092915050565b600061107882611101565b915061108383611101565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110b8576110b761117d565b5b828201905092915050565b60006110ce826110e1565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561113657808201518184015260208101905061111b565b83811115611145576000848401525b50505050565b6000600282049050600182168061116357607f821691505b60208210811415611177576111766111ac565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611421816110c3565b811461142c57600080fd5b50565b61143881611101565b811461144357600080fd5b5056fea26469706673582212202e7e2ef8f5ff02c27a4908f6f6a72922b606091cea299e8d927cabbd50299fb564736f6c63430008040033";

type ASSET_AConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ASSET_AConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ASSET_A__factory extends ContractFactory {
  constructor(...args: ASSET_AConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ASSET_A> {
    return super.deploy(overrides || {}) as Promise<ASSET_A>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ASSET_A {
    return super.attach(address) as ASSET_A;
  }
  override connect(signer: Signer): ASSET_A__factory {
    return super.connect(signer) as ASSET_A__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ASSET_AInterface {
    return new utils.Interface(_abi) as ASSET_AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ASSET_A {
    return new Contract(address, _abi, signerOrProvider) as ASSET_A;
  }
}
