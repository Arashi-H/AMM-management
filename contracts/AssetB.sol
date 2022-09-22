//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ASSET_B is ERC20 {
    constructor() ERC20("ASSET_B", "BBB") {
	    _mint(msg.sender, 10000);
    }	
	
	function mintNTokens(uint256 N) public {
	    _mint(msg.sender, N);
    }
}

