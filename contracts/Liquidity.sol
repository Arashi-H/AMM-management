//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract LIQUIDITY is ERC20, Ownable, AccessControl {

	// Create a new role identifier for the minter role
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
	
	address public AMM_Address;

    constructor() ERC20("LIQUIDITY", "LT") {
		_setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
	
	function setAMM_Address(address _AMM_Address) public onlyOwner returns (bool success) {
		AMM_Address = _AMM_Address;
		grantRole(MINTER_ROLE, _AMM_Address);
		grantRole(BURNER_ROLE, _AMM_Address);
		success = true;
	}
	
	function mint(address account, uint256 amount) public onlyRole(MINTER_ROLE) {
		_mint(account, amount);
	}

    function burn(address account, uint256 amount) public onlyRole(BURNER_ROLE) {
        _burn(account, amount);
    }
		
}