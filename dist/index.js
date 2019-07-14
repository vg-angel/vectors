var V =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst vec2_1 = __webpack_require__(/*! ./src/vec2/vec2 */ \"./src/vec2/vec2.ts\");\r\nexports.Vector2D = vec2_1.default;\r\nconsole.log(\"welcome\");\r\n\n\n//# sourceURL=webpack://V/./index.ts?");

/***/ }),

/***/ "./src/abstract/vector.ts":
/*!********************************!*\
  !*** ./src/abstract/vector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @params ..args the arguments to use as coordinates; x, y, z, ...\r\n * @var data - a Float32 array to store the coordinjates\r\n */\r\nclass Vector {\r\n    constructor(...args) {\r\n        let data;\r\n        if (args.length < 2)\r\n            throw \"incorrect number of parameters\";\r\n        else {\r\n            data = new Float32Array(args.length);\r\n            for (let i = 0; i < args.length; i++) {\r\n                data[i] = args[i];\r\n            }\r\n        }\r\n        this.data = data;\r\n        return this;\r\n    }\r\n    add(vec) {\r\n        for (let i = 0; i < vec.data.length; i++) {\r\n            this.data[i] += vec.data[i];\r\n        }\r\n        return this;\r\n    }\r\n    sub(vec) {\r\n        for (let i = 0; i < vec.data.length; i++) {\r\n            this.data[i] -= vec.data[i];\r\n        }\r\n        return this;\r\n    }\r\n    mult(scalar) {\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            this.data[i] *= scalar;\r\n        }\r\n        return this;\r\n    }\r\n    div(scalar) {\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            this.data[i] /= scalar;\r\n        }\r\n        return this;\r\n    }\r\n    dot(vec) {\r\n        let sum = 0;\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            sum += this.data[i] * vec.data[i];\r\n        }\r\n        return sum;\r\n    }\r\n}\r\nexports.default = Vector;\r\n\n\n//# sourceURL=webpack://V/./src/abstract/vector.ts?");

/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nlet EPSILON = 1e-10;\r\nexports.EPSILON = EPSILON;\r\nfunction toDegrees(radian) {\r\n    return radian * 180 / Math.PI;\r\n}\r\nexports.toDegrees = toDegrees;\r\nfunction toRadians(degree) {\r\n    return degree * Math.PI / 180;\r\n}\r\nexports.toRadians = toRadians;\r\n\n\n//# sourceURL=webpack://V/./src/globals.ts?");

/***/ }),

/***/ "./src/vec2/vec2.ts":
/*!**************************!*\
  !*** ./src/vec2/vec2.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst vector_1 = __webpack_require__(/*! ../abstract/vector */ \"./src/abstract/vector.ts\");\r\nconst globals_1 = __webpack_require__(/*! ../globals */ \"./src/globals.ts\");\r\nclass Vector2D extends vector_1.default {\r\n    constructor(x, y) {\r\n        super(x, y);\r\n        return this;\r\n    }\r\n    get x() {\r\n        return this.data[0];\r\n    }\r\n    get y() {\r\n        return this.data[1];\r\n    }\r\n    set x(val) {\r\n        this.data[0] = val;\r\n    }\r\n    set y(val) {\r\n        this.data[1] = val;\r\n    }\r\n    get len() {\r\n        return Math.hypot(this.y, this.x);\r\n    }\r\n    get ang() {\r\n        return Math.atan2(this.y, this.x);\r\n    }\r\n    set len(len) {\r\n        let ang = this.ang;\r\n        this.x = Math.cos(ang) * len;\r\n        this.y = Math.sin(ang) * len;\r\n    }\r\n    set ang(ang) {\r\n        let len = this.len;\r\n        this.x = Math.cos(ang) * len;\r\n        this.y = Math.sin(ang) * len;\r\n    }\r\n    unit() {\r\n        return Vector2D.unit(new Vector2D(this.x, this.y));\r\n    }\r\n    update(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        return this;\r\n    }\r\n    neg() {\r\n        this.x *= -1;\r\n        this.y *= -1;\r\n        return this;\r\n    }\r\n    zero() {\r\n        this.x = 0;\r\n        this.y = 0;\r\n    }\r\n    rotate(angle) {\r\n        let actual = this.ang;\r\n        this.ang = actual + angle;\r\n        return this;\r\n    }\r\n    log() {\r\n        console.log(\" x: \", this.x, \"\\n\", \"y: \", this.y, \"\\n\", \"len: \", this.len, \"\\n\", \"ang: \", (() => {\r\n            let ang = this.ang;\r\n            if (this.ang < 0) {\r\n                ang = Math.PI * 2 + ang;\r\n            }\r\n            return globals_1.toDegrees(ang);\r\n        })());\r\n        return \"data\";\r\n    }\r\n    static distance(vec1, vec2) {\r\n        let dy = vec1.y - vec2.y, dx = vec1.x - vec2.x;\r\n        return Math.hypot(dy, dx);\r\n    }\r\n    static unit(vec1) {\r\n        let output;\r\n        if (vec1) {\r\n            let { len, x, y } = vec1;\r\n            output = new Vector2D(x / len, y / len);\r\n        }\r\n        else {\r\n            output = new Vector2D(0, 0);\r\n            output.len = 1;\r\n        }\r\n        return output;\r\n    }\r\n    static areEquals(vec1, vec2, boundary) {\r\n        let b = boundary || 1;\r\n        let test = Math.abs(vec1.len - vec2.len) <= globals_1.EPSILON + b &&\r\n            Math.abs(vec1.ang - vec2.ang) <= globals_1.EPSILON + b;\r\n        return test;\r\n    }\r\n    static clone(vec) {\r\n        return new Vector2D(vec.x, vec.y);\r\n    }\r\n    static dot(vec1, vec2) {\r\n        return vec1.x * vec2.x + vec1.y * vec2.y;\r\n    }\r\n    static angleBeet(vec1, vec2) {\r\n        let dot = Vector2D.dot(vec1, vec2), l1 = vec1.len, l2 = vec2.len;\r\n        return Math.acos(dot / l1 * l2);\r\n    }\r\n}\r\nexports.default = Vector2D;\r\n\n\n//# sourceURL=webpack://V/./src/vec2/vec2.ts?");

/***/ })

/******/ });