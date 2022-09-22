// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {

  const GOVAddress = `0xFF869D993a4ee1dCCD632FCbe6eF18D2e2C1c3e6`;
  const AssetAAddress = `0x6aA625A3Ae056494A8CE7Ee6481071717a9Fb9ab`;
  const AssetBAddress = `0x2a639F1e6A0919A44d0974cdE98F379A795ABA87`;
  const LiquidityAddress = `0x8103382942Fbe00f6Cc63028bD74Bc928CE50bF6`;
  const AMMAddress = `0x0e3c0459e80Baa6771150B69Db5444cBCE743DED`;
  
  let accounts = await ethers.getSigners();
  let account_0 = accounts[0];
  let account_1 = accounts[1];
  let account_2 = accounts[2];
  let account_3 = accounts[3];
  
  const GOV = await ethers.getContractFactory("GOV");
  const gov = await GOV.attach(GOVAddress);
  console.log("Using existing GOV deployed at:", gov.address);
  
  const AssetA = await ethers.getContractFactory("ASSET_A");
  const asset_a = await AssetA.attach(AssetAAddress);
  console.log("Using existing AssetA deployed at:", asset_a.address);
  
  const AssetB = await ethers.getContractFactory("ASSET_B");
  const asset_b = await AssetB.attach(AssetBAddress);
  console.log("Using existing AssetB deployed at:", asset_b.address);
    
  const Liquidity = await ethers.getContractFactory("LIQUIDITY");
  const liquidity = await Liquidity.attach(LiquidityAddress);
  console.log("Using existing Liquidity deployed at:", liquidity.address);
  
  const AMM = await ethers.getContractFactory("AMM");
  const amm = await AMM.attach(AMMAddress);
  console.log("Using existing AMM deployed at:", amm.address);
  
  
  console.log("");
  console.log("Trying to approve 100 assetA and 100 assetB");

  await asset_a.connect(account_0).approve(amm.address,"100");
  await asset_b.connect(account_0).approve(amm.address,"100");
  
  console.log("");
  console.log("Trying to use provideLiquidity 100,100");

  await amm.connect(account_0).provideLiquidity("100","100");
  
  console.log("Added 100,100 liquidity");
  
  console.log("*********");
  console.log("All done!");
  console.log("*********");
  console.log("");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
