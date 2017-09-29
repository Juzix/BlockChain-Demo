webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* unused harmony default export */ var _unused_webpack_default_export = ([]);

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_number_js__ = __webpack_require__(143);



/* unused harmony default export */ var _unused_webpack_default_export = ([__WEBPACK_IMPORTED_MODULE_0__modules_number_js__["a" /* default */]]);

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_index__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_Redirect__ = __webpack_require__(145);



var Home = function Home(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(119)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [__WEBPACK_IMPORTED_MODULE_2__map_index__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__map_Redirect__["a" /* default */]]
}));

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(120);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var state = {};

var mutations = {};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	modules: {},
	state: state
}));

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * 作者：梁燕翔
 * 时间：2017/04/11
 * 功能：对cookie的操作
 */

/* unused harmony default export */ var _unused_webpack_default_export = ({
  get(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  set(cname, cvalue, ms) {
    let d = new Date();
    d.setTime(d.getTime() + ms);
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter('number', function (oldValue) {
    var f = parseFloat(oldValue);
    if (isNaN(f)) {
        return;
    }
    var f = Math.round(oldValue * 100) / 100;
    var newValue = f.toString();
    var rs = newValue.indexOf('.');
    if (rs < 0) {
        rs = newValue.length;
        newValue += '.';
    }
    while (newValue.length <= rs + 2) {
        newValue += '0';
    }
    return newValue;
}));

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_store__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_API_config_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_js_cookie_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_index_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_index_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_css_reset_css__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_css_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_css_element_ui_css__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_css_element_ui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_css_element_ui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_css_iconfont_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_css_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__static_css_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__less_index_less__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__less_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__less_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_contract_servies__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_contract_config__ = __webpack_require__(41);

















console.info('was', Was);


Was.exec('app', 'getAppInfo', '', function (res) {
    console.log('getAppInfo', res);
    __WEBPACK_IMPORTED_MODULE_12__services_contract_servies__["a" /* default */].setProvider(res.data.contractUrl);
    Was.exec('user', 'getUserInfo', '', function (res) {
        console.log('getUserInfo', res);
        __WEBPACK_IMPORTED_MODULE_12__services_contract_servies__["a" /* default */].setPrivateKey(res.data.privateKey);

        __WEBPACK_IMPORTED_MODULE_12__services_contract_servies__["a" /* default */].setAddress(res.data.address);
    });
    __WEBPACK_IMPORTED_MODULE_12__services_contract_servies__["a" /* default */].addContract('JuzixTokenManager', __WEBPACK_IMPORTED_MODULE_13__config_contract_config__["a" /* default */].JuzixTokenManager.abi, '', '0.0.1.0', "TokenModuleManager", "0.0.1.0");
});

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_element_ui___default.a);

__WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].beforeEach(function (to, from, next) {

    if (false) {
        next({
            path: '/index',
            query: {
                redirect: to.fullPath
            }
        });
    } else {
        next();
    }
});

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

window.vueVm = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    data: function data() {
        return {
            loginPopFlag: false,
            redirectPath: ''
        };
    },

    router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_3__vuex_store__["a" /* default */],

    components: {}
});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '*',
    redirect: {
        path: '/index'
    },
    hidden: true
});

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var Home = function Home(resolve) {
    return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(119)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var Index = function Index(resolve) {
    return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(269)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/',
    component: Index,
    name: '主页',
    icon: '',
    children: [{
        path: '/index',
        component: Index,
        name: '主页',
        icon: ''
    }]
});

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = {"name":"elliptic","version":"6.4.0","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"_from":"elliptic@6.4.0","_resolved":"http://registry.npm.taobao.org/elliptic/download/elliptic-6.4.0.tgz"}

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = {"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation's data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation's data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn't exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var CONTRACT_CONFIG = {
	OwnerNamed: {
		abi: [{ "constant": true, "inputs": [], "name": "getErrno", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_str2", "type": "string" }, { "name": "_str3", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_addr", "type": "address" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_i", "type": "int256" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_version", "type": "string" }], "name": "register", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_str2", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getSender", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_key", "type": "string" }, { "name": "_value", "type": "string" }], "name": "writedb", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_ui", "type": "uint256" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }],
		address: "0x0000000000000000000000000000000000000012"
	},
	RegisterManager: {
		abi: [{ "constant": true, "inputs": [{ "name": "_contractAddr", "type": "address" }], "name": "IfContractRegist", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "unRegister", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_fromName", "type": "string" }, { "name": "_fromVersion", "type": "string" }, { "name": "_toName", "type": "string" }, { "name": "_toVersion", "type": "string" }, { "name": "_signString", "type": "string" }], "name": "transferContract", "outputs": [{ "name": "_errno", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_version", "type": "string" }], "name": "register", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_addr", "type": "address" }], "name": "findResNameByAddress", "outputs": [{ "name": "_contractName", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_pageNum", "type": "uint256" }, { "name": "_pageSize", "type": "uint256" }], "name": "getRegisteredContract", "outputs": [{ "name": "_json", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_version", "type": "string" }], "name": "getContractAddress", "outputs": [{ "name": "_address", "type": "address" }], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }],
		address: "0x0000000000000000000000000000000000000012"
	},
	UserManager: {
		abi: [{ "constant": true, "inputs": [{ "name": "_account", "type": "string" }], "name": "getAccountState", "outputs": [{ "name": "_state", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_departmentId", "type": "string" }, { "name": "_pageNum", "type": "uint256" }, { "name": "_pageSize", "type": "uint256" }], "name": "findByDepartmentIdTree", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_mobile", "type": "string" }], "name": "findByMobile", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "userExists", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getRevision", "outputs": [{ "name": "_revision", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getErrno", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_roleId", "type": "string" }], "name": "checkUserRole", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_status", "type": "uint256" }], "name": "updatePasswordStatus", "outputs": [{ "name": "_ret", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_actionId", "type": "string" }], "name": "actionUsed", "outputs": [{ "name": "_used", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_str2", "type": "string" }, { "name": "_str3", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_addr", "type": "address" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_account", "type": "string" }], "name": "login", "outputs": [{ "name": "_json", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_i", "type": "int256" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_accountStatus", "type": "uint256" }, { "name": "_pageNo", "type": "uint256" }, { "name": "_pageSize", "type": "uint256" }], "name": "pageByAccountStatus", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userJson", "type": "string" }], "name": "update", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_version", "type": "string" }], "name": "register", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "getUserState", "outputs": [{ "name": "_state", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_addr", "type": "address" }, { "name": "_departmentId", "type": "string" }], "name": "checkWritePermission", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_email", "type": "string" }], "name": "findByEmail", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_str2", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_roleId", "type": "string" }, { "name": "_actionId", "type": "string" }], "name": "checkRoleAction", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_name", "type": "string" }], "name": "findByLoginName", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_status", "type": "uint256" }], "name": "updateUserStatus", "outputs": [{ "name": "_ret", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getSender", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_roleId", "type": "string" }], "name": "getRoleModuleId", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "eraseAdminByAddress", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_roleIds", "type": "string" }], "name": "getUserCountMappingByRoleIds", "outputs": [{ "name": "_json", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_departmentId", "type": "string" }, { "name": "_index", "type": "uint256" }], "name": "getChildIdByIndex", "outputs": [{ "name": "_childDepartmentId", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_departmentId", "type": "string" }], "name": "departmentExists", "outputs": [{ "name": "_exists", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "listAll", "outputs": [{ "name": "_userListJson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_index", "type": "uint256" }], "name": "getUserRoleId", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_roleId", "type": "string" }], "name": "findByRoleId", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_departmentId", "type": "string" }], "name": "getUserCountByDepartmentId", "outputs": [{ "name": "_count", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_key", "type": "string" }, { "name": "_value", "type": "string" }], "name": "writedb", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_actionId", "type": "string" }], "name": "checkActionExists", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "deleteByAddress", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_roleId", "type": "string" }], "name": "addUserRole", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "findByAddress", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_status", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_departmentId", "type": "string" }, { "name": "_pageNum", "type": "uint256" }, { "name": "_pageSize", "type": "uint256" }], "name": "findByDepartmentIdTreeAndContion", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_account", "type": "string" }], "name": "findByAccount", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_roleId", "type": "string" }], "name": "roleUsed", "outputs": [{ "name": "_used", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_actionId", "type": "string" }], "name": "actionExists", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "getUserDepartmentId", "outputs": [{ "name": "_departId", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_actionId", "type": "string" }], "name": "checkUserAction", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "getUserAddrByAddr", "outputs": [{ "name": "_address", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userJson", "type": "string" }], "name": "insert", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getUserCount", "outputs": [{ "name": "_count", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_ui", "type": "uint256" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }], "name": "getOwnerAddrByAddr", "outputs": [{ "name": "_address", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_actionId", "type": "string" }], "name": "getUserCountByActionId", "outputs": [{ "name": "_count", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_ownerAddr", "type": "address" }, { "name": "_publilcKey", "type": "string" }, { "name": "_cipherGroupKey", "type": "string" }, { "name": "_uuid", "type": "string" }], "name": "resetPasswd", "outputs": [{ "name": "_ret", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_roleId", "type": "string" }], "name": "roleExists", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_departmentId", "type": "string" }], "name": "findByDepartmentId", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_uuid", "type": "string" }], "name": "findByUuid", "outputs": [{ "name": "_strjson", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_contractAddr", "type": "address" }, { "name": "_funcSha3", "type": "string" }], "name": "checkUserPrivilege", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_departmentId", "type": "string" }], "name": "getAdmin", "outputs": [{ "name": "_admin", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_actionId", "type": "string" }, { "name": "_index", "type": "uint256" }], "name": "getRoleIdByActionIdAndIndex", "outputs": [{ "name": "_roleId", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_actionId", "type": "string" }, { "name": "_resKey", "type": "address" }, { "name": "_opSha3Key", "type": "string" }], "name": "checkActionWithKey", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_userAddr", "type": "address" }, { "name": "_status", "type": "uint256" }], "name": "updateAccountStatus", "outputs": [{ "name": "_ret", "type": "bool" }], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_errno", "type": "uint256" }, { "indexed": false, "name": "_info", "type": "string" }], "name": "Notify", "type": "event" }],
		address: "0x0000000000000000000000000000000000000012"
	},

	JuzixTokenManager: {
		abi: [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowancePaillier", "outputs": [{ "name": "remaining", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_moduleName", "type": "string" }, { "name": "_moduleVersion", "type": "string" }, { "name": "_contractName", "type": "string" }, { "name": "_contractVersion", "type": "string" }], "name": "register", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_address", "type": "address" }], "name": "setOwner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getErrno", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupplyPaillier", "outputs": [{ "name": "_supply", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "nizkpp", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_buyAddr", "type": "address" }, { "name": "_pageNum", "type": "uint256" }, { "name": "_pageSize", "type": "uint256" }], "name": "listAllBuyBalance", "outputs": [{ "name": "_json", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_str2", "type": "string" }, { "name": "_str3", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "INITIAL_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_addr", "type": "address" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_i", "type": "int256" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_moduleName", "type": "string" }, { "name": "_moduleVersion", "type": "string" }, { "name": "_newOwner", "type": "address" }], "name": "changeModuleRegisterOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_moduleName", "type": "string" }, { "name": "_moduleVersion", "type": "string" }], "name": "register", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_param", "type": "string" }, { "name": "_to", "type": "address" }], "name": "buyFrom", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_str2", "type": "string" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getSender", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_moduleName", "type": "string" }, { "name": "_moduleVersion", "type": "string" }, { "name": "_contractName", "type": "string" }, { "name": "_contractVersion", "type": "string" }, { "name": "_newOwner", "type": "address" }], "name": "changeContractRegisterOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_key", "type": "string" }, { "name": "_value", "type": "string" }], "name": "writedb", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getNizkStruct", "outputs": [{ "name": "_ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOfPaillier", "outputs": [{ "name": "_balance", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_str", "type": "string" }, { "name": "_ui", "type": "uint256" }], "name": "log", "outputs": [{ "name": "_ret", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "isAdmin", "outputs": [{ "name": "_json", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_account", "type": "address" }, { "name": "_pageNum", "type": "uint256" }, { "name": "_pageSize", "type": "uint256" }], "name": "pageBuyRecordByAccount", "outputs": [{ "name": "_json", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "string" }], "name": "approvePaillier", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_circulationShares", "type": "string" }], "name": "setCirculationShares", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_account", "type": "address" }, { "name": "_tranferType", "type": "uint256" }, { "name": "_pageNum", "type": "uint256" }, { "name": "_pageSize", "type": "uint256" }], "name": "pageByAccount", "outputs": [{ "name": "_json", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "init", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_param", "type": "string" }, { "name": "_to", "type": "address" }], "name": "transferPaillier", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "string" }], "name": "TransferPailler", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "string" }], "name": "ApprovalPailler", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_errno", "type": "uint256" }, { "indexed": false, "name": "_info", "type": "string" }], "name": "Notify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }]
	}

};
/* harmony default export */ __webpack_exports__["a"] = (CONTRACT_CONFIG);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var BASE = "cloudweb",
    USER_URL = BASE + "/user/",
    CHAIN_URL = BASE + "/chain/",
    NODE_URL = BASE + "/chainode/",
    NODE = {
    join: CHAIN_URL + "join.do",
    getAuditList: NODE_URL + "getAuditList.do",
    getList: CHAIN_URL + "getChainNodes.do",
    reviewList: NODE_URL + "getAuditList.do",
    reviewDetail: NODE_URL + "getAuditInfo.do",
    submitReview: NODE_URL + "submitAudit.do",
    applicationList: NODE_URL + "getApplyList.do",
    applicationDetail: NODE_URL + "getApplyInfo.do",
    details: NODE_URL + "getNodeInfo.do"
},
    CHAIN = {
    create: CHAIN_URL + "create.do",
    record: CHAIN_URL + "getchainRecoders.do",
    getList: CHAIN_URL + "getchainsByJoining.do",
    details: CHAIN_URL + "getChainInfo.do",
    joinedList: CHAIN_URL + "getChainsByJoined.do",
    getTradingVol: CHAIN_URL + "getTrading.do",
    blockTotal: CHAIN_URL + "getBlocking.do",
    getManageNode: CHAIN_URL + "getManageNode.do",
    getChainNodes: CHAIN_URL + "getChainNodes.do"
},
    USER = {
    register: USER_URL + "register.do",
    login: USER_URL + "login.do",
    verificationCode: USER_URL + "validation.do",
    baseInfo: USER_URL + "getUserInfo.do",
    getMenuList: USER_URL + "getMenus.do",
    logout: USER_URL + "logout.do"
};

