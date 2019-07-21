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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst vec2_1 = __webpack_require__(/*! ./src/vec2/vec2 */ \"./src/vec2/vec2.ts\");\r\nexports.Vector2D = vec2_1.default;\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/abstract/vector.ts":
/*!********************************!*\
  !*** ./src/abstract/vector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Vector {\r\n    constructor(...args) {\r\n        let data;\r\n        if (args.length < 2)\r\n            throw \"incorrect number of parameters\";\r\n        else {\r\n            data = new Float32Array(args.length);\r\n            for (let i = 0; i < args.length; i++) {\r\n                data[i] = args[i];\r\n            }\r\n        }\r\n        this.data = data;\r\n        return this;\r\n    }\r\n    add(vec) {\r\n        for (let i = 0; i < vec.data.length; i++) {\r\n            this.data[i] += vec.data[i];\r\n        }\r\n        return this;\r\n    }\r\n    sub(vec) {\r\n        for (let i = 0; i < vec.data.length; i++) {\r\n            this.data[i] -= vec.data[i];\r\n        }\r\n        return this;\r\n    }\r\n    mult(scalar) {\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            this.data[i] *= scalar;\r\n        }\r\n        return this;\r\n    }\r\n    div(scalar) {\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            this.data[i] /= scalar;\r\n        }\r\n        return this;\r\n    }\r\n    dot(vec) {\r\n        let sum = 0;\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            sum += this.data[i] * vec.data[i];\r\n        }\r\n        return sum;\r\n    }\r\n}\r\nexports.default = Vector;\r\n\n\n//# sourceURL=webpack:///./src/abstract/vector.ts?");

/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nlet EPSILON = 1e-10;\r\nexports.EPSILON = EPSILON;\r\nfunction toDegrees(radian) {\r\n    return radian * 180 / Math.PI;\r\n}\r\nexports.toDegrees = toDegrees;\r\nfunction toRadians(degree) {\r\n    return degree * Math.PI / 180;\r\n}\r\nexports.toRadians = toRadians;\r\nfunction randomInt(limits) {\r\n    let ran;\r\n    if (Array.isArray(limits)) {\r\n        ran = ~~(Math.random() * (limits[1] - limits[0]) + limits[0]);\r\n    }\r\n    else {\r\n        ran = ~~(Math.random() * 500);\r\n    }\r\n    return ran;\r\n}\r\nexports.randomInt = randomInt;\r\n\n\n//# sourceURL=webpack:///./src/globals.ts?");

/***/ }),

