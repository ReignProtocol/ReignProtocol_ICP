const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("ReignStaking", function(accounts) {
    let token;
    let reignStaking;

    beforeEach(async () => {
        [owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("TestUSDCToken");
        token = await Token.deploy("100000000000000000000000");
        await token.deployed();
        const ReignStaking = await ethers.getContractFactory("ReignStaking");
        reignStaking = await ReignStaking.deploy(token.address, "10");
        await reignStaking.deployed();

        const transaction = await token.transfer(reignStaking.address,"10000000000000000000000");
        await transaction.wait();

        const transaction2 = await token.approve(reignStaking.address,"10000000000000000000000");
        await transaction2.wait();

        const transaction1 = await reignStaking.changeAPR(10);
        await transaction1.wait();
    });

    // COntract stake amount should be above 0
    it("contract should stake amount above 0", async function () {
		const [owner] = await ethers.getSigners();

		const transaction1 = await reignStaking.stake("100000000000000000000");
		await transaction1.wait();
		expect(await reignStaking.s_stakingBalance(owner.address)).to.equal(
			"100000000000000000000"
		);
	});



    //contract unstake amount should be above 0
    it("ReignStaking: unstake amount should be above 0", async function() {
        const [owner] = await ethers.getSigners();
        const transaction1 = await reignStaking.stake("100000000000000000000");
        await transaction1.wait();
        const transaction2 = await reignStaking.unstake("10000000000000000000");
        await transaction2.wait();
        expect (await reignStaking.s_stakingBalance(owner.address)).to.equal("90000000000000000000");
    });

    //Contract should fail when staking amount is 0 or less
    it("ReignStaking: fails when staking amount is 0 or less", async function() {
        try{
            const [owner] = await ethers.getSigners();
            const transaction1 = await reignStaking.stake("-20464");
            await transaction1.wait();
        } catch (err) {
            return err;
        }
        expect.fail("Expected an error");

    });

    //Contract should fail when unstaking amount is 0 or less
    it("ReignStaking: fails when unstaking amount is 0 or less", async function() {
        try{
            const [owner] = await ethers.getSigners();
            const transaction1 = await reignStaking.stake("100000000000000000000");
            await transaction1.wait();
            const transaction2 = await reignStaking.unstake("-20464");
            await transaction2.wait();
        } catch (err) {
            return err;
        }
        expect.fail("Expected an error");

    });

    //Contract should fail when there's an integer overflow during staking
    it("ReignStaking: fails when there's an integer overflow during staking", async function() {
        try{
            const [owner] = await ethers.getSigners();
            const transaction1 = await reignStaking.stake("115792089237316195423570985008687907853269984665640564039457584007913129639936");
            await transaction1.wait();
        } catch (err) {
            return err;
        }
        expect.fail("Expected an error");
    });

    //Contract should fail when there's an integer overflow during unstaking
    it("ReignStaking: fails when there's an integer overflow during unstaking", async function() {
        try{
            const [owner] = await ethers.getSigners();
            const transaction1 = await reignStaking.stake("100000000000000000000");
            await transaction1.wait();
            const transaction2 = await reignStaking.unstake("115792089237316195423570985008687907853269984665640564039457584007913129639936");
            await transaction2.wait();
        } catch (err) {
            return err;
        }
        expect.fail("Expected an error");
    });

   

    


    //Contract should fail incase of wrong data type during calculateTotalYield
    it("ReignStaking: fails incase of wrong data type during calculateTotalYield", async function() {
        try{
            const [owner] = await ethers.getSigners();
            const transaction1 = await reignStaking.calculateYieldTotal("0x123");
            await transaction1.wait();
        } catch (err) {
            return err;
        }
        expect.fail("Expected an error");
    });

    // Fails when executor is not the owner
    it("ReignStaking: fails when executor is not the owner", async function() {
        try{
            const [owner, user] = await ethers.getSigners();
            const transaction1 = await reignStaking.changeAPR(10, {from: user.address,});
            await transaction1.wait();
        } catch (err) {
            return err;
        }
        expect.fail("Expected an error");
    });

    //Fails incase of negative APR
    it("ReignStaking: fails incase of negative APR", async function() {
        try{
            const [owner] = await ethers.getSigners();
            const transaction1 = await reignStaking.changeAPR(-10, {from: owner.address,});
            await transaction1.wait();
        } catch (err) {
            return err;
        }
        expect.fail("Expected an error");
    });

    //Test total yield after 1 year should be 10^19
    it("ReignStaking: total yield after 1 year should be 10^19", async function() {
        const [owner] = await ethers.getSigners();
        const transaction1 = await reignStaking.stake("100000000000000000000");
        await transaction1.wait();
        const days = 365*24*60*60;

        const blockNumberBefore = await ethers.provider.getBlockNumber();
        const blockBefore = await ethers.provider.getBlock(blockNumberBefore);
        const timestampBefore = blockBefore.timestamp;

        await ethers.provider.send("evm_increaseTime", [days]);
        await ethers.provider.send("evm_mine");

        const blockNumberAfter = await ethers.provider.getBlockNumber();
        const blockAfter = await ethers.provider.getBlock(blockNumberAfter);
        const timestampAfter = blockAfter.timestamp;

        expect (blockNumberAfter).to.be.equal(blockNumberBefore + 1);
        expect (timestampAfter).to.be.equal(timestampBefore + days);

        expect (await reignStaking.getTotalYield()).to.equal("10000000000000000000");
    });
    








 



















    
});

