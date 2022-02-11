const {BlockChain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b9b64ffaa746660fbcbf763d03b2e4c63af305e5937b3f0924b40ccb99128354');
const myWallletAddress = myKey.getPublic('hex')

const tx1 = new Transaction(myWallletAddress, 'some public key', 10);
tx1.signTransaction(myKey);

let HuyCoin = new BlockChain();
HuyCoin.addTransaction(tx1);

console.log("start mining...");
HuyCoin.minePendingTransactions(myWallletAddress)

console.log("balance of myWallletAddress", HuyCoin.getBalanceOfAddress(myWallletAddress))


HuyCoin.chain[1].transactions[0].amount = 100

console.log("is chain valid?", HuyCoin.isChainValid())
