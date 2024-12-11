## A Jupiter API Trading Bot for Solana

### Intro
> This is a trading bot for the Solana blockchain that uses the Jupiter API to get the best price for a token pair. It then places a market order for the token pair on the Serum DEX.
> Swap USDC and SOL.

### Technology
- TypeScript
- Jupiter API 
- solana/web3.js

### Usage

```bash
yarn install 

ts-node app.ts
```
> You must have a solana wallet in 

## Result
```
➜  jupiter-trading-bot git:(master) ✗ ts-node index.ts
🤖 Initiating arb bot for wallet: F2qLT9dDJ6Ngd59iPhwKRcHKgBG3LQeRVUQbMe5iX1Bd.
🏦 Current balances:
SOL: 88.38799354,
USDC: 0
📈 Current price: 43475071 is lower than the next trade threshold: 100000000 by 56.52%.
📈 Current price: 43512479 is lower than the next trade threshold: 100000000 by 56.49%.
📈 Current price: 43831536 is lower than the next trade threshold: 100000000 by 56.17%.
📈 Current price: 43496543 is lower than the next trade threshold: 100000000 by 56.50%.
```
> You can see the output of this terminal.


By: Quicknode