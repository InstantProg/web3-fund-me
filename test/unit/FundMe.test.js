const { assert } = require("chai")
const { deployments, ethers, getNamedAccounts } = require("hardhat")

describe("FundMe", async function () {
    let fundMe
    let deployer
    let mockV3Aggregator
    beforeEach(async function () {
        //deploy our fundMe contract using Hardhat deploy
        const accounts = await ethers.getSigners()
        // const accountZero = accounts[0]
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"]) //lets us run our entire deploy folder with tags
        console.log(`Your deployer is: ${deployer}`)

        fundMe = await ethers.getContract("FundMe", deployer)
        mockV3Aggregator = await ethers.getContract(
            "MockV3Aggregator",
            deployer
        )
    })
    describe("constructor", async function () {
        it("sets the aggregator addresses correctly", async function () {
            const response = await fundMe.getPriceFeed() //this will run locally the priceFeed variable of the smartcontract
            assert.equal(response, mockV3Aggregator.address)
        })
    })
})
