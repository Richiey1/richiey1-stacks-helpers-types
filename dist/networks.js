"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAIN_IDS = exports.API_URLS = exports.TESTNET = exports.MAINNET = void 0;
const network_1 = require("@stacks/network");
exports.MAINNET = (0, network_1.createNetwork)("mainnet");
exports.TESTNET = (0, network_1.createNetwork)("testnet");
exports.API_URLS = {
    mainnet: "https://api.hiro.so",
    testnet: "https://api.testnet.hiro.so",
};
exports.CHAIN_IDS = {
    mainnet: 1,
    testnet: 2147483648,
};