/***/ "./src/vec2/vec2.ts":
/*!**************************!*\
  !*** ./src/vec2/vec2.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst vector_1 = __webpack_require__(/*! ../abstract/vector */ \"./src/abstract/vector.ts\");\r\nconst globals_1 = __webpack_require__(/*! ../globals */ \"./src/globals.ts\");\r\nclass Vector2D extends vector_1.default {\r\n    constructor(x, y) {\r\n        super(x || 0, y || 0);\r\n        return this;\r\n    }\r\n    //<--- GETTERS AND SETTERS --->\r\n    /** Get the value of the coordinate x */\r\n    get x() {\r\n        return this.data[0];\r\n    }\r\n    /** Get the value of the coordinate y */\r\n    get y() {\r\n        return this.data[1];\r\n    }\r\n    /** Set a new value for coordinate x */\r\n    set x(val) {\r\n        this.data[0] = val;\r\n    }\r\n    /** Set a new value for coordinate y */\r\n    set y(val) {\r\n        this.data[1] = val;\r\n    }\r\n    /** Get the length from origin to head of the vector */\r\n    get len() {\r\n        return Math.hypot(this.y, this.x);\r\n    }\r\n    /** Set a new value for length of the Vector keep same angle */\r\n    set len(len) {\r\n        let ang = this.ang;\r\n        this.x = Math.cos(ang) * len;\r\n        this.y = Math.sin(ang) * len;\r\n    }\r\n    /** Get angle of the Vector with respect x axis (horizontal) and keep same length */\r\n    get ang() {\r\n        return Math.atan2(this.y, this.x);\r\n    }\r\n    /** Set a new angle of the Vector for with respect x axis */\r\n    set ang(ang) {\r\n        let len = this.len;\r\n        this.x = Math.cos(ang) * len;\r\n        this.y = Math.sin(ang) * len;\r\n    }\r\n    //  <---PUBLIC METHODS--->\r\n    /** Get unit vector with length 1 angle same of source vector */\r\n    norm() {\r\n        return Vector2D.norm(new Vector2D(this.x, this.y));\r\n    }\r\n    /** Update both x and y coordinates of the vector source */\r\n    update(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        return this;\r\n    }\r\n    /** Change the sign of the Vector's components */\r\n    neg() {\r\n        this.x *= -1;\r\n        this.y *= -1;\r\n        return this;\r\n    }\r\n    /** Set the values of the Vector's components to zero */\r\n    zero() {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        return this;\r\n    }\r\n    /** Change the actual angle of the Vector2D */\r\n    rotate(angle) {\r\n        this.ang = this.ang + angle;\r\n        return this;\r\n    }\r\n    /** Print info on the console regarding the source Vector(debugging purposes) */\r\n    log() {\r\n        console.log(\" x: \", this.x, \"\\n\", \"y: \", this.y, \"\\n\", \"len: \", this.len, \"\\n\", \"ang: \", (() => {\r\n            let ang = this.ang;\r\n            if (this.ang < 0) {\r\n                ang = Math.PI * 2 + ang;\r\n            }\r\n            return globals_1.toDegrees(ang);\r\n        })());\r\n        return \"data\";\r\n    }\r\n    // <---STATIC METHODS--->\r\n    /**return a Vector2D with random components */\r\n    static random(limits) {\r\n        if (!limits) {\r\n            limits = [0, 1000];\r\n        }\r\n        let x = globals_1.randomInt(limits);\r\n        let y = globals_1.randomInt(limits);\r\n        return new Vector2D(x, y);\r\n    }\r\n    /** Calculate the distance between two Vectors2D */\r\n    static distance(vec1, vec2) {\r\n        let dy = vec1.y - vec2.y, dx = vec1.x - vec2.x;\r\n        return Math.hypot(dy, dx);\r\n    }\r\n    /** Calculate the unit Vector2D between two vectors if no parameter return a vector with len =1 */\r\n    static norm(vec1) {\r\n        let output;\r\n        if (vec1) {\r\n            let { len, x, y } = vec1;\r\n            output = new Vector2D(x / len, y / len);\r\n        }\r\n        else {\r\n            output = new Vector2D(0, 0);\r\n            output.len = 1;\r\n        }\r\n        return output;\r\n    }\r\n    /** Check if two Vectors2D are totally equal */\r\n    static totalEqual(vec1, vec2) {\r\n        return vec1.x - vec2.x === 0 &&\r\n            vec1.y - vec2.y === 0;\r\n    }\r\n    /** Check if two Vectors2D are equal within a range */\r\n    static areEquals(vec1, vec2, boundary) {\r\n        let b = boundary || 0;\r\n        return Math.abs(vec1.len - vec2.len) <= globals_1.EPSILON + b &&\r\n            Math.abs(vec1.ang - vec2.ang) <= globals_1.EPSILON + b;\r\n    }\r\n    /** Create a new Vector2D from parameter */\r\n    static clone(vec) {\r\n        return new Vector2D(vec.x, vec.y);\r\n    }\r\n    /** Calculate the dot product between two Vectors2D */\r\n    static dot(vec1, vec2) {\r\n        return vec1.x * vec2.x + vec1.y * vec2.y;\r\n    }\r\n    /** Calculate the agnle between two Vectors2D */\r\n    static angleBet(vec1, vec2) {\r\n        let dot = Vector2D.dot(vec1, vec2), l1 = vec1.len, l2 = vec2.len;\r\n        return Math.acos(dot / l1 * l2);\r\n    }\r\n    /** Return a new Vector from adding two Vectors2D */\r\n    static add(a, b) {\r\n        let out = new Vector2D();\r\n        out.x = a.x + b.x;\r\n        out.y = a.y + b.y;\r\n        return out;\r\n    }\r\n    /** Return a new vector from substracting two Vector2D (order matter) */\r\n    static sub(a, b) {\r\n        let out = new Vector2D();\r\n        out.x = a.x - b.x;\r\n        out.y = a.y - b.y;\r\n        return out;\r\n    }\r\n    /** Multiply the components of a Vector2D with a number */\r\n    static mul(a, n) {\r\n        let out = new Vector2D();\r\n        out.x = a.x * n;\r\n        out.y = a.y * n;\r\n        return out;\r\n    }\r\n    /** Divide the components of a Vector2D with a number */\r\n    static div(a, n) {\r\n        let out = new Vector2D();\r\n        out.x = a.x / n;\r\n        out.y = a.y / n;\r\n        return out;\r\n    }\r\n}\r\nexports.default = Vector2D;\r\n\n\n//# sourceURL=webpack:///./src/vec2/vec2.ts?");

/***/ })

/******/ });