/* harmony default export */ __webpack_exports__["a"] = ({
    BASE: BASE,
    NODE: NODE,
    CHAIN: CHAIN,
    USER: USER
});

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_contract_config__ = __webpack_require__(41);





var EthereumTx = __webpack_require__(215),
    uuid = __webpack_require__(258);


var DEFAULT_ABI = [{
	"constant": false,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}, {
		"name": "_contractName",
		"type": "string"
	}, {
		"name": "_contractVersion",
		"type": "string"
	}],
	"name": "register",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_addr",
		"type": "address"
	}],
	"name": "findModuleNameByAddress",
	"outputs": [{
		"name": "_moduleName",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_contractAddr",
		"type": "address"
	}],
	"name": "IfContractRegist",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "unRegister",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}],
	"name": "IfModuleRegist",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}],
	"name": "getModuleAddress",
	"outputs": [{
		"name": "_address",
		"type": "address"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_fromModuleNameAndVersion",
		"type": "string"
	}, {
		"name": "_fromNameAndVersion",
		"type": "string"
	}, {
		"name": "_toModuleNameAndVersion",
		"type": "string"
	}, {
		"name": "_toNameAndVersion",
		"type": "string"
	}, {
		"name": "_signString",
		"type": "string"
	}],
	"name": "transferContract",
	"outputs": [{
		"name": "_errno",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}, {
		"name": "_contractName",
		"type": "string"
	}, {
		"name": "_contractVersion",
		"type": "string"
	}],
	"name": "IfContractRegist",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}, {
		"name": "_newOwner",
		"type": "address"
	}],
	"name": "changeModuleRegisterOwner",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}],
	"name": "register",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_addr",
		"type": "address"
	}],
	"name": "findContractVersionByAddress",
	"outputs": [{
		"name": "_contractVersion",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_addr",
		"type": "address"
	}],
	"name": "findResNameByAddress",
	"outputs": [{
		"name": "_contractName",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}, {
		"name": "_contractName",
		"type": "string"
	}, {
		"name": "_contractVersion",
		"type": "string"
	}, {
		"name": "_newOwner",
		"type": "address"
	}],
	"name": "changeContractRegisterOwner",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_moduleName",
		"type": "string"
	}, {
		"name": "_moduleVersion",
		"type": "string"
	}, {
		"name": "_contractName",
		"type": "string"
	}, {
		"name": "_contractVersion",
		"type": "string"
	}],
	"name": "getContractAddress",
	"outputs": [{
		"name": "_address",
		"type": "address"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_addr",
		"type": "address"
	}],
	"name": "findModuleVersionByAddress",
	"outputs": [{
		"name": "_moduleVersion",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_pageNum",
		"type": "uint256"
	}, {
		"name": "_pageSize",
		"type": "uint256"
	}],
	"name": "getRegisteredContract",
	"outputs": [{
		"name": "_json",
		"type": "string"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_moduleAddr",
		"type": "address"
	}],
	"name": "IfModuleRegist",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"type": "function"
}, {
	"inputs": [],
	"payable": false,
	"type": "constructor"
}],
    DEFAULT_ADDRESS = '0x0000000000000000000000000000000000000011';

