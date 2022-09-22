//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./AssetA.sol";
import "./AssetB.sol";
import "./Liquidity.sol";
import "./GOV.sol";

/// @title A simple Auto-Market Maker
/// @author Léo Besançon
/// @notice This is an experimental contract, with no auditing and limited testing. Do not use in production environments.
contract AMM {

	address public GOV_Address;
	address public AssetA_Address;
	address public AssetB_Address;
	address public Liquidity_Address;
	
	uint256 public liquidityA;
	uint256 public liquidityB;
	
	// Trading fees, if fee is at 1000, each trade has 1% going to liquidity providers (based on the total proportions)
	uint256 public fee_value;
	
	uint256[] public fee_choices;
	
	mapping (address => uint256) public proposedFeeChoice;
	mapping (address => uint256) public GOVBalanceUsedForUser;
	mapping (uint256 => uint256) public GOVBalanceUsedForFeeChoice;

	modifier onlyGOV {
		IERC20 GOV_Instance = GOV(GOV_Address);
		require(GOV_Instance.balanceOf(msg.sender) > 0);
	_;
	}

    /// @notice Constructor for the AMM
    /// @dev Set the correct addresses after deploy to link the AMM and the Liquidity Token
    /// @param _GOV_Address The address for your Governance token, used for votes on the transaction fee 
    /// @param _AssetA_Address The address for your first token
    /// @param _AssetB_Address The address for your second token
    /// @param _Liquidity_Address The address for your Liquidity token, used for adding or removing liquidity from the pool
    constructor(address _GOV_Address, address _AssetA_Address, address _AssetB_Address, address _Liquidity_Address, uint256[] memory _fee_choices) {
		GOV_Address = _GOV_Address;
		AssetA_Address = _AssetA_Address;
		AssetB_Address = _AssetB_Address;
		Liquidity_Address = _Liquidity_Address;
		
		liquidityA = 0;
		liquidityB = 0;
		
		fee_choices = _fee_choices;
		fee_value = _fee_choices[0]; // The first choice is applied at the beginning
    }
	
	/// @notice Vote on the trading fees. The caller should approve the correct value of GOV tokens
    /// @dev 
    /// @param _fee_choice The value of the fee you think should apply to transact. The collected fee is distributed amongst liquidity providers
    /// @param _gov_value The number of Governance tokens you want to commit to this vote
    /// @return success (boolean)
	function GOV_Trading_fees(uint256 _fee_choice, uint256 _gov_value) onlyGOV public returns (bool success) {
		
		IERC20 GOV_Instance = GOV(GOV_Address);
		
		require(_fee_choice <= fee_choices.length && _gov_value > 0);
		
		// If User already voted, we remove his vote before applying the new one
		if(GOVBalanceUsedForUser[msg.sender] > 0)
		{
			GOV_Trading_fees_remove_vote();
		}
		
		GOV_Instance.transferFrom(msg.sender, address(this), _gov_value);
		
		proposedFeeChoice[msg.sender] = _fee_choice;
			
		GOVBalanceUsedForUser[msg.sender] = _gov_value;
		GOVBalanceUsedForFeeChoice[_fee_choice] += _gov_value;
		
		if (GOVBalanceUsedForFeeChoice[_fee_choice] >= GOV_Instance.totalSupply() / 2)
		{
			fee_value = fee_choices[_fee_choice];
		}
		
		success = true;
	}
	
	/// @notice Remove your vote on the trading fees and retrieve the GOV tokens
    /// @dev 
    /// @return success (boolean)
	function GOV_Trading_fees_remove_vote() onlyGOV public returns (bool success) {
		
		IERC20 GOV_Instance = GOV(GOV_Address);
		
		require(GOVBalanceUsedForUser[msg.sender] > 0);
		
		uint256 previousGOVCommited = GOVBalanceUsedForUser[msg.sender];
		
		GOVBalanceUsedForFeeChoice[proposedFeeChoice[msg.sender]] -= previousGOVCommited;
		GOVBalanceUsedForUser[msg.sender] = 0;
		
		GOV_Instance.transfer(msg.sender, previousGOVCommited);
		
		success = true;
	}

	/// @notice Add liquidity to the pool, and retrieve Liquidity tokens. The caller should approve the correct values of tokens A and B before calling. You should be careful to provide the same values for each token to avoid losing value from arbitrage.
    /// @dev 
    /// @param _amountA The amount of Token A you want to add to the pool
    /// @param _amountB The amount of Token B you want to add to the pool
    /// @return success (boolean)
	function provideLiquidity(uint256 _amountA, uint256 _amountB) public returns (bool success) {
		IERC20 assetAInstance = IERC20(AssetA_Address);
		IERC20 assetBInstance = IERC20(AssetB_Address);
		LIQUIDITY liquidityTInstance = LIQUIDITY(Liquidity_Address);
		
		assetAInstance.transferFrom(msg.sender, address(this), _amountA);
		assetBInstance.transferFrom(msg.sender, address(this), _amountB);
	
		uint256 totalLiquidityBalance = liquidityTInstance.totalSupply();
	
		if (liquidityA > 0 && liquidityB > 0)
		{
			uint256 valueA = (_amountA * totalLiquidityBalance) / liquidityA;
			uint256 valueB = (_amountB * totalLiquidityBalance) / liquidityB;
			
			liquidityA += _amountA;
			liquidityB += _amountB;
		
			uint256 value = (valueA > valueB) ? valueB : valueA;
		
			liquidityTInstance.mint(msg.sender, value);
		}
		else
		{
			liquidityA += _amountA;
			liquidityB += _amountB;
			liquidityTInstance.mint(msg.sender, sqrt(_amountA*_amountB));
		}
		
		success = true;
	}
	
	/// @notice Remove liquidity from the pool, burn Liquidity tokens and retrieve an equal value of tokens A and B. The caller should approve the correct values of the liquidity token before calling.
    /// @dev 
    /// @param _amount The amount of Liquidity tokens you want to burn
    /// @return success (boolean)
	function removeLiquidity(uint256 _amount) public returns (bool success) {

		IERC20 assetAInstance = IERC20(AssetA_Address);
		IERC20 assetBInstance = IERC20(AssetB_Address);
		LIQUIDITY liquidityTInstance = LIQUIDITY(Liquidity_Address);

		uint256 totalLiquidityBalance = liquidityTInstance.totalSupply();
		
		uint256 amountA = (_amount * liquidityA) / totalLiquidityBalance;
		uint256 amountB = (_amount * liquidityB) / totalLiquidityBalance;
		
		liquidityA -= amountA;
		liquidityB -= amountB;
		
		liquidityTInstance.burn(msg.sender, _amount);
		
		assetAInstance.transfer(msg.sender, amountA);
		assetBInstance.transfer(msg.sender, amountB);

		success = true;
	}
	
	/// @notice Buy token B from the pool, selling token A
    /// @dev 
    /// @param _amountA The amount of token A you want to sell
    /// @return success (boolean)
	function tradeA2B(uint256 _amountA) public returns (bool success) {
		
		IERC20 assetAInstance = IERC20(AssetA_Address);
		IERC20 assetBInstance = IERC20(AssetB_Address);
		
		assetAInstance.transferFrom(msg.sender, address(this), _amountA);
		
		// Without any fees:
		//uint256 amountB = (_amountA * liquidityB) / (liquidityA + _amountA);
		
		// With a fee of fee_value (100% fee is 100 000)
		uint256 amountB = (_amountA * liquidityB) * (100000 - fee_value) / (100000*liquidityA + _amountA*(100000-fee_value));
		
		require(amountB < liquidityB);
		
		assetBInstance.transfer(msg.sender, amountB);
		
		liquidityA += _amountA;
		liquidityB -= amountB;
		
		success = true;
	}
	
	/// @notice Buy token A from the pool, selling token B
    /// @dev 
    /// @param _amountB The amount of token B you want to sell
    /// @return success (boolean)
	function tradeB2A(uint256 _amountB) public returns (bool success) {
		
		IERC20 assetAInstance = IERC20(AssetA_Address);
		IERC20 assetBInstance = IERC20(AssetB_Address);
		
		assetBInstance.transferFrom(msg.sender, address(this), _amountB);
		
		// Without any fees:
		//uint256 amountA = (_amountB * liquidityA) / (liquidityB + _amountB);
		
		// With a fee of fee_value (100% fee is 100 000)
		uint256 amountA = (_amountB * liquidityA) * (100000 - fee_value) / (100000*liquidityB + _amountB*(100000-fee_value));
		
		require(amountA < liquidityA);
		
		assetAInstance.transfer(msg.sender, amountA);
		
		liquidityA -= amountA;
		liquidityB += _amountB;

		success = true;
	}	
	
	/// @notice Provides the quantity of tokens B you would receive by selling _amountA token A
    /// @dev 
    /// @param _amountA The amount of token A you would sell
    /// @return amountB (uint256) The amount of token B you would receive
	function tradeAmountA2B(uint256 _amountA) public view returns (uint256 amountB) {
		// Without any fees:
		// amountB = (_amountA * liquidityB) / (liquidityA + _amountA);
		
		// With a fee of fee_value (100% fee is 100 000)
		amountB = (_amountA * liquidityB) * (100000 - fee_value) / (100000*liquidityA + _amountA*(100000-fee_value));
		
	}
	
	/// @notice Provides the quantity of tokens A you would receive by selling _amountB token B
    /// @dev 
    /// @param _amountB The amount of token B you would sell
    /// @return amountA (uint256) The amount of token A you would receive
	function tradeAmountB2A(uint256 _amountB) public view returns (uint256 amountA) {
		// Without any fees:
		//amountA = (_amountB * liquidityA) / (liquidityB + _amountB);
		
		// With a fee of fee_value (100% fee is 100 000)
		amountA = (_amountB * liquidityA) * (100000 - fee_value) / (100000*liquidityB + _amountB*(100000-fee_value));
		
	}	
	
	// babylonian method (https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method)
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }
}

