# FundMe

FundMe is a smart contract for crowdfunding built on the Ethereum blockchain. It uses Chainlink's Price Feed to ensure a minimum funding amount is met.

## Getting Started

To get started, you need to have Node.js and npm installed. Clone the repository and navigate to the project directory. Then, install the required dependencies:

```bash
npm install
```

## Testing

To run the unit tests for the smart contract, use the following command:

```bash
npx hardhat test
```

## Deploying

To deploy the smart contract to a local development network, use the following command:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

To deploy the smart contract to a test network like Rinkeby, first create a `.env` file with your Rinkeby RPC URL and wallet private key:

```
RINKEBY_RPC_URL=<your_rinkeby_rpc_url>
PRIVATE_KEY=<your_wallet_private_key>
```

Then, use the following command to deploy:

```bash
source .env
npx hardhat run scripts/deploy.js --network rinkeby
```

## Usage

The `FundMe` smart contract allows users to fund the contract and withdraw the funds. The contract owner can withdraw the funds on behalf of the contract. Here are some example functions:

```solididty
function fund() public payable {}

function withdraw() public onlyOwner {}

function cheaperWithdraw() public payable onlyOwner {}

function getOwner() public view returns (address) {}

function getFunder(uint256 _index) public view returns (address) {}

function getAddressToAmountFunded(address _funder) public view returns (uint256) {}

function getPriceFeed() public view returns (AggregatorV3Interface) {}
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
