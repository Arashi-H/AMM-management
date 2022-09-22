import { expect } from "chai";
import { ethers } from "hardhat";

  const MINTER_ROLE = ethers.utils.id("MINTER_ROLE");
  const BURNER_ROLE = ethers.utils.id("BURNER_ROLE");
  var accounts: Array<any>;  var account_0: any;  var account_1: any;  var account_2: any;  var account_3: any;
  var GOV: any; var gov: any;
  var AssetA: any; var asset_a: any;
  var AssetB: any; var asset_b: any;
  var Liquidity: any; var liquidity: any;
  var AMM: any; var amm: any;

describe("LIQUIDITY", function () {
	
  beforeEach(async function () {
	  
	accounts = await ethers.getSigners();
	account_0 = accounts[0];
	account_1 = accounts[1];
	account_2 = accounts[2];
	account_3 = accounts[3];
	
	GOV = await ethers.getContractFactory("GOV");
	gov = await GOV.deploy();
	await gov.deployed();
	//console.log("GOV deployed to:", gov.address);
	
	AssetA = await ethers.getContractFactory("ASSET_A");
	asset_a = await AssetA.deploy();
	await asset_a.deployed();
	//console.log("AssetA deployed to:", asset_a.address);
	
	AssetB = await ethers.getContractFactory("ASSET_B");
	asset_b = await AssetB.deploy();
	await asset_b.deployed();
	//console.log("AssetB deployed to:", asset_b.address);
		
	Liquidity = await ethers.getContractFactory("LIQUIDITY");
	liquidity = await Liquidity.deploy();
	await liquidity.deployed();
	//console.log("Liquidity deployed to:", liquidity.address);
	
	AMM = await ethers.getContractFactory("AMM");
	amm = await AMM.deploy(gov.address, asset_a.address, asset_b.address, liquidity.address, [1000, 0, 500, 2500]);
	await amm.deployed();
	//console.log("AMM deployed to:", amm.address);
	
	await liquidity.connect(account_0).setAMM_Address(amm.address);
	
	//console.log("Set liquidity address");
	//console.log("");
	//console.log("*********");
	//console.log("beforeEach done!");
	//console.log("*********");
	//console.log("");
	  
  });

  it("ownership access control", async function () {
	
	expect(await liquidity.balanceOf(account_0.address)).to.equal("0");
	
	expect(await liquidity.owner()).to.equal(account_0.address);
  });
  
  it("mint and burn access control", async function () {
	expect(await liquidity.hasRole(MINTER_ROLE,amm.address)).to.equal(true);
	expect(await liquidity.hasRole(BURNER_ROLE,amm.address)).to.equal(true);
	expect(await liquidity.hasRole(MINTER_ROLE,account_0.address)).to.equal(false);
	expect(await liquidity.hasRole(BURNER_ROLE,account_0.address)).to.equal(false);
  });
  
  it("initial totalsupply", async function () {
	expect(await liquidity.totalSupply()).to.equal("0");
  });
});


