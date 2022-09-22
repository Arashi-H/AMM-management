/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AMM, AMMInterface } from "../../contracts/AMM";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_GOV_Address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_AssetA_Address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_AssetB_Address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_Liquidity_Address",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_fee_choices",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AssetA_Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AssetB_Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "GOVBalanceUsedForFeeChoice",
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
        name: "",
        type: "address",
      },
    ],
    name: "GOVBalanceUsedForUser",
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
    name: "GOV_Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee_choice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gov_value",
        type: "uint256",
      },
    ],
    name: "GOV_Trading_fees",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "GOV_Trading_fees_remove_vote",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "Liquidity_Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "fee_choices",
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
    name: "fee_value",
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
    name: "liquidityA",
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
    name: "liquidityB",
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
        name: "",
        type: "address",
      },
    ],
    name: "proposedFeeChoice",
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
        internalType: "uint256",
        name: "_amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountB",
        type: "uint256",
      },
    ],
    name: "provideLiquidity",
    outputs: [
      {
        internalType: "bool",
        name: "success",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "bool",
        name: "success",
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
        name: "_amountA",
        type: "uint256",
      },
    ],
    name: "tradeA2B",
    outputs: [
      {
        internalType: "bool",
        name: "success",
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
        name: "_amountA",
        type: "uint256",
      },
    ],
    name: "tradeAmountA2B",
    outputs: [
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountB",
        type: "uint256",
      },
    ],
    name: "tradeAmountB2A",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountB",
        type: "uint256",
      },
    ],
    name: "tradeB2A",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200213a3803806200213a8339818101604052810190620000379190620002f8565b846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006004819055506000600581905550806007908051906020019062000162929190620001b7565b50806000815181106200019e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516006819055505050505050620004d3565b828054828255906000526020600020908101928215620001f6579160200282015b82811115620001f5578251825591602001919060010190620001d8565b5b50905062000205919062000209565b5090565b5b80821115620002245760008160009055506001016200020a565b5090565b60006200023f6200023984620003bc565b62000393565b905080838252602082019050828560208602820111156200025f57600080fd5b60005b85811015620002935781620002788882620002e1565b84526020840193506020830192505060018101905062000262565b5050509392505050565b600081519050620002ae816200049f565b92915050565b600082601f830112620002c657600080fd5b8151620002d884826020860162000228565b91505092915050565b600081519050620002f281620004b9565b92915050565b600080600080600060a086880312156200031157600080fd5b600062000321888289016200029d565b955050602062000334888289016200029d565b945050604062000347888289016200029d565b93505060606200035a888289016200029d565b925050608086015167ffffffffffffffff8111156200037857600080fd5b6200038688828901620002b4565b9150509295509295909350565b60006200039f620003b2565b9050620003ad828262000429565b919050565b6000604051905090565b600067ffffffffffffffff821115620003da57620003d96200045f565b5b602082029050602081019050919050565b6000620003f882620003ff565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b62000434826200048e565b810181811067ffffffffffffffff821117156200045657620004556200045f565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004aa81620003eb565b8114620004b657600080fd5b50565b620004c4816200041f565b8114620004d057600080fd5b50565b611c5780620004e36000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806379629b69116100ad578063e3f0109811610071578063e3f010981461036c578063e796002c1461038a578063f6bd6f23146103a8578063f6df3d16146103c6578063f9b2f4c6146103f657610121565b806379629b69146102b25780637a16af7f146102d05780638aff885d146103005780639c8f9f231461031e5780639ecbe2f61461034e57610121565b80632dd3ee25116100f45780632dd3ee25146101c25780632e97341f146101f257806339243288146102225780633f03c048146102525780634ec0f4241461028257610121565b80630874e15b1461012657806324731cff1461015657806327a0c9dc146101745780632d190e8014610192575b600080fd5b610140600480360381019061013b9190611907565b610426565b60405161014d91906119eb565b60405180910390f35b61015e6107b4565b60405161016b9190611a06565b60405180910390f35b61017c6107ba565b6040516101899190611970565b60405180910390f35b6101ac60048036038101906101a791906118b5565b6107e0565b6040516101b991906119eb565b60405180910390f35b6101dc60048036038101906101d79190611863565b610a07565b6040516101e99190611a06565b60405180910390f35b61020c600480360381019061020791906118b5565b610a1f565b6040516102199190611a06565b60405180910390f35b61023c60048036038101906102379190611863565b610a92565b6040516102499190611a06565b60405180910390f35b61026c600480360381019061026791906118b5565b610aaa565b6040516102799190611a06565b60405180910390f35b61029c600480360381019061029791906118b5565b610ac2565b6040516102a99190611a06565b60405180910390f35b6102ba610b35565b6040516102c79190611a06565b60405180910390f35b6102ea60048036038101906102e59190611907565b610b3b565b6040516102f791906119eb565b60405180910390f35b610308610f21565b6040516103159190611970565b60405180910390f35b610338600480360381019061033391906118b5565b610f47565b60405161034591906119eb565b60405180910390f35b610356611243565b6040516103639190611a06565b60405180910390f35b610374611249565b6040516103819190611970565b60405180910390f35b61039261126f565b60405161039f9190611970565b60405180910390f35b6103b0611293565b6040516103bd91906119eb565b60405180910390f35b6103e060048036038101906103db91906118b5565b61154a565b6040516103ed91906119eb565b60405180910390f35b610410600480360381019061040b91906118b5565b611771565b60405161041d9190611a06565b60405180910390f35b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016104879190611970565b60206040518083038186803b15801561049f57600080fd5b505afa1580156104b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d791906118de565b116104e157600080fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600780549050851115801561051c5750600084115b61052557600080fd5b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111561057757610575611293565b505b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b81526004016105b49392919061198b565b602060405180830381600087803b1580156105ce57600080fd5b505af11580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610606919061188c565b5084600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083600a600087815260200190815260200160002060008282546106b29190611a21565b9250508190555060028173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561070157600080fd5b505afa158015610715573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073991906118de565b6107439190611a77565b600a600087815260200190815260200160002054106107a85760078581548110610796577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001546006819055505b60019250505092915050565b60055481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161086c9392919061198b565b602060405180830381600087803b15801561088657600080fd5b505af115801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be919061188c565b506000600654620186a06108d29190611b02565b856108dd9190611aa8565b600454620186a06108ee9190611aa8565b6108f89190611a21565b600654620186a06109099190611b02565b600554876109179190611aa8565b6109219190611aa8565b61092b9190611a77565b9050600554811061093b57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016109769291906119c2565b602060405180830381600087803b15801561099057600080fd5b505af11580156109a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c8919061188c565b5084600460008282546109db9190611a21565b9250508190555080600560008282546109f49190611b02565b9250508190555060019350505050919050565b60096020528060005260406000206000915090505481565b6000600654620186a0610a329190611b02565b82610a3d9190611aa8565b600554620186a0610a4e9190611aa8565b610a589190611a21565b600654620186a0610a699190611b02565b60045484610a779190611aa8565b610a819190611aa8565b610a8b9190611a77565b9050919050565b60086020528060005260406000206000915090505481565b600a6020528060005260406000206000915090505481565b6000600654620186a0610ad59190611b02565b82610ae09190611aa8565b600454620186a0610af19190611aa8565b610afb9190611a21565b600654620186a0610b0c9190611b02565b60055484610b1a9190611aa8565b610b249190611aa8565b610b2e9190611a77565b9050919050565b60045481565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b8152600401610bee9392919061198b565b602060405180830381600087803b158015610c0857600080fd5b505af1158015610c1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c40919061188c565b508173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b8152600401610c7e9392919061198b565b602060405180830381600087803b158015610c9857600080fd5b505af1158015610cac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd0919061188c565b5060008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d1957600080fd5b505afa158015610d2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5191906118de565b90506000600454118015610d6757506000600554115b15610e605760006004548289610d7d9190611aa8565b610d879190611a77565b905060006005548389610d9a9190611aa8565b610da49190611a77565b90508860046000828254610db89190611a21565b925050819055508760056000828254610dd19190611a21565b925050819055506000818311610de75782610de9565b815b90508473ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401610e269291906119c2565b600060405180830381600087803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b50505050505050610f13565b8660046000828254610e729190611a21565b925050819055508560056000828254610e8b9190611a21565b925050819055508173ffffffffffffffffffffffffffffffffffffffff166340c10f1933610ec3898b610ebe9190611aa8565b611795565b6040518363ffffffff1660e01b8152600401610ee09291906119c2565b600060405180830381600087803b158015610efa57600080fd5b505af1158015610f0e573d6000803e3d6000fd5b505050505b600194505050505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561100557600080fd5b505afa158015611019573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103d91906118de565b9050600081600454886110509190611aa8565b61105a9190611a77565b90506000826005548961106d9190611aa8565b6110779190611a77565b9050816004600082825461108b9190611b02565b9250508190555080600560008282546110a49190611b02565b925050819055508373ffffffffffffffffffffffffffffffffffffffff16639dc29fac338a6040518363ffffffff1660e01b81526004016110e69291906119c2565b600060405180830381600087803b15801561110057600080fd5b505af1158015611114573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016111539291906119c2565b602060405180830381600087803b15801561116d57600080fd5b505af1158015611181573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a5919061188c565b508473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016111e19291906119c2565b602060405180830381600087803b1580156111fb57600080fd5b505af115801561120f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611233919061188c565b5060019650505050505050919050565b60065481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016112f49190611970565b60206040518083038186803b15801561130c57600080fd5b505afa158015611320573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134491906118de565b1161134e57600080fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116113c057600080fd5b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080600a6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060008282546114669190611b02565b925050819055506000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016114ed9291906119c2565b602060405180830381600087803b15801561150757600080fd5b505af115801561151b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153f919061188c565b506001935050505090565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b81526004016115d69392919061198b565b602060405180830381600087803b1580156115f057600080fd5b505af1158015611604573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611628919061188c565b506000600654620186a061163c9190611b02565b856116479190611aa8565b600554620186a06116589190611aa8565b6116629190611a21565b600654620186a06116739190611b02565b600454876116819190611aa8565b61168b9190611aa8565b6116959190611a77565b905060045481106116a557600080fd5b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016116e09291906119c2565b602060405180830381600087803b1580156116fa57600080fd5b505af115801561170e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611732919061188c565b5080600460008282546117459190611b02565b92505081905550846005600082825461175e9190611a21565b9250508190555060019350505050919050565b6007818154811061178157600080fd5b906000526020600020016000915090505481565b600060038211156117fc57819050600060016002846117b49190611a77565b6117be9190611a21565b90505b818110156117f65780915060028182856117db9190611a77565b6117e59190611a21565b6117ef9190611a77565b90506117c1565b5061180a565b6000821461180957600190505b5b919050565b60008135905061181e81611bdc565b92915050565b60008151905061183381611bf3565b92915050565b60008135905061184881611c0a565b92915050565b60008151905061185d81611c0a565b92915050565b60006020828403121561187557600080fd5b60006118838482850161180f565b91505092915050565b60006020828403121561189e57600080fd5b60006118ac84828501611824565b91505092915050565b6000602082840312156118c757600080fd5b60006118d584828501611839565b91505092915050565b6000602082840312156118f057600080fd5b60006118fe8482850161184e565b91505092915050565b6000806040838503121561191a57600080fd5b600061192885828601611839565b925050602061193985828601611839565b9150509250929050565b61194c81611b36565b82525050565b61195b81611b48565b82525050565b61196a81611b74565b82525050565b60006020820190506119856000830184611943565b92915050565b60006060820190506119a06000830186611943565b6119ad6020830185611943565b6119ba6040830184611961565b949350505050565b60006040820190506119d76000830185611943565b6119e46020830184611961565b9392505050565b6000602082019050611a006000830184611952565b92915050565b6000602082019050611a1b6000830184611961565b92915050565b6000611a2c82611b74565b9150611a3783611b74565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a6c57611a6b611b7e565b5b828201905092915050565b6000611a8282611b74565b9150611a8d83611b74565b925082611a9d57611a9c611bad565b5b828204905092915050565b6000611ab382611b74565b9150611abe83611b74565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611af757611af6611b7e565b5b828202905092915050565b6000611b0d82611b74565b9150611b1883611b74565b925082821015611b2b57611b2a611b7e565b5b828203905092915050565b6000611b4182611b54565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b611be581611b36565b8114611bf057600080fd5b50565b611bfc81611b48565b8114611c0757600080fd5b50565b611c1381611b74565b8114611c1e57600080fd5b5056fea2646970667358221220f69972e3743581218e2c256f49f1ec108cc66da80bdb6643ae7af405cbd5a9b864736f6c63430008040033";

type AMMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AMMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AMM__factory extends ContractFactory {
  constructor(...args: AMMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _GOV_Address: string,
    _AssetA_Address: string,
    _AssetB_Address: string,
    _Liquidity_Address: string,
    _fee_choices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AMM> {
    return super.deploy(
      _GOV_Address,
      _AssetA_Address,
      _AssetB_Address,
      _Liquidity_Address,
      _fee_choices,
      overrides || {}
    ) as Promise<AMM>;
  }
  override getDeployTransaction(
    _GOV_Address: string,
    _AssetA_Address: string,
    _AssetB_Address: string,
    _Liquidity_Address: string,
    _fee_choices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _GOV_Address,
      _AssetA_Address,
      _AssetB_Address,
      _Liquidity_Address,
      _fee_choices,
      overrides || {}
    );
  }
  override attach(address: string): AMM {
    return super.attach(address) as AMM;
  }
  override connect(signer: Signer): AMM__factory {
    return super.connect(signer) as AMM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AMMInterface {
    return new utils.Interface(_abi) as AMMInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AMM {
    return new Contract(address, _abi, signerOrProvider) as AMM;
  }
}