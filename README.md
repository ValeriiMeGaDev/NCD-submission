# NCD-submission
NCD submission for Near Blockchain


This project is a simple assembly script smart contract for Near Blockchain.
Smart contract has 2 methods:
1. **hashNameAndPushIntoBlockChain** – method which consumes string, hash it and store into the blockchain. 
2. **getNameByHashInBlockChain** – method which extracts original name from the blockchain by string hash. 

Also it demonstrates work with **Persistent collections** from _near-sdk-as_, specifically _PersistentMap_


Example from the terminal after executing script which trigger smart contract methods for write and read operations:

Scheduling a call: dev-1644930092093-45928268132672.hashNameAndPushIntoBlockChain({"value":"Brian"})
Doing account.functionCall()
Transaction Id 2rJHTirhURdbAUBZgrL3oiCgV5fmvhhvvYPuPFcLfTEs
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/2rJHTirhURdbAUBZgrL3oiCgV5fmvhhvvYPuPFcLfTEs
64452582


Scheduling a call: dev-1644930092093-45928268132672.getNameByHashInBlockChain({"value":"64452582"})
Doing account.functionCall()
Transaction Id AzRMGy9PYC88BmHG7vW6FLHVhmCUNb9zj9tdqQhSgPkW
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/AzRMGy9PYC88BmHG7vW6FLHVhmCUNb9zj9tdqQhSgPkW
'Brian'


To run this code please refer to the **Usage** section [here](https://github.com/Learn-NEAR/starter--near-sdk-as)
