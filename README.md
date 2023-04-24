# FundMe Contract

This contract is a simple crowdfunding smart contract implemented on the Ethereum blockchain.

## Getting Started

To get started, clone this repository and run the following commands:

```
npm install
```

This will install all the necessary dependencies for this project.

## Testing

To test the contract, run the following command:

```
npx hardhat test
```

This will run the unit tests for the contract.

## Deployment

To deploy the contract, you will need to set up a `.env` file in the root of the project. The `.env` file should contain the following information:

```
INFURA_PROJECT_ID=<your Infura project ID>
DEPLOYER_PRIVATE_KEY=<your private key>
```

Once you have set up the `.env` file, you can run the following command to deploy the contract:

```
npx hardhat run scripts/deploy.js --network <network-name>
```

Replace `<network-name>` with the name of the network you want to deploy to (e.g. `goerli`, `kovan`, etc.).

## Usage

The `FundMe` smart contract allows users to fund the contract and withdraw the funds. The contract owner can withdraw the funds on behalf of the contract. Here are some example functions:

```solidity
function fund() public payable {}

function withdraw() public onlyOwner {}

function cheaperWithdraw() public payable onlyOwner {}

function getOwner() public view returns (address) {}

function getFunder(uint256 _index) public view returns (address) {}

function getAddressToAmountFunded(address _funder) public view returns (uint256) {}

function getPriceFeed() public view returns (AggregatorV3Interface) {}
```



## Contact

If you have any questions or feedback, please feel free to contact me at learnfarrukh@gmail.com.