var isArray = function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
},
    isJson = function isJson(obj) {
	var isjson = (typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(obj)) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
	return isjson;
},
    dealArgumentList = function dealArgumentList(argumentList) {
	var result = argumentList.map(function (item, index, input) {
		if (isJson(item)) {

			return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(item);
		}
		return item;
	});
	return result;
},
    dealData = function dealData(str) {

	var code = parseInt(str.substr(2, 64), 16),
	    start = parseInt(str.substr(66, 64), 16),
	    dataLength = parseInt(str.substr(130, 64), 16) * 2,
	    data = str.substr(194, dataLength);
	if (dataLength % 2 == 0) {
		var StrHex = "";
		for (var i = 0; i < dataLength; i = i + 2) {
			var str = data.substr(i, 2);

			var n = parseInt(str, 16);
			StrHex = StrHex + String.fromCharCode(n);
		}
	}
	console.log('code==', code, 'data==', data);
	return {
		code: code,
		data: StrHex
	};
};

var ContractServies = function () {
	function ContractServies() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ContractServies);

		this.initRegisterContract = function () {
			var ABI = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ABI;
			var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ADDRESS;

			var REGContract = this.web3.eth.contract(ABI),
			    _registerInstance = REGContract.at(address),
			    registerInstance = {
				ABI: ABI,
				address: address,
				contract: _registerInstance
			};
			this._contracts["RegisterManager"] = registerInstance;
		};

		this.web3 = null;
		this.provider = '';
		this.privateKey = '';
		this.userAddress = '';
		this.nonce = '';
		this.MetaCoin = null;
		this._contracts = {};
		this.publicKey = '';
		this.privateKeyRandom = '';
		this.callbacks = {};
		this.wrapCount = 60;
		this.timeout = 60;
	}

	__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ContractServies, [{
		key: 'initWeb3',
		value: function initWeb3() {
			if (this.web3 == null) {
				this.web3 = new Web3(new Web3.providers.HttpProvider(this.provider));
			}
		}
	}, {
		key: 'setProvider',
		value: function setProvider(url) {
			this.provider = url;
			this.web3 = new Web3(new Web3.providers.HttpProvider(this.provider));
			this.initRegisterContract();
		}
	}, {
		key: 'setPrivateKey',
		value: function setPrivateKey(key) {
			this.privateKey = key;
		}
	}, {
		key: 'setAddress',
		value: function setAddress(address) {
			this.userAddress = address;
		}
	}, {
		key: 'setNonce',
		value: function setNonce() {
			var timestamp = new Date().getTime();
			var nonce = Buffer.from(this.web3.sha3(uuid()).replace("0x", ""), 'hex');
			for (var i = 7; i >= 0; i--) {
				var offset = 64 - (i + 1) * 8;
				nonce[i] = timestamp % 256;
				timestamp /= 256;
			}

			this.nonce = nonce;
		}
	}, {
		key: 'setprivateKeyRandom',
		value: function setprivateKeyRandom(key) {
			this.privateKeyRandom = key;
		}
	}, {
		key: 'setpublicKey',
		value: function setpublicKey(key) {
			this.publicKey = key;
		}
	}, {
		key: 'getpublicKey',
		value: function getpublicKey() {
			return this.publicKey;
		}
	}, {
		key: 'getprivateKeyRandom',
		value: function getprivateKeyRandom() {
			return this.privateKeyRandom;
		}
	}, {
		key: 'getProvider',
		value: function getProvider() {
			return this.provider;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			return this.userAddress;
		}
	}, {
		key: 'getBlockDetail',
		value: function getBlockDetail(blockNum) {
			console.log("--------根据区块高获取区块详情---------", blockNum);
			var result = this.web3.eth.getBlock(blockNum);
			return result;
		}
	}, {
		key: 'addContract',
		value: function addContract(contractName, ABI) {
			var address = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0x0000000000000000000000000000000000000000';
			var version = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0.0.1.0';
			var moduleName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'SystemModuleManager';
			var moduleVersion = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '0.0.1.0';

			this._contracts["RegisterManager"] ? '' : this.initRegisterContract();
			var register = this._contracts["RegisterManager"].contract,
			    queryAddress = register.getContractAddress.call(moduleName, moduleVersion, contractName, version);

			if (queryAddress != "0x0000000000000000000000000000000000000000") {
				address = queryAddress;
			}

			var ContractABI = this.web3.eth.contract(ABI),
			    contractInstance = ContractABI.at(address),
			    registerInstance = {
				ABI: ABI,
				address: address,
				contract: contractInstance,
				version: version,
				moduleName: moduleName,
				moduleVersion: moduleVersion
			};

			this._contracts[contractName] = registerInstance;
		}
	}, {
		key: 'getContract',
		value: function getContract(contractName) {
			return this._contracts[contractName];
		}
	}, {
		key: 'call',
		value: function call(contractName, methodName, argumentList) {

			var contractInstance = this.getContract(contractName).contract;

			argumentList.push({
				from: this.userAddress
			});

			var result = contractInstance[methodName].apply(null, argumentList);


			return JSON.parse(result);
		}
	}, {
		key: 'sendRawTrasaction',
		value: function sendRawTrasaction(contractName, methodName, argumentList, eventName, cb) {
			this.setNonce();
			var contractInstance = this.getContract(contractName).contract,
			    data = this.getData(contractName, methodName, argumentList),
			    txParams = {
				nonce: this.nonce,
				gasPrice: 21000000000,
				gasLimit: 9999999999,
				to: contractInstance.address,
				value: 0,
				data: data
			},
			    tx = new EthereumTx(txParams);

			if (this.privateKey) {
				var privateKey = Buffer.from(this.privateKey, 'hex');
				tx.sign(privateKey);
				console.log('privateKey' + privateKey);

				var serializedTx = tx.serialize();
				var serializedTxHex = "0x" + serializedTx.toString('hex');
				var hash = this.web3.eth.sendRawTransaction(serializedTxHex);
				console.log('hash==' + hash);

				this.callbacks[hash] = {
					cb: cb,
					wrapCount: this.wrapCount
				};
				this.getTransactionReceipt(hash);
			} else {
				console.log('请设置私钥==>setPrivateKeyr');
			}
		}
	}, {
		key: 'getData',
		value: function getData(contractName, methodName, argumentList) {
			var contractInstance = this.getContract(contractName).contract;

			argumentList = dealArgumentList(argumentList);
			if (isArray(argumentList)) {
				return contractInstance[methodName].getData.apply(null, argumentList);
			} else if (typeof argumentList == 'string') {
				return contractInstance[methodName].getData(argumentList);
			} else {
				console.warn('argumentList参数类型不正确！！！');
			}
		}
	}, {
		key: 'watchEvent',
		value: function watchEvent(contractName, eventName, hash, cb) {
			var _this = this;

			eventName ? '' : eventName = 'Notify';

			setTimeout(function () {
				var contractInstance = _this.getContract(contractName).contract;

				var MyEvent = contractInstance[eventName]({
					_info: contractInstance.address
				}, {
					fromBlock: 0,
					toBlock: 'latest'
				});
				MyEvent.watch(function (errorCode, result) {
					if (result.transactionHash == hash) {
						MyEvent.stopWatching();
						console.log(contractName + ' ' + eventName + '@result==》', result.args._error, result.args._info);

						var code = Number(result.args._errno || result.args._error);
						cb && cb(code, result.args._info);
					}
				});
			}, 1000);
		}
	}, {
		key: 'getTransactionReceipt',
		value: function getTransactionReceipt(hash) {
			var _this2 = this;

			console.log('hash', hash);
			var id = '',
			    result = this.web3.eth.getTransactionReceipt(hash),
			    data = {};

			if (result && result.transactionHash) {
				clearTimeout(id);
				hash == result.transactionHash ? data = dealData(result.logs[0].data) : '';
				alert(data.code + data.data);
				this.callbacks[hash].cb(data.code, data.data);
				delete this.callbacks[hash];
			} else {
				if (this.callbacks[hash].wrapCount--) {
					console.log(this.callbacks[hash].wrapCount);
					id = setTimeout(function () {
						_this2.getTransactionReceipt(hash);
					}, 1000);
				} else {
					this.callbacks[hash].cb(999, '超时');
					console.warn('sendRawTrasaction超时');
					id = '';
					delete this.callbacks[hash];
				}
			}
		}
	}, {
		key: 'stopWatch',
		value: function stopWatch(contractName, eventName) {}
	}]);

	return ContractServies;
}();

/* harmony default export */ __webpack_exports__["a"] = (new ContractServies());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2).Buffer))

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = {"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn't export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn't import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn't parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn't parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn't serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn't recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}

/***/ })

},[144]);
//# sourceMappingURL=app.7ea5bb903d884ba6abd6.js.map