const {expect} = require("chai");
const {expectRevert, time} = require('@openzeppelin/test-helpers');


describe("Greeter", function () {
    it("Should return the new greeting once it's changed", async function () {
        accounts = await web3.eth.getAccounts();

        const AirDrop = await ethers.getContractFactory("AirDrop");
        const airDrop = await AirDrop.deploy(accounts[0]);

        console.log(accounts.length)

         await airDrop.deployed();

        airDrop.SetD();
        airDrop.GetD();


        // for (i = 0; i < accounts.length; i++) {
        //     if (i < 5) {
        //         await airDrop.addWhiteList(accounts[i], accounts[0]);
        //     }
        //     if (i >= 5 && i < 10) {
        //         await airDrop.addWhiteList(accounts[i], accounts[1]);
        //     }
        //     if (i >= 10 && i < 15) {
        //         await airDrop.addWhiteList(accounts[i], accounts[5]);
        //     }
        //     if (i >= 15) {
        //         await airDrop.addWhiteList(accounts[i], accounts[10]);
        //     }
        // }
        //
        //
        // //await airDrop.addWhiteList(accounts,accounts[3]);
        // //getThreeLevelLists
        // //getFourLevelLists
        // let addr0 = await airDrop.getOneLevelLists(accounts[0]);
        // console.log("one1 level:", addr0);
        // let addr1 = await airDrop.getTwoLevelLists(accounts[0]);
        // console.log("one2 level:", addr1);
        // let addr2 = await airDrop.getThreeLevelLists(accounts[0]);
        // console.log("one3 level:", addr2);
        // let addr3 = await airDrop.getFourLevelLists(accounts[0]);
        // console.log("one4 level:", addr3);
        //
        //
        // let re = await airDrop.getUppers(accounts[15]);
        // console.log(re[0], re[1], re[2], re[3]);
    });
});
