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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bald_guy.js":
/*!*************************!*\
  !*** ./src/bald_guy.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaldGuy; });\nclass BaldGuy {\n\n    constructor() {\n        this.sprite = new Image();\n        this.sprite.src = '../sprite_sheets/bald_guy.png';\n        this.sheetWidth = 576;\n        this.sheetHeight = 256;\n        this.cols = 9;\n        this.rows = 4;\n        this.width = this.sheetWidth / this.cols;\n        this.height = (this.sheetHeight / this.rows) + 1;\n        this.hitbox = {\n            x: 27,\n            y: 25,\n            width: 22,\n            height: 45\n        }\n        // this.ctx = ctx;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/bald_guy.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasEl; });\nclass CanvasEl {\n    constructor(width, height) {\n        this.canvasEl = document.getElementById(\"gameCanvas\");\n        this.canvasEl.width = width;\n        this.canvasEl.height = height;\n        this.ctx = this.canvasEl.getContext(\"2d\");\n    }\n}\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var _skeleton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton.js */ \"./src/skeleton.js\");\n/* harmony import */ var _bald_guy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bald_guy.js */ \"./src/bald_guy.js\");\n\n\n\nclass Character {\n\n    constructor( sprite, x, y ) {\n        this.sprite = Character.sprites(sprite);\n        this.x = x;\n        this.y = y;\n    }\n\n    static sprites(sprite) {\n        \n        switch(sprite) {\n            case \"skeleton\": \n                return new _skeleton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n            case \"bald guy\":\n                return new _bald_guy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.js */ \"./src/character.js\");\n\n\n\n\n// Canvas build\nlet canvasEl = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](innerWidth, innerHeight);\nlet canvas = canvasEl.canvasEl;\nlet ctx = canvasEl.ctx;\n\n\n// Characters\nlet characters = new Array;\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 100, 100));\n// characters.push(new Character(100, 100, '../sprite_sheets/skeleton.png'));\nwindow.characters = characters;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Skeleton; });\nclass Skeleton {\n\n    constructor() {\n        this.sprite = new Image();\n        this.sprite.src = '../sprite_sheets/skeleton.png';\n        this.sheetWidth = 576;\n        this.sheetHeight = 256;\n        this.cols = 9;\n        this.rows = 4;\n        this.width = this.sheetWidth / this.cols;\n        this.height = (this.sheetHeight / this.rows) + 1;\n        this.hitbox = {\n            x: 27,\n            y: 25,\n            width: 22,\n            height: 45\n        }\n        // this.ctx = ctx;\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/skeleton.js?");

/***/ })

/******/ });