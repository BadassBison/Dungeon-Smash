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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaldGuy; });\nclass BaldGuy {\n\n    constructor() {\n        this.img = new Image();\n        this.img.src = '../sprite_sheets/bald_guy.png';\n        this.sheetWidth = 576;\n        this.sheetHeight = 256;\n        this.cols = 9;\n        this.rows = 4;\n        this.width = this.sheetWidth / this.cols;\n        this.height = (this.sheetHeight / this.rows) + 1;\n        this.hitbox = {\n            x: 44.5,\n            y: 75,\n            width: 27,\n            height: 24,\n            radius: 15\n        }\n        this.health = 100;\n        this.srcX = 0;\n        this.srcY = 2 * this.height;\n        this.currentFrame = 1;\n    }\n\n    updateSprite() {\n        this.currentFrame = (++this.currentFrame % (this.cols-1)) + 1\n        this.srcX = this.currentFrame * this.width;\n    }\n\n    hit() {\n        if (this.health > 0) this.health -= 2;\n        if (this.health < 2) this.health = 0;\n    }\n\n    heal() {\n        if (this.health > 0 && this.health < 100) this.health += 0.03;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/bald_guy.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var _skeleton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton.js */ \"./src/skeleton.js\");\n/* harmony import */ var _bald_guy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bald_guy.js */ \"./src/bald_guy.js\");\n\n\n\nclass Character {\n\n    static sprites(sprite) {\n        switch(sprite) {\n            case \"skeleton\": \n                return new _skeleton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n            case \"bald guy\":\n                return new _bald_guy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        }\n    }\n    \n    constructor( sprite, x, y ) {\n        this.sprite = Character.sprites(sprite);\n        this.x = x;\n        this.y = y;\n        this.defaultSpeed = 3;\n        this.speedX = this.defaultSpeed;\n        this.speedY = this.defaultSpeed;\n        this.direction = \"stand\";\n    }\n\n    directionMove() {\n        this.direction = \"move\";\n    }\n\n    directionStand() {\n        this.direction = \"stand\";\n    }\n\n    changeDirection(dir){\n        this.direction = dir;\n    }\n\n    move(move) {\n        this.x -= move.x;\n        this.y -= move.y;\n    }\n\n    bump(dx, dy){\n        let val = setInterval(() => {\n            this.x += dx;\n            this.y += dy;\n        }, 50);\n        setTimeout(() => {\n            clearInterval(val);\n        }, 150);\n    }\n        \n}\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/explosion.js":
/*!**************************!*\
  !*** ./src/explosion.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Explosion; });\nclass Explosion {\n    \n    constructor(x, y){\n        this.img = new Image();\n        this.img.src = \"../sprite_sheets/explosion.png\";\n        this.sheetWidth = 780;\n        this.sheetHeight = 910;\n        this.rows = 7;\n        this.cols = 6;\n        this.width = this.sheetWidth / this.cols;\n        this.height = this.sheetWidth / this.cols;\n        this.x = x;\n        this.y = y;\n        this.currentFrame = 0;\n        this.yFrame = 0;\n        this.srcX = 0;\n        this.srcY = 0;\n        this.spriteCycle = 0;\n        this.complete = false;\n    }\n\n    updateSprite() {\n        if (this.currentFrame < this.cols - 1) {\n            // console\n            this.currentFrame = ++this.currentFrame;\n            this.srcX = this.currentFrame * this.width;\n        } else {\n            this.yFrame++;\n            this.srcY = this.yFrame * this.height;\n            this.currentFrame = 0;\n            this.srcX = this.currentFrame * this.width;\n        }\n        // if(this.yFrame >= this.rows) this.complete = true\n        if(this.yFrame >= this.rows) this.complete = true;\n    }\n\n    spriteCycleReset() {\n        this.spriteCycle = 0;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/explosion.js?");

/***/ }),

