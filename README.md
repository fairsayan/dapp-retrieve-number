# dapp-retrieve-number
Example project to play a smart contract "contract.sol" deployed on Goerli (0xec7ef9d1e7ebf6403c84c925d1d1e1e66938bc07)
You will find:
- **main.js**: a Node program to retrieve current value stored in the contract
- **index.html**: a web page where you can connect with your MetaMask wallet (dApp) and retrieve the number

## main.js usage
- install node
- ```node install```
- edit *env_template* and set the node url to query (you can create an account on Infura)
- ```mv env_template .env```
- ```node main.js```

## index.html usage
- install a webserver like serve (```sudo npm install --global serve```)
- ```serve```