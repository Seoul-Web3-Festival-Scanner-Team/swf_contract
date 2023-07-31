import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    localhost: {
      chainId: 3121,
      url: "http://127.0.0.1:8545/",
      initialBaseFeePerGas: 0,
      loggingEnabled: true,
    },
    hardhat: {
      chainId: 31337,
      forking: {
        url: process.env.MAINNET_RPC_URL,
        blockNumber: 16024306,
      },
      gasPrice: parseInt(gasPrice),
      initialBaseFeePerGas: 0,
      loggingEnabled: true,
    },
    mainLocal: {
      chainId: 31337,
      url: "http://127.0.0.1:8545/",
      gasPrice: parseInt(gasPrice),
      initialBaseFeePerGas: 0,
      loggingEnabled: true,
    },
    cronos: {
      chainId: 1,
      url: process.env.MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: parseInt(gasPrice),
      initialBaseFeePerGas: 0,
      loggingEnabled: true,
    },
    cronosTestnet: {
      chainId: 3,
      url: process.env.TESTNET_RPC_URL,
      accounts: [process.env.TEST_PRIVATE_KEY],
      gasPrice: parseInt(gasPrice),
      initialBaseFeePerGas: 0,
      loggingEnabled: true,
    },
  },
};

export default config;