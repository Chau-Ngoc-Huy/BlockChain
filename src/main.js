const {BlockChain, Transaction} = require('./blockchain');

let Huycoin = new BlockChain();


Huycoin.createTransaction(new Transaction('address1', 'address2', 100))
Huycoin.createTransaction(new Transaction('address2', 'address1', 200))

console.log("start mining...")
Huycoin.minePendingTransactions('miner')

Huycoin.minePendingTransactions('miner')

console.log('balance of miner: ' + Huycoin.getBalanceOfAddress('miner'))

