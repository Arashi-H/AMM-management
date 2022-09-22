//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GOV is ERC20 {
    constructor() ERC20("GOV", "GOV") {
	    _mint(msg.sender, 10000);
    }	
	
	function mintNTokens(uint256 N) public {
	    _mint(msg.sender, N);
    }
}