/***/ "./src/fireball.js":
/*!*************************!*\
  !*** ./src/fireball.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fireball; });\nclass Fireball {\n    \n    constructor(x, y, dirX, dirY){\n        this.img = new Image();\n        this.img.src = \"../sprite_sheets/fireball.png\";\n        this.sheetWidth = 512;\n        this.sheetHeight = 512;\n        this.rows = 8;\n        this.cols = 8;\n        this.width = this.sheetWidth / this.cols;\n        this.height = this.sheetWidth / this.cols;\n        this.x = x;\n        this.y = y + 20;\n        this.dirX = dirX;\n        this.dirY = dirY;\n        this.dx = 0;\n        this.dy = 0;\n        this.dist = 0;\n        this.hitbox = {\n            x: 27,\n            y: 25,\n            width: 22,\n            height: 45,\n            radius: 25\n        }\n        this.srcX = 0;\n        this.srcY = 3 * this.height;\n        this.spriteCycle = 0;\n        this.currentFrame = 0;\n        this.shot = true;\n    }\n\n    updateSprite() {\n        this.currentFrame = ++this.currentFrame % (this.cols-1)\n        this.srcX = this.currentFrame * this.width;\n    }\n\n    move(move) {\n        this.x -= move.x;\n        this.y -= move.y;\n    }\n\n    data(dx, dy, dist){\n        this.shot = false;\n        this.dx = dx;\n        this.dy = dy;\n        this.dist = dist;\n    }\n\n    direction(num){\n        this.srcY = num * this.height\n    }\n\n}\n\n//# sourceURL=webpack:///./src/fireball.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.js */ \"./src/character.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _fireball_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fireball.js */ \"./src/fireball.js\");\n/* harmony import */ var _explosion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explosion.js */ \"./src/explosion.js\");\n\n\n\n\n\n\n\n// Canvas build\nlet canvasEl = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](innerWidth, innerHeight);\nlet canvas = canvasEl.canvasEl;\nlet ctx = canvasEl.ctx;\nlet mousePos;\nwindow.canvas = canvas;\n\n// Characters\nlet characters = [];\nlet fireballs = [];\nlet explosions = [];\n\n\n// Main character\nlet c = new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"bald guy\", 300, 300);\n\n\n// Test skeletons\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 500, 300));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 800, 100));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 400, 900));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 800, 1000));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 100, 100));\n\n\n// Many skeletons\n// let skelly;\n// setInterval(() => {\n//     let sx = -50;\n//     let pos = generatePos(canvas.width, canvas.height);\n//     skelly = new Character(\"skeleton\", pos.x, pos.y);\n//     characters.push(skelly)\n// }, 1200);\n\n\n// Sprite cycle info\nlet spriteCycle = 0;\n\n\n// Movement storage\nlet movements = [];\nlet drawData;\n\n\nconst updateCharacterData = drawData => {\n    spriteCycle = drawData[\"spriteCycle\"];\n    characters = drawData[\"characters\"];\n}\nconst updateFireballData = drawData => {\n    fireballs = drawData[\"fireballs\"];\n}\nconst updateAll = drawData => {\n    characters = drawData[\"characters\"];\n    fireballs = drawData[\"fireballs\"];\n    explosions = drawData[\"explosions\"];\n}\nconst updateExplosionData = drawData => {\n    explosions = drawData[\"explosions\"];\n}\n\n\nconst healthBar = () => {\n    ctx.lineWidth = 6;\n    ctx.strokeRect(innerWidth - 302, 18, 254, 24);\n    ctx.fillStyle = \"#FF0000\";\n    ctx.fillRect(innerWidth - 299, 21, c.sprite.health * 2.5, 18);\n}\n\n\n// Animations ----------------------------------------------------------\nconst move = () => {\n    updateAll(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"detectCollision\"])(c, characters, fireballs, explosions));\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"moveCharacter\"])(movements, c);\n    // moveComputers(characters, c);\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"moveFireballs\"])(fireballs);\n}\n\n\nconst draw = () => {\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"refresh\"])(ctx, canvas); // clears the canvas\n    \n    updateCharacterData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"drawCharacters\"])(characters, spriteCycle, ctx, c));\n    updateFireballData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"drawFireballs\"])(fireballs, ctx, canvas));\n    updateExplosionData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"drawExplosions\"])(explosions, ctx));\n\n    healthBar();\n\n    move();\n\n    window.requestAnimationFrame(draw);\n}\n// ------------------------------------------------------------------------\n\n\nconst shoot = e => {\n    fireballs.push(new _fireball_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](c.x, c.y, e.x, e.y));\n}\n\n\nwindow.addEventListener(\"keydown\", e => fireballs = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"changeDirection\"])(e, movements, fireballs, mousePos, c));\nwindow.addEventListener(\"keyup\", e => movements = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"stopDirection\"])(e, movements));\nwindow.addEventListener(\"click\", e => shoot(e));\nwindow.addEventListener(\"mousemove\", e => mousePos = {x: e.clientX, y: e.clientY});\n\ndraw();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Skeleton; });\nclass Skeleton {\n\n    constructor() {\n        this.img = new Image();\n        this.img.src = '../sprite_sheets/skeleton.png';\n        this.sheetWidth = 576;\n        this.sheetHeight = 256;\n        this.cols = 9;\n        this.rows = 4;\n        this.width = this.sheetWidth / this.cols;\n        this.height = (this.sheetHeight / this.rows) + 1;\n        this.hitbox = {\n            x: 44.5,\n            y: 75,\n            width: 27,\n            height: 24,\n            radius: 15\n        }\n        this.health = 1;\n        this.srcX = 0;\n        this.srcY = 2 * this.height;\n        this.currentFrame = 1;\n    }\n\n    updateSprite() {\n        this.currentFrame = (++this.currentFrame % (this.cols-1)) + 1\n        this.srcX = this.currentFrame * this.width;\n    }\n\n    hit() {\n        if (this.health > 0 ) this.health--;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/skeleton.js?");

