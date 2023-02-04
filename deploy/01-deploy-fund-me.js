const { network } = require("hardhat")
const { verify } = require("../utils/verify")
const { networkConfig } = require("../helper-hardhat-config")
//

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    let ethUsdPriceFeedAddress
    if (chainId == 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }
    log("Price feed address:")
    log(ethUsdPriceFeedAddress)

    const args = [ethUsdPriceFeedAddress]

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args, // put price feed address
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    log(
        "----------------------------------------------------------------------------------"
    )
    log("----------------------Let's Verify!-------------------------")
    if (!chainId == 31337 && process.env.ETHERSCAN_API_KEY) {
        await verify(fundMe.address, args)
    }
}
module.exports.tags = ["all", "fundme"]
