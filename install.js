#!/usr/bin/env node

let Web3 = require("web3");
var program = require('commander');
var fs= require('fs');
var path = require('path');

// console.log(__dirname);

program
  .version('0.0.1')
  .option('-h, --help', 'show help .')
  .option('-p, --passwd', 'set new account passwd.')
  .option('-u, --url', 'set json-rpc url')
  .option('-a, --address', 'the address for owner')
  .parse(process.argv);

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ node install.js --passwd 11111111 --url http://127.0.0.1:6789 --address 0xa5efb0582443bc5b77f707cea850ef099e3068cc');
  console.log('');
});

if (!program.args.length) program.help();
if (!program.passwd){
    console.log('invalid params,passwd not set.');
    process.exit(1);
}
if (!program.url){ 
    console.log('invalid params.url not set.');
    process.exit(1);
};
if(!program.address){
    console.log("invalid param for address");
    process.exit(1);
}

function deployContract(){
    let web3;
    let rpcURL = program.args[1];
    let passwd = program.args[0];
    let ownerAddr = program.args[2];
    console.log("param of json-rpc is:" + rpcURL);
    console.log("param of passwd is:" + passwd);
    console.log("param of address is:" + ownerAddr);
    console.log(" ");

    if(typeof web3 !== 'undefined')
      web3 = new Web3(web3.currentProvider);
    else
      web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

    // get contracts info
    var TokenModuleManager = require("./build/contracts/TokenModuleManager.sol.js");
    var JuzixTokenManager = require("./build/contracts/JuzixTokenManager.sol.js");
    let ContrastsArr = [];
    ContrastsArr.push(TokenModuleManager);
    ContrastsArr.push(JuzixTokenManager);

    fs.readFile(path.join(__dirname, '.tmp.js'),{encoding:'utf-8'}, function (err,fileContent) {
        let fileContentTmp = {};
        if (err || fileContent == "") {
            // create wallet and unlock account
            let deployAddress=web3.personal.newAccount(passwd);
            console.log("create newAccount:" + deployAddress);
            console.log(" ");
            fileContentTmp.passwd = passwd;
            fileContentTmp.address = deployAddress;
            writeFile(JSON.stringify(fileContentTmp));
        } else {
            console.log("use already wallet address, read file content :" + fileContent);
            console.log(" ");
            fileContentTmp = JSON.parse(fileContent);
        }
        let deployAddr = fileContentTmp.address;
        let unlockRes = web3.personal.unlockAccount(deployAddr,fileContentTmp.passwd,999999999);
        console.log("unlock account : "+unlockRes);
        console.log(" ");
        
        for(var i = 0 ; i < ContrastsArr.length ; i++) {
            let MyContract = ContrastsArr[i];
            let abiDefinition=MyContract.all_networks.default.abi;
            let deployCode=MyContract.all_networks.default.unlinked_binary.substr(2);
            let calContract=web3.eth.contract(abiDefinition);

            let resContract=calContract.new({
                data:deployCode,
                from:deployAddr,
                gas : 9999999999999,
                gasPrice : "0x174876e800"
            },function(err,myContract){
                if (!err) {
                    if (!myContract.address) {
                        console.log(MyContract.contract_name + " deploy txHash: " + myContract.transactionHash) //部署合约的交易哈希值
                    }else{
                        console.log(MyContract.contract_name + ":" +myContract.address);
                        if(MyContract.contract_name=="JuzixTokenManager"){
                            let txHash = myContract.setOwner.sendTransaction(ownerAddr,{
                                from: deployAddr,
                                gas : "0x9184e729fff",
                                gasPrice : "0x174876e800",
                            });
                        }
                   } 
                } else {
                   console.log(err);
                }
            });
        } 
    });
    
    
};


// exec opera
deployContract();


function writeFile(_content){
    fs.writeFile(path.join(__dirname, '.tmp.js'), _content , function (err) {
        if (err) throw err;
        console.log("write file content :" + _content);
    });
}

