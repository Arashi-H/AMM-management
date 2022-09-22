import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
	hardhat: {
    },
	goerli: {
      url: `https://goerli.infura.io/v3/`,
      accounts: process.env.GOERLI_ACCOUNT_2_PRIVATE_KEY !== undefined ? [process.env.GOERLI_ACCOUNT_2_PRIVATE_KEY] : []
    },
	mainnet: {
      url: `https://mainnet.infura.io/v3/`,
      accounts: process.env.MAINNET_ACCOUNT_PRIVATE_KEY !== undefined ? [process.env.MAINNET_ACCOUNT_PRIVATE_KEY] : []
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
