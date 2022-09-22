# Automated Market Maker (AMM)

This project demonstrates a very simple AMM project.

Currently, the main features are:
* Trade between two given ERC20s
* Add and substract liquidity to the pool
* Earn liquidity tokens
* Some testing
* Pay trading fees to liquidity providers
* Allow governance voting to set the fee

What there is to do:

* Build a better React front-end to the smart-contract. The goal is to have a great UI to:
    * Quickly provide or remove liquidity, while visualizing earned revenue.
    * Trade, visualize price history, available liquidity and slippage
* More thorough testing

More advanced features considered:
* Allow pooling and trading between any two assets
* Make use of the concentrated liquidity concept introduced in Uniswap v3

This project uses:
* OpenZeppelin ERC20 and AccessControl contracts
* Inspiration from Uniswap v2

This project uses:
* Hardhat
* Typescript
* React

**Disclamer:** this project has not been properly tested or audited. Do not use in production.

How to run the tests:
```
npm install
npx hardhat test
npx hardhat run scripts/deploy.ts
npx hardhat run scripts/deploy.ts --network goerli
```

On Goerli testnet:

* GOV deployed to: 0xFF869D993a4ee1dCCD632FCbe6eF18D2e2C1c3e6
* AssetA deployed to: 0x6aA625A3Ae056494A8CE7Ee6481071717a9Fb9ab
* AssetB deployed to: 0x2a639F1e6A0919A44d0974cdE98F379A795ABA87
* Liquidity deployed to: 0x8103382942Fbe00f6Cc63028bD74Bc928CE50bF6
* AMM deployed to: 0x0e3c0459e80Baa6771150B69Db5444cBCE743DED

