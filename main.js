const { ethers } = require("ethers");
const { ABI } = require("./abi");

require("dotenv").config();

const provider = new ethers.getDefaultProvider(
    `${process.env.TESTNET_RPC_URL}`
);

const contractName = "SWFContract";
const contractAddress = "0x256F3B45E810181A2E48772F49e9B04eE741A6F4";

(async function () {
    const contract = new ethers.Contract(contractAddress, ABI, provider);

    let result = [];
    let i = 0;
    while (true) {
        try {
            const data = await contract.datas("test-key1", "test-detail1", i);
            i++;
            result.push(data);
        } catch (e) {
            break;
        }
    }

    console.log("result: ", result);
})();
