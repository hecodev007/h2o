// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const {hre, upgrades} = require("hardhat");

//import { ethers, upgrades } from 'hardhat';

async function main() {

//npx hardhat verify --network bsc_test  0xeFFF6A1AeAe5661628DdaA9111CeF6DD72927fE1 0x9E4946C4348A94Df685b279E218a5dAD674AE481  28800
//   npx hardhat run --network bsc_test scripts/deploy-goblin.js
    //npx hardhat run --network rinkeby scripts/deploy-dex.js

    //0xfbe2B8904cFbb7542A27fA8AC0DBAe7E8fF0a8E6 0x45258eDE35110D87BA4f19751F904625921e3Fa0


    accounts = await web3.eth.getAccounts();

    /*
    //deploy pancake
   // let _router = "0x428Db81ab546a3F77FCD8718BdD364E73C51fa39";
    const StrategyAllTokenOnly = await ethers.getContractFactory("contracts/worker/pancake_farm/StrategyAllTokenOnly.sol:StrategyAllTokenOnly");
    const strategyAllTokenOnly = await StrategyAllTokenOnly.deploy(_router);
    await strategyAllTokenOnly.deployed();
    console.log("strategyAllTokenOnly deployed to:", strategyAllTokenOnly.address);

    const StrategyLiquidate = await ethers.getContractFactory("contracts/worker/pancake_farm/StrategyLiquidate.sol:StrategyLiquidate");
    const liquidate = await StrategyLiquidate.deploy(_router);
    await liquidate.deployed();
    console.log("liquidate deployed to:", liquidate.address);

    let _operator = accounts[0];
    let _masterChef = "0xe7B80b873B666414d94b45785F2cb3EA36936666";


    let _pid = 0;
    let _addStrat = strategyAllTokenOnly.address;
    let _liqStrat = liquidate.address;
    let _reinvestBountyBps = 0;
    let _feeBps = 3000;
    let _devAddr = accounts[0];
    let _fairLaunchAddr = "0x126C67fAFa5d26B4D972f6891a79701Ac51fE0Fc";
    let _baseToken = "0x6b1c87DF149ddff44c7C8502f3f88fB3228731B4";//wbnb or cake

    const PancakeswapGoblin = await ethers.getContractFactory("PancakeswapGoblin");
    const inst = await upgrades.deployProxy(PancakeswapGoblin, [_operator,_masterChef,_router,_pid,_addStrat,_liqStrat,_reinvestBountyBps,_feeBps,_devAddr,_fairLaunchAddr,_baseToken]);
    await inst.deployed();
    console.log("pancake goblin proxy deployed to:", inst.address);

    let _goblin = inst.address;
    const StrategyAddTwoSidesOptimal = await ethers.getContractFactory("contracts/worker/pancake_farm/PancakeV2StrategyAddTwoSidesOptimal.sol:StrategyAddTwoSidesOptimal");
    const trategyAdd = await StrategyAddTwoSidesOptimal.deploy(_router, _goblin);
    await trategyAdd.deployed();
    console.log("trategyAdd deployed to:", trategyAdd.address);

    const StrategyWithdrawMinimizeTrading = await ethers.getContractFactory("contracts/worker/pancake_farm/StrategyWithdrawMinimizeTrading.sol:StrategyWithdrawMinimizeTrading");
    const WithdrawMinimize = await StrategyWithdrawMinimizeTrading.deploy(_router);
    await WithdrawMinimize.deployed();
    console.log("WithdrawMinimize deployed to:", WithdrawMinimize.address);

     */


    //deploy mdex goblin
    const UST = await ethers.getContractFactory("UsToken");
    const hmdx = await UST.deploy("hmdx", "hmdx");
    await hmdx.deployed();
    console.log("hmdx deployed to:", hmdx.address);

    let _hmdx = hmdx.address;
    let _cycle = 28800;
    const BoardRoomHMDX = await ethers.getContractFactory("contracts/MdexContracts/boardRoomHMDX.sol:BoardRoomHMDX");
    const boardRoomHMDX = await BoardRoomHMDX.deploy(_hmdx, _cycle);
    await boardRoomHMDX.deployed();
    console.log("boardRoomHMDX deployed to:", boardRoomHMDX.address);
/*
    let _router = "0x46b966950EF1B0B27Ad0Ad942B4d9fFBfdcfE9D3";
    const StrategyLiquidateMdx = await ethers.getContractFactory("contracts/worker/mdx_farm/StrategyLiquidate.sol:StrategyLiquidate");
    const strategyLiquidateMdx = await StrategyLiquidateMdx.deploy(_router);
    await strategyLiquidateMdx.deployed();
    console.log("strategyLiquidateMdx deployed to:", strategyLiquidateMdx.address);


    let _busdt = '0x9d733C50C1f9C79a2eB075c589Bbfe25Ebf91696';
    let _operator = accounts[0];
    //bsc pool
    let _masterChef = "0x01C8F9C218Aca00f6dBab6b8B6140F5181C3632f";
    let _pid = 1;
    let _liqStrat = strategyLiquidateMdx.address;
    let _reinvestBountyBps = 0;
    let _feeBps = 3000;
    let _devAddr = accounts[0];
    let _fairLaunchAddr = "0x126C67fAFa5d26B4D972f6891a79701Ac51fE0Fc";
    let _baseToken = "0x6b1c87DF149ddff44c7C8502f3f88fB3228731B4"; //wbnb
    let _boardRoom = boardRoomHMDX.address;
    let _boardPID = 1;
    const MDXGoblin = await ethers.getContractFactory("MDXGoblin");
    const instMdexGoblin = await upgrades.deployProxy(MDXGoblin, [_busdt,_operator,_masterChef,_router,_pid,_liqStrat,_reinvestBountyBps,_feeBps,_devAddr,_fairLaunchAddr,_baseToken,_boardRoom,_boardPID]);
    await instMdexGoblin.deployed();
    console.log("mdex goblin proxy deployed to:", instMdexGoblin.address);

    const StrategyAddTwoSidesOptimal = await ethers.getContractFactory("contracts/worker/mdx_farm/MdexStrategyAddTwoSidesOptimal.sol:StrategyAddTwoSidesOptimal");
    const strategyAddTwoSidesOptimal = await StrategyAddTwoSidesOptimal.deploy(_router,instMdexGoblin.address);
    await strategyAddTwoSidesOptimal.deployed();
    console.log("strategyAddTwoSidesOptimal deployed to:", strategyAddTwoSidesOptimal.address);

    const StrategyWithdrawMinimizeTrading = await ethers.getContractFactory("contracts/worker/mdx_farm/StrategyWithdrawMinimizeTrading.sol:StrategyWithdrawMinimizeTrading");
    const strategyWithdrawMinimizeTrading = await StrategyWithdrawMinimizeTrading.deploy(_router,instMdexGoblin.address);
    await strategyWithdrawMinimizeTrading.deployed();
    console.log("strategyWithdrawMinimizeTrading deployed to:", strategyWithdrawMinimizeTrading.address);
*/
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
