import 'dotenv/config'
import Web3 from 'web3';

const web3 = new Web3(process.env.ETHEREUM_NODE_URL);

// Define the ABI (Application Binary Interface) of the smart contract
const contractABI = [
  {
    constant: true,
    inputs: [],
    name: 'retrieve',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

const contract = new web3.eth.Contract(contractABI, '0xec7ef9d1e7ebf6403c84c925d1d1e1e66938bc07');

async function retrieveNumber() {
  try {
    const result = await contract.methods.retrieve().call();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

retrieveNumber();
