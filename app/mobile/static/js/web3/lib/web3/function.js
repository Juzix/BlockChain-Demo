/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file function.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var coder = require('../solidity/coder');
var utils = require('../utils/utils');
var errors = require('./errors');
var formatters = require('./formatters');
var sha3 = require('../utils/sha3');
var tx = require('ethereumjs-tx');
var uuid = require('node-uuid');

/**
 * This prototype should be used to call/sendTransaction to solidity functions
 */
var SolidityFunction = function(eth, json, address) {
    this._eth = eth;
    this._inputTypes = json.inputs.map(function(i) {
        return i.type;
    });
    this._outputTypes = json.outputs.map(function(i) {
        return i.type;
    });
    this._constant = json.constant;
    this._payable = json.payable;
    this._name = utils.transformToFullName(json);
    this._address = address;
};

SolidityFunction.prototype.extractCallback = function(args) {
    if (utils.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
    }
};

SolidityFunction.prototype.extractDefaultBlock = function(args) {
    if (args.length > this._inputTypes.length && !utils.isObject(args[args.length - 1])) {
        return formatters.inputDefaultBlockNumberFormatter(args.pop()); // modify the args array!
    }
};

/**
 * Should be called to check if the number of arguments is correct
 *
 * @method validateArgs
 * @param {Array} arguments
 * @throws {Error} if it is not
 */
SolidityFunction.prototype.validateArgs = function(args) {
    var inputArgs = args.filter(function(a) {
        // filter the options object but not arguments that are arrays
        return !(utils.isObject(a) === true && utils.isArray(a) === false);
    });
    if (inputArgs.length !== this._inputTypes.length) {
        throw errors.InvalidNumberOfSolidityArgs();
    }
};

/**
 * Should be used to create payload from arguments
 *
 * @method toPayload
 * @param {Array} solidity function params
 * @param {Object} optional payload options
 */
SolidityFunction.prototype.toPayload = function(args) {
    var options = {};
    if (args.length > this._inputTypes.length && utils.isObject(args[args.length - 1])) {
        options = args[args.length - 1];
    }
    this.validateArgs(args);
    options.to = this._address;
    options.data = '0x' + this.signature() + coder.encodeParams(this._inputTypes, args);
    return options;
};

/**
 * Should be used to get function signature
 *
 * @method signature
 * @return {String} function signature
 */
SolidityFunction.prototype.signature = function() {
    return sha3(this._name).slice(0, 8);
};

SolidityFunction.prototype.unpackOutput = function(output) {
    if (!output) {
        return;
    }

    output = output.length >= 2
        ? output.slice(2)
        : output;
    var result = coder.decodeParams(this._outputTypes, output);
    return result.length === 1
        ? result[0]
        : result;
};

/**
 * Calls a contract function.
 *
 * @method call
 * @param {...Object} Contract function arguments
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {String} output bytes
 */
SolidityFunction.prototype.call = function() {
    var args = Array.prototype.slice.call(arguments).filter(function(a) {
        return a !== undefined;
    });
    var callback = this.extractCallback(args);
    var defaultBlock = this.extractDefaultBlock(args);
    var payload = this.toPayload(args);

    if (!callback) {
        var output = this._eth.call(payload, defaultBlock);
        return this.unpackOutput(output);
    }

    var self = this;
    this._eth.call(payload, defaultBlock, function(error, output) {
        if (error)
            return callback(error, null);

        var unpacked = null;
        try {
            unpacked = self.unpackOutput(output);
        } catch (e) {
            error = e;
        }

        callback(error, unpacked);
    });
};

/**
 * Should be used to sendTransaction to solidity function
 *
 * @method sendTransaction
 */
SolidityFunction.prototype.sendTransaction = function() {
    var args = Array.prototype.slice.call(arguments).filter(function(a) {
        return a !== undefined;
    });
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);

    if (payload.value > 0 && !this._payable) {
        throw new Error('Cannot send value to non-payable function');
    }

    if (!callback) {
        return this._eth.sendTransaction(payload);
    }

    this._eth.sendTransaction(payload, callback);
};

/**
 * Should be used to sendRawTransaction to solidity function
 *
 * @method sendRawTransaction
 */
