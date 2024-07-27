require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "4b4b4f871ecf6ea48b1bb705b077c94b85a2b0e9f00e34d402609f3813df1152";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
