import { createNetwork } from "@stacks/network";

export const MAINNET = createNetwork("mainnet");
export const TESTNET = createNetwork("testnet");

export const API_URLS = {
  mainnet: "https://api.hiro.so",
  testnet: "https://api.testnet.hiro.so",
} as const;

export const CHAIN_IDS = {
  mainnet: 1,
  testnet: 2147483648,
} as const;
