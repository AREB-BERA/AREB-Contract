import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    'hardhat':{
      allowUnlimitedContractSize:true,
      chainId:7272
    },
    'neondevnet': {
      url: "https://devnet.neonevm.org",
      accounts: [
        // JUST FOR TESTING, DO NOT USE IN PRODUCTION
        '75031d1d758f6b4000d7a15f67bc2197fa0eefdddeabf3679505fa87cde7be7d',
        '7093e4c110c56ec578ff6b3247d5975f1e5819397c42a745ef01bda903cebe61',
      ],
      chainId: 245022926,
      allowUnlimitedContractSize: false,
      gas: "auto",
      gasPrice: "auto",
      //isFork: true,
    },
    'berachain':{
      url: "https://bartio.rpc.berachain.com",
      accounts: [
        // JUST FOR TESTING, DO NOT USE IN PRODUCTION
        'ab879aaa8e02000dd44d1c19e8362c5a275d98cda86aee3503ec7f26832a1dcd',
        //'7093e4c110c56ec578ff6b3247d5975f1e5819397c42a745ef01bda903cebe61',
      ],
      chainId: 80084,
      allowUnlimitedContractSize: false,
      gas: "auto",
      gasPrice: "auto",
    },
    'blast_sepolia':{
      url:"https://sepolia.blast.io",
      accounts:['75031d1d758f6b4000d7a15f67bc2197fa0eefdddeabf3679505fa87cde7be7d'],
      chainId:168587773,
      allowUnlimitedContractSize: false,
      gas: "auto",
      gasPrice: 1000000000,
    }
  },
  etherscan: {
    apiKey: {
      bnbchain: "bnbchain"
    },
    customChains: [
      {
        network: "bnbchain",
        chainId: 56,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://bscscan.com"
        }
      }
    ]
  }
};

export default config;
