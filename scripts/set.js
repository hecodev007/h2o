// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const BigNumber = require('bignumber.js');

async function main() {

    //  const Tar = artifacts.require("Tollar");
    //  const Usr = artifacts.require("UsrStablecoin");
    //  const UsrIn = artifacts.require("UsrIncentive");
    //  const Pool = artifacts.require("UsrPool");
    //  let tar_addr = '0x32a2C78041991Be413e55580567948909911154D';
    //  let usr_addr = '0xDad785c864db82e79Fd410BDcDCD19900a69e09A';
    //  let usrIn_addr = '0x1ca416F8bCB7753f87E5ff3945cFED28C460bc79';
    //  let pool_addr = '0x0C702EAD8b654Cd92d277eaFE5924Ad24915a65a';
    //  // We get the contract to deploy
    //
    //  const tar = await Tar.at(tar_addr);
    //  const usr = await Usr.at(usr_addr);
    //  const usrIn = await UsrIn.at(usrIn_addr);
    //  const pool = await Pool.at(pool_addr);
    //
    //  await pool.setPoolParameters("1000000000",'0',2,5500,1194,5500,5500,'1000000000000000000000000');
    //  let _tar_usr_oracle = '0x54251F7BF10a6DeF2C2Ce9064fe7CC3651e645EC';
    //  let _usr_usd_oracle = '0x7D972c8a4eb43708aFD33B4cb47270d19736A395';
    //  let _tar_usr_24H_oracle = '0x34cC6bdbF4224e58D68C5BEcCb9105540fe6c5EE';
    //  let _usr_usd_24H_oracle = '0xfe9b2e0a324F48D1D954C1DEB60be27D1aF74bBC';
    //  await usr.setOracleAddress(_tar_usr_oracle, _usr_usd_oracle, _tar_usr_24H_oracle, _usr_usd_24H_oracle);
    // // await usr.addPool(pool_addr);
    //  const a = await usr.tar_usd_price();
    //  console.log("a",a)


    //npx hardhat run --network bsc_test scripts/set.js
    // npx hardhat run --network ropsten scripts/sample-script.js
    // npx hardhat run --network rinkeby scripts/sample-script.js
    // npx hardhat verify --network bsc_test 0xb41133a368CC9EE67a807a331dde6deC92C521a8 "0x442a05a9B2d5883ee1418d9411250E29021ca48C" "0x024C79c199C09104e43A89e457e7491f3548B9cA" "0x740012c9ca86f49f324de5de783b477d19fe3ea2" "0x2287374e8d7090214628adad44Ff1ab56b9284D1" "0x8412ebf45bac1b340bbe8f318b928c466c4e39ca"
    // tokenA = "0x9d733C50C1f9C79a2eB075c589Bbfe25Ebf91696";
    // tokenB = "0xFacC777EB24A8dF9F477C482aB76076B00776471";
    // _router = "0x46b966950EF1B0B27Ad0Ad942B4d9fFBfdcfE9D3";
    // amount = "10000000000000000";
    // const tkA = artifacts.require("UsToken");
    // const tka = await tkA.at(tokenA);
    // await tka.approve(_router, amount);
    //
    // const tkB = artifacts.require("UsToken");
    // const tkb = await tkB.at(tokenB);
    // await tkb.approve(_router, amount);
    // let tm = Date.parse(new Date()) / 1000;
    // console.log(tm);

    _stakeToken = "0x14FC237354fa2027a23b8E104D76C3B0Ec4051E6"
    const ERC20 = artifacts.require("contracts\\Bank.sol:ERC20");
    const stakeToken = await ERC20.at(_stakeToken);
    const b = await stakeToken.balanceOf("0x2287374e8d7090214628adad44Ff1ab56b9284D1");
    console.log("B:",b.toString());
    await stakeToken.approve("0x126C67fAFa5d26B4D972f6891a79701Ac51fE0Fc","2000000000000000000");




    // await hre.run("verify:verify", {
    //     address: '0xb6cc7f66bb42db56625b63866a6107202a01553e',
    //     constructorArguments: [],
    // })


    // const UST = await ethers.getContractFactory("UsToken");
    // const us = await UST.deploy("BUSD", "BUSD");
    // await us.deployed();
    // console.log("BUSD deployed to:", us.address);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
