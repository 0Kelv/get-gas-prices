// Simple script leveraging the Infura Gas API to get the latest gas prices on various networks.
// The code is based on: https://docs.infura.io/infura-expansion-apis/gas-api/quickstart

const axios = require("axios");
require("dotenv").config();

const Auth = Buffer.from(
  process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET,
).toString("base64");

// The chain ID of the supported network. Comment or uncomment the respective line.
const chainId = 1; // Ethereum mainnet
// const chainId = 59144; // Linea mainnet
// const chainId = 42161; // Arbitrum mainnet
// const chainId = 137; // Polygon mainnet
// const chainId = 10; // Optimism mainnet

(async () => {
  try {
    const { data } = await axios.get(
      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
        },
      },
    );
    console.log("Suggested gas fees:", data);
  } catch (error) {
    console.log("Server responded with:", error);
  }
})();