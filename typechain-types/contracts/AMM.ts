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
} from "../common";

export interface AMMInterface extends utils.Interface {
  functions: {
    "AssetA_Address()": FunctionFragment;
    "AssetB_Address()": FunctionFragment;
    "GOVBalanceUsedForFeeChoice(uint256)": FunctionFragment;
    "GOVBalanceUsedForUser(address)": FunctionFragment;
    "GOV_Address()": FunctionFragment;
    "GOV_Trading_fees(uint256,uint256)": FunctionFragment;
    "GOV_Trading_fees_remove_vote()": FunctionFragment;
    "Liquidity_Address()": FunctionFragment;
    "fee_choices(uint256)": FunctionFragment;
    "fee_value()": FunctionFragment;
    "liquidityA()": FunctionFragment;
    "liquidityB()": FunctionFragment;
    "proposedFeeChoice(address)": FunctionFragment;
    "provideLiquidity(uint256,uint256)": FunctionFragment;
    "removeLiquidity(uint256)": FunctionFragment;
    "tradeA2B(uint256)": FunctionFragment;
    "tradeAmountA2B(uint256)": FunctionFragment;
    "tradeAmountB2A(uint256)": FunctionFragment;
    "tradeB2A(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AssetA_Address"
      | "AssetB_Address"
      | "GOVBalanceUsedForFeeChoice"
      | "GOVBalanceUsedForUser"
      | "GOV_Address"
      | "GOV_Trading_fees"
      | "GOV_Trading_fees_remove_vote"
      | "Liquidity_Address"
      | "fee_choices"
      | "fee_value"
      | "liquidityA"
      | "liquidityB"
      | "proposedFeeChoice"
      | "provideLiquidity"
      | "removeLiquidity"
      | "tradeA2B"
      | "tradeAmountA2B"
      | "tradeAmountB2A"
      | "tradeB2A"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AssetA_Address",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AssetB_Address",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GOVBalanceUsedForFeeChoice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "GOVBalanceUsedForUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "GOV_Address",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GOV_Trading_fees",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "GOV_Trading_fees_remove_vote",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Liquidity_Address",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fee_choices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fee_value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidityA",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityB",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposedFeeChoice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "provideLiquidity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tradeA2B",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tradeAmountA2B",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tradeAmountB2A",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tradeB2A",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "AssetA_Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AssetB_Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOVBalanceUsedForFeeChoice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOVBalanceUsedForUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOV_Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOV_Trading_fees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOV_Trading_fees_remove_vote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Liquidity_Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fee_choices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee_value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidityA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidityB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedFeeChoice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "provideLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tradeA2B", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tradeAmountA2B",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tradeAmountB2A",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tradeB2A", data: BytesLike): Result;

  events: {};
}

export interface AMM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AMMInterface;

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
    AssetA_Address(overrides?: CallOverrides): Promise<[string]>;

    AssetB_Address(overrides?: CallOverrides): Promise<[string]>;

    GOVBalanceUsedForFeeChoice(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    GOVBalanceUsedForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    GOV_Address(overrides?: CallOverrides): Promise<[string]>;

    GOV_Trading_fees(
      _fee_choice: BigNumberish,
      _gov_value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    GOV_Trading_fees_remove_vote(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    Liquidity_Address(overrides?: CallOverrides): Promise<[string]>;

    fee_choices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fee_value(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidityA(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidityB(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposedFeeChoice(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    provideLiquidity(
      _amountA: BigNumberish,
      _amountB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tradeA2B(
      _amountA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tradeAmountA2B(
      _amountA: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountB: BigNumber }>;

    tradeAmountB2A(
      _amountB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountA: BigNumber }>;

    tradeB2A(
      _amountB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  AssetA_Address(overrides?: CallOverrides): Promise<string>;

  AssetB_Address(overrides?: CallOverrides): Promise<string>;

  GOVBalanceUsedForFeeChoice(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  GOVBalanceUsedForUser(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  GOV_Address(overrides?: CallOverrides): Promise<string>;

  GOV_Trading_fees(
    _fee_choice: BigNumberish,
    _gov_value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  GOV_Trading_fees_remove_vote(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  Liquidity_Address(overrides?: CallOverrides): Promise<string>;

  fee_choices(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fee_value(overrides?: CallOverrides): Promise<BigNumber>;

  liquidityA(overrides?: CallOverrides): Promise<BigNumber>;

  liquidityB(overrides?: CallOverrides): Promise<BigNumber>;

  proposedFeeChoice(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  provideLiquidity(
    _amountA: BigNumberish,
    _amountB: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tradeA2B(
    _amountA: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tradeAmountA2B(
    _amountA: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tradeAmountB2A(
    _amountB: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tradeB2A(
    _amountB: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AssetA_Address(overrides?: CallOverrides): Promise<string>;

    AssetB_Address(overrides?: CallOverrides): Promise<string>;

    GOVBalanceUsedForFeeChoice(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GOVBalanceUsedForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GOV_Address(overrides?: CallOverrides): Promise<string>;

    GOV_Trading_fees(
      _fee_choice: BigNumberish,
      _gov_value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    GOV_Trading_fees_remove_vote(overrides?: CallOverrides): Promise<boolean>;

    Liquidity_Address(overrides?: CallOverrides): Promise<string>;

    fee_choices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fee_value(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityA(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityB(overrides?: CallOverrides): Promise<BigNumber>;

    proposedFeeChoice(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    provideLiquidity(
      _amountA: BigNumberish,
      _amountB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tradeA2B(
      _amountA: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tradeAmountA2B(
      _amountA: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tradeAmountB2A(
      _amountB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tradeB2A(
      _amountB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    AssetA_Address(overrides?: CallOverrides): Promise<BigNumber>;

    AssetB_Address(overrides?: CallOverrides): Promise<BigNumber>;

    GOVBalanceUsedForFeeChoice(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GOVBalanceUsedForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GOV_Address(overrides?: CallOverrides): Promise<BigNumber>;

    GOV_Trading_fees(
      _fee_choice: BigNumberish,
      _gov_value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    GOV_Trading_fees_remove_vote(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    Liquidity_Address(overrides?: CallOverrides): Promise<BigNumber>;

    fee_choices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fee_value(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityA(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityB(overrides?: CallOverrides): Promise<BigNumber>;

    proposedFeeChoice(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    provideLiquidity(
      _amountA: BigNumberish,
      _amountB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tradeA2B(
      _amountA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tradeAmountA2B(
      _amountA: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tradeAmountB2A(
      _amountB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tradeB2A(
      _amountB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AssetA_Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    AssetB_Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GOVBalanceUsedForFeeChoice(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GOVBalanceUsedForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GOV_Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GOV_Trading_fees(
      _fee_choice: BigNumberish,
      _gov_value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    GOV_Trading_fees_remove_vote(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    Liquidity_Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee_choices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fee_value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidityA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidityB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedFeeChoice(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    provideLiquidity(
      _amountA: BigNumberish,
      _amountB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tradeA2B(
      _amountA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tradeAmountA2B(
      _amountA: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tradeAmountB2A(
      _amountB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tradeB2A(
      _amountB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}