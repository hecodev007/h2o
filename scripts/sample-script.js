// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const {upgrades}  = require("hardhat");
const BigNumber = require("bignumber.js");
//import { ethers, upgrades } from 'hardhat';

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy


    // const UST = await hre.ethers.getContractFactory("UsToken");
    // const us = await UST.deploy("H2O","H2O");
    // await us.deployed();
    // console.log("us deployed to:", us.address);
    // const Greeter = await hre.ethers.getContractFactory("AirDrop");
    // const greeter = await Greeter.deploy(us.address);
    // await greeter.deployed();
    // console.log("AirDrop deployed to:", greeter.address,us.address);
//npx hardhat verify --network bsc_test 0x100d23955fA4358FF7b8545cfa71485e37f93c88 0xbabeD96De07d27D18199D1320dd7203F45ae6383
//   npx hardhat run --network bsc_test scripts/sample-script.js
    //npx hardhat run --network rinkeby scripts/sample-script.js
// npx hardhat run  scripts/sample-script.js
    //0xfbe2B8904cFbb7542A27fA8AC0DBAe7E8fF0a8E6 0x45258eDE35110D87BA4f19751F904625921e3Fa0
    const ONE_MILLION_DEC18 = new BigNumber("12e18");
    console.log(ONE_MILLION_DEC18);
    // const _reserveBPS = "1200000000000";
    // const _liquidateBPS = "1200000000000";
    const _rabbitPerBlock = "1350000000000";
    const _startBlock = "12521009";
    const _bonusEndBlock = 0;
    const _devaddr = "0x2287374e8d7090214628adad44Ff1ab56b9284D1";

    const Config = await hre.ethers.getContractFactory("contracts/bank_config/Conf.sol:BankConfig");
    const conf = await Config.deploy();
    await conf.deployed();
    console.log("conf deployed to:", conf.address);

    const InterestModel = await hre.ethers.getContractFactory("contracts/bank_config/InterestModelv2.sol:TripleSlopeModel");
    const interestModel = await InterestModel.deploy();
    await interestModel.deployed();
    console.log("interestModel deployed to:", interestModel.address);
    await conf.setParams(new BigNumber(12e18), new BigNumber(12e18), interestModel.address);
    const Bank = await hre.ethers.getContractFactory("Bank");
    const inst = await upgrades.deployProxy(Bank, [conf.address]);
    await inst.deployed();
    console.log("bank_proxy deployed to:", inst.address);

    const UST = await hre.ethers.getContractFactory("UsToken");
    const us = await UST.deploy("H2O", "H2O");
    await us.deployed();
    console.log("H2O deployed to:", us.address);
    await inst.addBank(us.address.toString(), "hToken");
    console.log("addBank end");
    await us.approve(inst.address,"100000");
    await inst.deposit(us.address,"100000");

    let _rabbit = us.address;

    const FairLaunch = await hre.ethers.getContractFactory("FairLaunch");
    const launch = await FairLaunch.deploy(_rabbit, _devaddr, "13500000000", _startBlock, _bonusEndBlock);
    await launch.deployed();
    console.log("FairLaunch deployed to:", launch.address);
    _stakeToken = await inst.iTokens(us.address);
    console.log("_stakeToken :", _stakeToken);
    _allocPoint = 117;
    _withUpdate = false;
    await launch.addPool(_allocPoint, _stakeToken, _withUpdate);

    // const ERC20 = artifacts.require("contracts\\Bank.sol:ERC20");
    // const stakeToken = await ERC20.at(_stakeToken);
    // await stakeToken.approve(launch.address,"200");
    // await launch.deposit(_stakeToken,0,"200");
    //
    // await stakeToken.approve(launch.address,"200");
    // await launch.deposit(_stakeToken,0,"200");
    //
    // await launch.withdraw(_stakeToken,0,"200");
    // npx hardhat verify --network bsc_test  0xe97b517923b8b815e8304f9a8b19211311fe3df2

    // npx hardhat verify --network bsc_test 0xB2bAF5C9a419B97Bc6f3bb7673932A33911f348E 0xc87712D8cCeB3186Fa026C931271f32eb4B507e7 0x2287374e8d7090214628adad44Ff1ab56b9284D1 "13500000000000000000" "12521009" 0
    // conf deployed to: 0xdA039c3d3F3e114b7dC3b0A7F469b9EB02341f34
    // interestModel deployed to: 0x3F27681ac5454ac8DaFBa20d0c3150Eb3C1d844B
    // bank deployed to: 0x2147fc21926B73A5ea01D521aFd30ddD9b2736E8
    // H2O deployed to: 0x6C1bC576B227E4b04C53a78cdEe8a7987F47f8B9
// await upgrades.upgradeProxy(inst.address, Bank);
    //console.log("bank deployed to:", bk.address);
//npx hardhat verify --network bsc_test 0xE5eDA42dDd43319031D23DEc59275B00Aec03BCe "H2O"  "H2O"
//heco_test
    // npx hardhat run --network heco_test scripts/sample-script.js
    // npx hardhat run --network bsc_test scripts/sample-script.js
    // npx hardhat verify --network heco_test  0xD57430aCb085898E3385dCb71DA175418aA40194 "H2O"  "H2O"

    // conf deployed to: 0x47b37c42657bF416d44d5af4240C1d7E6fF74BE8
    // interestModel deployed to: 0xEfE060B75F177516f8Ef68bddf3e71f0E60A04Aa
    // bank_proxy deployed to: 0xeB19dDBa75fcFa7B1E290319355B22Efe9Ed4942
    // H2O deployed to: 0xc18433d08b73f9bfAd47e53EC65d21cDB8A43Fe6


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