/***/ }),

/***/ "./src/sounds.js":
/*!***********************!*\
  !*** ./src/sounds.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sound; });\nclass Sound {\n\n    constructor(src) {\n        this.sound = document.createElement(\"audio\");\n        this.sound.src = src;\n        this.sound.setAttribute(\"preload\", \"auto\");\n        this.sound.setAttribute(\"controls\", \"none\");\n        this.sound.setAttribute(\"class\", \"sound\");\n        this.sound.style.display = \"none\";\n        document.body.appendChild(this.sound); \n    }\n    \n    play (){\n        this.sound.play();\n    }\n\n    // this.stop = function(){\n    //     this.sound.pause();\n    // }    \n}\n\n//# sourceURL=webpack:///./src/sounds.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: refresh, changeDirection, stopDirection, drawCharacters, moveCharacter, moveComputers, generatePos, detectCollision, drawFireballs, moveFireballs, drawExplosions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refresh\", function() { return refresh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeDirection\", function() { return changeDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopDirection\", function() { return stopDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCharacters\", function() { return drawCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveCharacter\", function() { return moveCharacter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveComputers\", function() { return moveComputers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePos\", function() { return generatePos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawFireballs\", function() { return drawFireballs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveFireballs\", function() { return moveFireballs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawExplosions\", function() { return drawExplosions; });\n/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sounds.js */ \"./src/sounds.js\");\n/* harmony import */ var _fireball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireball.js */ \"./src/fireball.js\");\n/* harmony import */ var _explosion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explosion.js */ \"./src/explosion.js\");\n\n\n\n\n\n//-------------------------------------------------------------------------------------\n// Refresh the canvas\nconst refresh = (ctx, canvas) => {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\n\n//-------------------------------------------------------------------------------------\n// Play sounds\n\nconst playSound = sound => {\n    \n    // Remove previous sound nodes\n    let sounds = document.querySelectorAll('.sound');\n    sounds.forEach(el => {\n        el.remove();\n    })\n\n    switch(sound){\n        case \"fireball\":\n            let shot = new _sounds_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('../sounds/fireballShot.wav');\n            shot.play();\n        case \"explosion\":\n            let hit = new _sounds_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('../sounds/explosion.wav');\n            hit.play();\n        case \"bump\":\n            let bump = new _sounds_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('../sounds/bump.flac');\n            bump.play();\n    }\n}\n\n\n//-------------------------------------------------------------------------------------\n// key pressed actions \nconst changeDirection = (keyVal, movements, fireballs, mousePos, c) => {\n    \n    switch(keyVal.key){\n        case \"ArrowUp\":\n        case \"w\":\n            if(!(movements.find(move => move === \"ArrowUp\"))) movements.push(\"ArrowUp\");\n            c.changeDirection(\"move\");\n            break;\n            \n        case \"ArrowLeft\":\n        case \"a\":\n            if(!(movements.find(move => move === \"ArrowLeft\"))) movements.push(\"ArrowLeft\");\n            c.changeDirection(\"move\");\n            break;\n    \n        case \"ArrowDown\":\n        case \"s\":\n            if(!(movements.find(move => move === \"ArrowDown\"))) movements.push(\"ArrowDown\");\n            c.changeDirection(\"move\");\n            break;\n\n        case \"ArrowRight\": \n        case \"d\":\n            if(!(movements.find(move => move === \"ArrowRight\"))) movements.push(\"ArrowRight\");\n            c.changeDirection(\"move\");\n            break;\n\n        case \" \":\n        case \"Shift\":\n            playSound(\"fireball\");\n            fireballs.push(new _fireball_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](c.x, c.y, mousePos.x, mousePos.y));\n            break;\n    }\n    return fireballs;\n}\n\n\n//-------------------------------------------------------------------------------------\n// Key release actions\nconst stopDirection = (keyVal, movements) => {\n    switch(keyVal.key){\n        case \"ArrowUp\":\n        case \"w\":\n            movements = movements.filter(el => el !== \"ArrowUp\")\n            break;\n            \n        case \"ArrowLeft\":\n        case \"a\":\n            movements = movements.filter(el => el !== \"ArrowLeft\")\n            break;\n            \n        case \"ArrowDown\":\n        case \"s\":\n            movements = movements.filter(el => el !== \"ArrowDown\")\n            break;\n            \n        case \"ArrowRight\":\n        case \"d\":\n            movements = movements.filter(el => el !== \"ArrowRight\")\n            break;\n    }\n    return movements;\n}\n\n\n//-------------------------------------------------------------------------------------\n// Draws the characters\nconst drawCharacters = (characters, spriteCycle, ctx, c) => {\n    \n    spriteCycle++;\n    characters.unshift(c);\n    characters.sort((a, b) => {\n        return (a.y - b.y)\n    })\n\n    characters.forEach(character => {\n\n        if (character.direction !== \"stand\") {\n            if(spriteCycle % 8 === 0) {\n                spriteCycle = 0;\n                character.sprite.updateSprite(); \n            }\n        } else {\n            character.sprite.srcX = 0;\n        }\n\n        ctx.drawImage(\n            character.sprite.img, \n            character.sprite.srcX, \n            character.sprite.srcY, \n            character.sprite.width, \n            character.sprite.height, \n            character.x, \n            character.y, \n            character.sprite.width * 1.4, \n            character.sprite.height * 1.4\n        );\n    })\n    characters = characters.filter(character => c !== character)\n    return {\n        spriteCycle: spriteCycle,\n        characters: characters\n    };\n}\n\n\n//-------------------------------------------------------------------------------------\n// Character movement\nconst moveCharacter = (movements, c) => {\n    \n    if (movements.length === 0) {\n        c.direction = \"stand\";\n        return null;\n    }\n\n    movements.forEach(movement => {\n        switch(movement){\n            case \"ArrowDown\":\n                if(c.y < canvas.height - 10){\n                    c.y += c.speedY;\n                } else {\n                    c.y = -40;\n                }\n                c.sprite.srcY = 2 * c.sprite.height;\n                break;\n        \n            case \"ArrowRight\":\n                if(c.x < canvas.width - 10){\n                    c.x += c.speedX;\n                } else {\n                    c.x = -40;\n                }\n                c.sprite.srcY = 3 * c.sprite.height;\n                break;\n            \n            case \"ArrowUp\":\n                if(c.y > -50){\n                    c.y -= c.speedY;\n                } else {\n                    c.y = canvas.height - 30;\n                }\n                c.sprite.srcY = 0 * c.sprite.height;\n                break;\n            \n            case \"ArrowLeft\":\n                if(c.x > -50){\n                    c.x -= c.speedX;\n                } else {\n                    c.x = canvas.width - 30;\n                }\n                c.sprite.srcY = 1 * c.sprite.height;\n                break;\n        }\n    })\n}\n\n\n//-------------------------------------------------------------------------------------\n// Computer movement\nconst moveComputers = (computers, c) => {\n    \n    computers.forEach(computer => {\n        let dx = computer.x - c.x;\n        let dy = computer.y - c.y;\n        if (dy === 0) dy += 0.000001;\n        let dist = Math.sqrt( dx*dx + dy*dy);\n        computer.move({ x: (dx/dist), y: (dy/dist) })\n        if(dx/dy > 1){\n            if(dx > 0) {\n                computer.changeDirection(\"left\")\n                computer.sprite.srcY = 1 * computer.sprite.height;\n            } else {\n                computer.changeDirection(\"right\")\n                computer.sprite.srcY = 3 * computer.sprite.height;\n            }\n        } else {\n            if(dy > 0) {\n                computer.changeDirection(\"up\")\n                computer.sprite.srcY = 0 * computer.sprite.height;\n            } else {\n                computer.changeDirection(\"down\")\n                computer.sprite.srcY = 2 * computer.sprite.height;\n            }\n        }\n    })\n}\n\n\n//-------------------------------------------------------------------------------------\n// Random computer placement\nconst generatePos = (width, height) => {\n    let x = Math.floor(Math.random() * width);\n    let y = Math.floor(Math.random() * height);\n    let diceRoll = Math.floor(Math.random() * 4)\n    switch(diceRoll) {\n        case 0:\n            return {x: x, y: -100};\n        case 1:\n            return {x: x, y: height + 100};\n        case 2:\n            return {x: -100, y: y};\n        case 3:\n            return {x: width + 100, y: y};\n    }\n}\n\n\n//-------------------------------------------------------------------------------------\n// Collision detection\nconst detectCollision = (c, characters, fireballs, explosions) => {\n    \n    // Main character health regeneration\n    c.sprite.heal();\n\n    // Main character touches an enemy\n    characters.forEach(character => {\n        let dx = c.x - character.x;\n        let dy = c.y - character.y;\n        if (dy === 0) dy += 0.000001;\n        let dist = Math.sqrt(dx*dx + dy*dy);\n        if (dist < (c.sprite.hitbox.radius + character.sprite.hitbox.radius)) {\n            playSound(\"bump\");\n            c.bump(dx/dist * 2, dy/dist * 2)\n            c.sprite.hit();\n        }\n    })\n    \n    // Any Enemy touches any other enemy\n    let all = characters.concat(c);\n    for(let i = 0; i < all.length - 1; i++){\n        for(let j = i+1; j < all.length; j++){\n            let dx = all[i].x - all[j].x;\n            let dy = all[i].y - all[j].y;\n            if (dy === 0) dy += 0.000001;\n            let dist = Math.sqrt(dx*dx + dy*dy);\n                \n            if (dist < (all[i].sprite.hitbox.radius + all[j].sprite.hitbox.radius)) {\n                all[i].bump(dx/dist * 2, dy/dist * 2)\n            }\n        }\n    }\n\n    // Fireball hits an enemy\n    let fireballHits = []\n    let skeletonsHit = []\n    for(let i = 0; i < fireballs.length; i++){\n        for(let j = 0; j < characters.length; j++){\n            let dx = fireballs[i].x - characters[j].x;\n            let dy = fireballs[i].y - characters[j].y;\n            if (dy === 0) dy += 0.000001;\n            let dist = Math.sqrt(dx*dx + dy*dy);\n\n            if (dist < (fireballs[i].hitbox.radius + characters[j].sprite.hitbox.radius)) {\n                playSound(\"explosion\");\n                fireballHits.push(fireballs[i]);\n                skeletonsHit.push(characters[j]);\n                explosions.push(new _explosion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](characters[j].x, characters[j].y))\n            }\n        }\n    }\n\n    // Remove fireball if hit\n    fireballHits.forEach(hit => {\n        fireballs = fireballs.filter(fireball => hit !== fireball);\n    })\n\n    // Remove skeleton if hit\n    skeletonsHit.forEach(hit => {\n        characters = characters.filter(character => hit !== character);\n    })\n\n    // Remove finished explosions\n    // explosions = explosions.filter(\n    //     boom => {\n    //         !(boom.complete)\n    //     });\n\n    // if (explosions.length > 0) console.log(\"bottom\");\n    return {\n        fireballs: fireballs, \n        characters: characters,\n        explosions: explosions\n    }\n}\n\n\n//-------------------------------------------------------------------------------------\n// Draw fireballs\nconst drawFireballs = (fireballs, ctx, canvas) => {\n\n    fireballs.forEach(fireball => {\n        \n        fireball.updateSprite(); \n        \n        ctx.drawImage(\n            fireball.img, \n            fireball.srcX, \n            fireball.srcY, \n            fireball.width, \n            fireball.height, \n            fireball.x, \n            fireball.y, \n            fireball.width * 1.2, \n            fireball.height * 1.2\n        )\n    })\n\n    fireballs = fireballs.filter(fireball => {\n        if (fireball.x < -40 || fireball.x > canvas.width + 40) return false \n        if (fireball.y < -40 || fireball.y > canvas.height + 40) return false\n        return true\n    })\n\n    return { fireballs: fireballs };\n}\n\n\n//-------------------------------------------------------------------------------------\n// Move fireballs\nconst moveFireballs = fireballs => {\n    \n    fireballs.forEach(fireball => {\n\n        if (fireball.shot) {\n            let dx = fireball.x - fireball.dirX;\n            let dy = fireball.y - fireball.dirY;\n            if (dy === 0) dy += 0.000001;\n            let dist = Math.sqrt( dx*dx + dy*dy);\n            fireball.data(dx, dy, dist);\n        }\n\n        fireball.move({ \n            x: (fireball.dx/fireball.dist) * 5, \n            y: (fireball.dy/fireball.dist) * 5 \n        })\n\n        \n        let ratio = fireball.dx/fireball.dy;\n        if(0.5 <= ratio && ratio < 2 && fireball.dx > 0 && fireball.dy > 0){ \n            fireball.direction(1);\n        } else \n        \n        if((-0.7 <= ratio && ratio < 0.5 && fireball.dx > 0 && fireball.dy > 0) ||\n           (-0.7 <= ratio && ratio < 0.5 && fireball.dx <= 0 && fireball.dy >= 0)){ \n            fireball.direction(2);\n        } else \n        \n        if(-5 <= ratio && ratio < -0.7 && fireball.dx < 0 && fireball.dy > 0){ \n            fireball.direction(3);\n        } else \n        \n        if(-2 <= ratio && ratio < -0.5 && fireball.dx > 0 && fireball.dy < 0){ \n            fireball.direction(7);\n        } else \n        \n        if((-0.5 <= ratio && ratio < 0.7 && fireball.dx < 0 && fireball.dy < 0) ||\n           (-0.5 <= ratio && ratio < 0.7 && fireball.dx >= 0 && fireball.dy <= 0)){ \n            fireball.direction(6);\n        } else \n        \n        if(0.7 <= ratio && ratio < 3 && fireball.dx < 0 && fireball.dy < 0){ \n            fireball.direction(5);\n        } else\n\n        if((-0.5 > ratio && fireball.dx < 0 && fireball.dy > 0) ||\n           (3 <= ratio && fireball.dx <= 0 && fireball.dy <= 0)){ \n            fireball.direction(4);\n        } else\n\n        if((-2 > ratio && fireball.dx > 0 && fireball.dy < 0) ||\n           (2 <= ratio && fireball.dx >= 0 && fireball.dy >= 0)){ \n            fireball.direction(0);\n        } \n    })\n}\n\n\n//-------------------------------------------------------------------------------------\n// Draw explosions\nconst drawExplosions = (explosions, ctx) => {\n\n    explosions.forEach(boom => {\n        \n        boom.spriteCycle++;\n        if (boom.spriteCycle % 2 === 0) {\n            boom.updateSprite();\n            boom.spriteCycleReset();\n        } \n        \n        ctx.drawImage(\n            boom.img, \n            boom.srcX, \n            boom.srcY, \n            boom.width, \n            boom.height, \n            boom.x, \n            boom.y, \n            boom.width * 0.8, \n            boom.height * 0.8\n        )\n    })\n\n    explosions = explosions.filter(boom => !boom.complete);\n\n    return {explosions: explosions}\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });