import { LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { ArbBot, SwapToken } from "./bot";
import * as fs from "fs";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const defaultConfig = {
  solanaEndpoint: clusterApiUrl("devnet"),
  jupiter: "https://public.jupiterapi.com",
};

const getSecretKey = (filePath: string) => {
  const buffer = fs.readFileSync(filePath);
  const content = buffer.toString();
  return content
}

async function main() {
  // 要操作的文件路径
  const filePath = "~/.config/solana/id.json";

  let SECRET_KEY = getSecretKey(filePath)
  
  if (!SECRET_KEY) {
    throw new Error("SECRET_KEY environment variable not set");
  }

  let decodedSecretKey = Uint8Array.from(JSON.parse(SECRET_KEY));

  const bot = new ArbBot({
      solanaEndpoint: process.env.SOLANA_ENDPOINT ?? defaultConfig.solanaEndpoint,
      metisEndpoint: process.env.METIS_ENDPOINT ?? defaultConfig.jupiter,
      secretKey: decodedSecretKey,
      firstTradePrice: 0.1 * LAMPORTS_PER_SOL,
      targetGainPercentage: 0.15,
      initialInputToken: SwapToken.USDC,
      initialInputAmount: 10_000_000,
  });

  await bot.init();
}

main().catch(console.error);
