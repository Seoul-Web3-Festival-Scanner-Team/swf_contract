const { ethers } = require("ethers");
const { ABI } = require("./abi");

require("dotenv").config();

const provider = new ethers.getDefaultProvider(
    `${process.env.TESTNET_RPC_URL}`
);

const contractName = "SWFContract";
const contractAddress = "0x256F3B45E810181A2E48772F49e9B04eE741A6F4";

(async function () {
    const walletObj = new ethers.Wallet(process.env.PRIVATE_KEY);
    const account = walletObj.connect(provider);

    const contract = new ethers.Contract(contractAddress, ABI, provider);

    let result = [];
    let i = 0;
    while (true) {
        try {
            const data = await contract.datas("test-key1", i);
            i++;
            result.push([
                ethers.toNumber(data.rentType),
                ethers.toNumber(data.rentStart),
                ethers.toNumber(data.rentEnd),
                ethers.toNumber(data.contractDate),
            ]);
        } catch (e) {
            break;
        }
    }

    console.log("result: ", result);
})();
