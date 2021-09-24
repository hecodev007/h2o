// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const {hre, upgrades} = require("hardhat");

//import { ethers, upgrades } from 'hardhat';

async function main() {

//npx hardhat verify --network bsc_test 0x1b5Ab6c135C8a81B9F09D464d5CE7825871A0598 0x99bc2C6E7f16fFf282FdFD837B3eCB7fac4BcCA6 0x6b1c87DF149ddff44c7C8502f3f88fB3228731B4
//   npx hardhat run --network bsc_test scripts/deploy-dex.js
    //npx hardhat run --network rinkeby scripts/deploy-dex.js

    //0xfbe2B8904cFbb7542A27fA8AC0DBAe7E8fF0a8E6 0x45258eDE35110D87BA4f19751F904625921e3Fa0


    accounts = await web3.eth.getAccounts();
    /*
    //deploy mdex
    const WBNB = await ethers.getContractFactory("WBNB");
    const wbnb = await WBNB.deploy();
    await wbnb.deployed();
    console.log("wbnb deployed to:", wbnb.address);


    const MdexFactory = await ethers.getContractFactory("MdexFactory");
    const mdexFac = await MdexFactory.deploy(accounts[0]);
    await mdexFac.deployed();
    console.log("MdexFactory deployed to:", mdexFac.address);

    const Router = await ethers.getContractFactory("MdexRouter");
    const rounter = await Router.deploy(mdexFac.address, wbnb.address);
    await rounter.deployed();
    console.log("rounter deployed to:", rounter.address);

    const MdxToken = await ethers.getContractFactory("MdxToken");
    const mdxToken = await MdxToken.deploy();
    await mdxToken.deployed();
    console.log("MdxToken deployed to:", mdxToken.address);

    _mdxPerBlock = "10000000000000000";
    _startBlock = "12521009";
    const BSCPool = await ethers.getContractFactory("BSCPool");
    const bscPool = await BSCPool.deploy(mdxToken.address, _mdxPerBlock, _startBlock);
    await bscPool.deployed();
    console.log("bscPool deployed to:", bscPool.address);
    */




    let _wbnb = "0x6b1c87DF149ddff44c7C8502f3f88fB3228731B4";

    // const PancakeFactory = await ethers.getContractFactory("PancakeFactory");
    // const pancakeFac = await PancakeFactory.deploy(accounts[0]);
    // await pancakeFac.deployed();
    // console.log("PancakeFactory deployed to:", pancakeFac.address);
    // console.log("initial code:", await pancakeFac.INIT_CODE_PAIR_HASH());
    let  _pancakeFac = "0x99bc2C6E7f16fFf282FdFD837B3eCB7fac4BcCA6";
   // let _pancakeFac = pancakeFac.address;
    const Router = await ethers.getContractFactory("PancakeRouter01");
    const rounter = await Router.deploy(_pancakeFac, _wbnb);
    await rounter.deployed();
    console.log("cake rounter deployed to:", rounter.address);



    // const CakeToken = await ethers.getContractFactory("CakeToken");
    // const cake = await CakeToken.deploy();
    // await cake.deployed();
    // console.log("cake  deployed to:", cake.address);
    //
    // const SyrupBar = await ethers.getContractFactory("SyrupBar");
    // const syrupBar = await SyrupBar.deploy(cake.address);
    // await syrupBar.deployed();
    // console.log("syrupBar  deployed to:", syrupBar.address);
    //
    // _cake = cake.address;
    // _syrup = syrupBar.address;
    // _devaddr = accounts[0];
    // _cakePerBlock = "100000000000000";
    // _startBlock = "12521009";
    //
    // const MasterChef = await ethers.getContractFactory("MasterChef");
    // const masterChef = await MasterChef.deploy(_cake, _syrup, _devaddr, _cakePerBlock, _startBlock);
    // await masterChef.deployed();
    // console.log("masterChef deployed to:", masterChef.address);
    //
    //
    // let _rewardPerBlock = "100000000000000";
    // let _endBlock = 0;
    // const SousChef = await ethers.getContractFactory("SousChef");
    // const sousChef = await SousChef.deploy(_syrup, _rewardPerBlock, _startBlock, _endBlock);
    // await sousChef.deployed();
    //
    // console.log("sousChef deployed to:", sousChef.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