SolidityFunction.prototype.sendRawTransaction = function() {
    var args = Array.prototype.slice.call(arguments).filter(function(a) {
        return a !== undefined;
    });
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);
    if (typeof(payload.value) == "undefined") {
        payload.value = 0;
    }

    if (args.length < 2) {
        console.log("Args invalid");
        return;
    }

    var keyObject = null;
    // 如果有全局的keyManager，那么先在全局的keyManager里面找是否存在
    // Node.js环境
    if (typeof global !== "undefined") {
        if (global.keyManager && global.keyManager.keyObjects) {
            global.keyManager.keyObjects.forEach((_keyObject) => {
                if (_keyObject.address == payload.from) {
                    keyObject = _keyObject;
                }
            })
        }        
    }


    // 浏览器环境
    if(typeof window !== "undefined"){
        if(window.keyManager && window.keyManager.keyObjects){
            window.keyManager.keyObjects.forEach((_keyObject) => {
                if (_keyObject.address == payload.from) {
                    keyObject = _keyObject;
                }
            })
        }
    }

    if (keyObject && keyObject.privateKey) {
        var privateKey = keyObject.privateKey;
        var timestamp = new Date().getTime();
        if (this._eth._requestManager && this._eth._requestManager.provider) {
            timestamp = parseInt(this._eth.timeStamp());
        }
        var nonce = Buffer.from(sha3(uuid()), 'hex');

        for (var i = 7; i >= 0; i--) {
            nonce[i] = timestamp % 256;
            timestamp /= 256;
        }

        var rawTx = {
            "nonce": nonce,
            "gasPrice": payload.gasPrice,
            "gas": payload.gas,
            "to": payload.to,
            "value": payload.value,
            "data": payload.data
        }

        var t = new tx(rawTx);
        var privateKeyBuffer = new Buffer(privateKey, 'hex')
        t.sign(privateKeyBuffer);
        var serializedTx = t.serialize().toString('hex');

        if (!callback) {
            return this._eth.sendRawTransaction(serializedTx);
        }

        this._eth.sendRawTransaction(serializedTx, callback);
    } else {
        console.error("from:" + payload.from + ", privateKey not get!");
    }
};

/**
 * Should be used to estimateGas of solidity function
 *
 * @method estimateGas
 */
SolidityFunction.prototype.estimateGas = function() {
    var args = Array.prototype.slice.call(arguments);
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);

    if (!callback) {
        return this._eth.estimateGas(payload);
    }

    this._eth.estimateGas(payload, callback);
};

/**
 * Return the encoded data of the call
 *
 * @method getData
 * @return {String} the encoded data
 */
SolidityFunction.prototype.getData = function() {
    var args = Array.prototype.slice.call(arguments);
    var payload = this.toPayload(args);

    return payload.data;
};

/**
 * Should be used to get function display name
 *
 * @method displayName
 * @return {String} display name of the function
 */
SolidityFunction.prototype.displayName = function() {
    return utils.extractDisplayName(this._name);
};

/**
 * Should be used to get function type name
 *
 * @method typeName
 * @return {String} type name of the function
 */
SolidityFunction.prototype.typeName = function() {
    return utils.extractTypeName(this._name);
};

/**
 * Should be called to get rpc requests from solidity function
 *
 * @method request
 * @returns {Object}
 */
SolidityFunction.prototype.request = function() {
    var args = Array.prototype.slice.call(arguments);
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);
    var format = this.unpackOutput.bind(this);

    return {
        method: this._constant
            ? 'eth_call'
            : 'eth_sendTransaction',
        callback: callback,
        params: [payload],
        format: format
    };
};

/**
 * Should be called to execute function
 *
 * @method execute
 */
SolidityFunction.prototype.execute = function() {
    var transaction = !this._constant;

    // send transaction
    if (transaction) {
        return this.sendTransaction.apply(this, Array.prototype.slice.call(arguments));
    }

    // call
    return this.call.apply(this, Array.prototype.slice.call(arguments));
};

/**
 * Should be called to attach function to contract
 *
 * @method attachToContract
 * @param {Contract}
 */
SolidityFunction.prototype.attachToContract = function(contract) {
    var execute = this.execute.bind(this);
    execute.request = this.request.bind(this);
    execute.call = this.call.bind(this);
    execute.sendTransaction = this.sendTransaction.bind(this);
    execute.sendRawTransaction = this.sendRawTransaction.bind(this);
    execute.estimateGas = this.estimateGas.bind(this);
    execute.getData = this.getData.bind(this);
    var displayName = this.displayName();
    if (!contract[displayName]) {
        contract[displayName] = execute;
    }
    contract[displayName][this.typeName()] = execute; // circular!!!!
};

module.exports = SolidityFunction;
