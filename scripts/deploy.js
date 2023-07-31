// import * as dotenv from "dotenv";
// import * as hre from "hardhat";
// import * as fs from "fs";

require("dotenv").config();
const hre = require("hardhat");
const fs = require("fs");

async function deploy() {
    console.log(
        "Deploy Start ======================================================"
    );
    const ethers = hre.ethers;

    const [deployer] = await ethers.getSigners();
    // const balance = await deployer.
    // const gasPriceData = await ethers.provider.getGasPrice();
    console.log("Deployer :", deployer.address);
    // console.log("Balance :", formatSingleNumber(balance));
    // console.log("Gas Price :", ethers.utils.formatUnits(gasPriceData, "gwei"));

    const contractName = "SWFContract";
    const Contract = await ethers.getContractFactory(contractName);
    const contract = await Contract.deploy();
    const result = await contract.waitForDeployment();

    console.log(
        "Deploy Success ===================================================="
    );
    console.log("Address :", await result.getAddress());

    const deployedJson = {};
    deployedJson[contractName] = await result.getAddress();

    fs.writeFileSync("deployed-address.json", JSON.stringify(deployedJson));

    // const usedData = await deployer.getBalance();
    // console.log("Gas Used:", ethers.formatEther(`${balance - usedData}`));
    // console.log("Balance :", formatSingleNumber(usedData));
    console.log(
        "Deploy Over ======================================================="
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