describe("AMM", function () {
		
  beforeEach(async function () {
	  
	accounts = await ethers.getSigners();
	account_0 = accounts[0];
	account_1 = accounts[1];
	account_2 = accounts[2];
	account_3 = accounts[3];
	
	GOV = await ethers.getContractFactory("GOV");
	gov = await GOV.deploy();
	await gov.deployed();
	//console.log("GOV deployed to:", gov.address);
	
	AssetA = await ethers.getContractFactory("ASSET_A");
	asset_a = await AssetA.deploy();
	await asset_a.deployed();
	//console.log("AssetA deployed to:", asset_a.address);
	
	AssetB = await ethers.getContractFactory("ASSET_B");
	asset_b = await AssetB.deploy();
	await asset_b.deployed();
	//console.log("AssetB deployed to:", asset_b.address);
		
	Liquidity = await ethers.getContractFactory("LIQUIDITY");
	liquidity = await Liquidity.deploy();
	await liquidity.deployed();
	//console.log("Liquidity deployed to:", liquidity.address);
	
	AMM = await ethers.getContractFactory("AMM");
	amm = await AMM.deploy(gov.address, asset_a.address, asset_b.address, liquidity.address, [1000, 0, 500, 2500]);
	await amm.deployed();
	//console.log("AMM deployed to:", amm.address);
	
	await liquidity.connect(account_0).setAMM_Address(amm.address);
	
	//console.log("Set liquidity address");
	//console.log("");
	//console.log("*********");
	//console.log("beforeEach done!");
	//console.log("*********");
	//console.log("");
	  
  });

  it("contract address values", async function () {
	
	expect(await amm.GOV_Address()).to.equal(gov.address);
	expect(await amm.AssetA_Address()).to.equal(asset_a.address);
	expect(await amm.AssetB_Address()).to.equal(asset_b.address);
	expect(await amm.Liquidity_Address()).to.equal(liquidity.address);
  });

  it("initial pool values", async function () {
	
	expect(await amm.liquidityA()).to.equal("0");
	expect(await amm.liquidityB()).to.equal("0");
  });
  
  it("provideLiquidity, same amounts", async function () {
	
	await asset_a.connect(account_0).approve(amm.address,"10");
	await asset_b.connect(account_0).approve(amm.address,"10");
	expect(await asset_a.allowance(account_0.address,amm.address)).to.equal("10");
	expect(await asset_b.allowance(account_0.address,amm.address)).to.equal("10");
	
	await amm.connect(account_0).provideLiquidity("10","10");
	
	expect(await amm.liquidityA()).to.equal("10");
	expect(await amm.liquidityB()).to.equal("10");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("10");
	// TODO: Verify the economics of this liquidity value
  });
  
  it("provideLiquidity x2, same amounts", async function () {
	
	await asset_a.connect(account_0).approve(amm.address,"100");
	await asset_b.connect(account_0).approve(amm.address,"100");
	expect(await asset_a.allowance(account_0.address,amm.address)).to.equal("100");
	expect(await asset_b.allowance(account_0.address,amm.address)).to.equal("100");
	
	await amm.connect(account_0).provideLiquidity("10","10");
	
	expect(await amm.liquidityA()).to.equal("10");
	expect(await amm.liquidityB()).to.equal("10");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("10");
	
	await amm.connect(account_0).provideLiquidity("90","90");
	
	expect(await amm.liquidityA()).to.equal("100");
	expect(await amm.liquidityB()).to.equal("100");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("100");
  });
  
  it("provideLiquidity, diff amounts", async function () {
	
	await asset_a.connect(account_0).approve(amm.address,"5");
	await asset_b.connect(account_0).approve(amm.address,"125");
	expect(await asset_a.allowance(account_0.address,amm.address)).to.equal("5");
	expect(await asset_b.allowance(account_0.address,amm.address)).to.equal("125");
	
	await amm.connect(account_0).provideLiquidity("5","125");
	
	expect(await amm.liquidityA()).to.equal("5");
	expect(await amm.liquidityB()).to.equal("125");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("25");
  });
  
  it("provideLiquidity x2, diff amounts", async function () {
	
	await asset_a.connect(account_0).approve(amm.address,"10");
	await asset_b.connect(account_0).approve(amm.address,"250");
	expect(await asset_a.allowance(account_0.address,amm.address)).to.equal("10");
	expect(await asset_b.allowance(account_0.address,amm.address)).to.equal("250");
	
	await amm.connect(account_0).provideLiquidity("5","125");
	
	expect(await amm.liquidityA()).to.equal("5");
	expect(await amm.liquidityB()).to.equal("125");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("25");
	
	await amm.connect(account_0).provideLiquidity("5","125");
	
	expect(await amm.liquidityA()).to.equal("10");
	expect(await amm.liquidityB()).to.equal("250");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("50");
  });
  
  it("provideLiquidity then removeLiquidity", async function () {
	
	await asset_a.connect(account_0).approve(amm.address,"10");
	await asset_b.connect(account_0).approve(amm.address,"250");
	expect(await asset_a.allowance(account_0.address,amm.address)).to.equal("10");
	expect(await asset_b.allowance(account_0.address,amm.address)).to.equal("250");
	
	await amm.connect(account_0).provideLiquidity("10","250");
	
	expect(await amm.liquidityA()).to.equal("10");
	expect(await amm.liquidityB()).to.equal("250");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("50");
	
	await amm.connect(account_0).removeLiquidity("25");
	
	expect(await amm.liquidityA()).to.equal("5");
	expect(await amm.liquidityB()).to.equal("125");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("25");
  });
  
  it("trading", async function () {
	
	await asset_a.connect(account_0).transfer(account_1.address,"100");
	expect(await asset_a.balanceOf(account_1.address)).to.be.equal("100");
	expect(await asset_b.balanceOf(account_1.address)).to.be.equal("0");
	
	await asset_a.connect(account_0).approve(amm.address,"10");
	await asset_b.connect(account_0).approve(amm.address,"250");
	expect(await asset_a.allowance(account_0.address,amm.address)).to.equal("10");
	expect(await asset_b.allowance(account_0.address,amm.address)).to.equal("250");
	
	await amm.connect(account_0).provideLiquidity("10","250");
	
	expect(await amm.liquidityA()).to.equal("10");
	expect(await amm.liquidityB()).to.equal("250");
	expect(await liquidity.balanceOf(account_0.address)).to.be.equal("50");
	
	await asset_a.connect(account_1).approve(amm.address,"1");
	await amm.connect(account_1).tradeA2B("1");
	expect(await asset_a.balanceOf(account_1.address)).to.be.equal("99");
	
	expect(await asset_b.balanceOf(account_1.address)).to.not.be.equal("25");
	// not equal due to slippage
	 
	const res = await asset_b.balanceOf(account_1.address);
	const slippage = (25.0-parseFloat(res))/25.0*100;
	console.log("Slippage: " + slippage.toString() + " %");
  });
});



