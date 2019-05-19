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

/***/ "./src/fireball.js":
/*!*************************!*\
  !*** ./src/fireball.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fireball; });\nclass Fireball {\n    \n    constructor(x, y, dirX, dirY){\n        this.img = new Image();\n        this.img.src = \"../sprite_sheets/fireball.png\";\n        this.sheetWidth = 512;\n        this.sheetHeight = 512;\n        this.rows = 8;\n        this.cols = 8;\n        this.width = this.sheetWidth / this.cols;\n        this.height = this.sheetWidth / this.cols;\n        this.x = x;\n        this.y = y + 20;\n        this.dirX = dirX;\n        this.dirY = dirY;\n        this.dx = 0;\n        this.dy = 0;\n        this.dist = 0;\n        this.hitbox = {\n            x: 27,\n            y: 25,\n            width: 22,\n            height: 45,\n            radius: 15\n        }\n        this.srcX = 0;\n        this.srcY = 3 * this.height;\n        this.spriteCycle = 0;\n        this.currentFrame = 0;\n        this.shot = true;\n    }\n\n    updateSprite() {\n        this.currentFrame = ++this.currentFrame % (this.cols-1)\n        this.srcX = this.currentFrame * this.width;\n    }\n\n    move(move) {\n        this.x -= move.x;\n        this.y -= move.y;\n    }\n\n    data(dx, dy, dist){\n        this.shot = false;\n        this.dx = dx;\n        this.dy = dy;\n        this.dist = dist;\n    }\n\n    direction(num){\n        this.srcY = num * this.height\n    }\n\n}\n\n//# sourceURL=webpack:///./src/fireball.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.js */ \"./src/character.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _fireball_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fireball.js */ \"./src/fireball.js\");\n\n\n\n\n\n\n// Canvas build\nlet canvasEl = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](innerWidth, innerHeight);\nlet canvas = canvasEl.canvasEl;\nlet ctx = canvasEl.ctx;\nwindow.canvas = canvas;\n\n\n// Characters\nlet characters = [];\nlet fireballs = [];\n\n// Main character\nlet c = new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"bald guy\", 300, 300);\n\n// One skeleton\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 500, 300));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 800, 100));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 400, 900));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 800, 1000));\ncharacters.push(new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"skeleton\", 100, 100));\n\n// Many skeletons\n// let skelly;\n// setInterval(() => {\n//     let sx = -50;\n//     let pos = generatePos(canvas.width, canvas.height);\n//     skelly = new Character(\"skeleton\", pos.x, pos.y);\n//     characters.push(skelly)\n// }, 1200);\n\nwindow.characters = characters;\n\n\n// Sprite cycle info\nlet spriteCycle = 0;\n\n\n// Movement storage\nlet movements = [];\nlet drawData;\n\nconst updateCharacterData = drawData => {\n    spriteCycle = drawData[\"spriteCycle\"];\n    characters = drawData[\"characters\"];\n}\nconst updateFireballData = drawData => {\n    fireballs = drawData[\"fireballs\"];\n}\nconst updateAllData = drawData => {\n    characters = drawData[\"characters\"];\n    fireballs = drawData[\"fireballs\"];\n}\n\nconst healthBar = () => {\n    ctx.lineWidth = 6;\n    ctx.strokeRect(innerWidth - 302, 18, 254, 24);\n    ctx.fillStyle = \"#FF0000\";\n    ctx.fillRect(innerWidth - 299, 21, c.sprite.health * 2.5, 18);\n}\n\n// Animations ----------------------------------------------------------\nconst move = () => {\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"moveCharacter\"])(movements, c);\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"moveComputers\"])(characters, c);\n    updateAllData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"detectCollision\"])(c, characters, fireballs));\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"moveFireballs\"])(fireballs);\n}\n\nconst draw = () => {\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"refresh\"])(ctx, canvas); // clears the canvas\n    \n    updateCharacterData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"drawCharacters\"])(characters, spriteCycle, ctx, c));\n    updateFireballData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"drawFireballs\"])(fireballs, ctx, canvas));\n    healthBar();\n\n    move();\n\n    window.requestAnimationFrame(draw);\n}\n// ------------------------------------------------------------------------\n\n\n\nconst shoot = e => {\n    fireballs.push(new _fireball_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](c.x, c.y, e.x, e.y));\n}\n\n\nwindow.addEventListener(\"keydown\", e => Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"changeDirection\"])(e, movements, fireballs, c));\nwindow.addEventListener(\"keyup\", e => movements = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"stopDirection\"])(e, movements));\nwindow.addEventListener(\"click\", e => shoot(e));\n\ndraw();\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: refresh, changeDirection, stopDirection, drawCharacters, moveCharacter, moveComputers, generatePos, detectCollision, drawFireballs, moveFireballs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refresh\", function() { return refresh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeDirection\", function() { return changeDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopDirection\", function() { return stopDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCharacters\", function() { return drawCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveCharacter\", function() { return moveCharacter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveComputers\", function() { return moveComputers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePos\", function() { return generatePos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawFireballs\", function() { return drawFireballs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveFireballs\", function() { return moveFireballs; });\n//-------------------------------------------------------------------------------------\n// Refresh the canvas\nconst refresh = (ctx, canvas) => {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\n\n//-------------------------------------------------------------------------------------\n// key down movement \nconst changeDirection = (keyVal, movements, fireballs, c) => {\n    \n    switch(keyVal.key){\n        case \"ArrowUp\":\n        case \"w\":\n            if(!(movements.find(move => move === \"ArrowUp\"))) movements.push(\"ArrowUp\");\n            c.changeDirection(\"move\");\n            break;\n            \n        case \"ArrowLeft\":\n        case \"a\":\n            if(!(movements.find(move => move === \"ArrowLeft\"))) movements.push(\"ArrowLeft\");\n            c.changeDirection(\"move\");\n            break;\n    \n        case \"ArrowDown\":\n        case \"s\":\n            if(!(movements.find(move => move === \"ArrowDown\"))) movements.push(\"ArrowDown\");\n            c.changeDirection(\"move\");\n            break;\n\n        case \"ArrowRight\": \n        case \"d\":\n            if(!(movements.find(move => move === \"ArrowRight\"))) movements.push(\"ArrowRight\");\n            c.changeDirection(\"move\");\n            break;\n        // case \" \":\n        //     fireballs.push(new Fireball(c.x, c.y, e.x, e.y));\n        //     break;\n    }\n    return movements;\n}\n\n\n//-------------------------------------------------------------------------------------\n// Key up to stop moving\nconst stopDirection = (keyVal, movements) => {\n    switch(keyVal.key){\n        case \"ArrowUp\":\n        case \"w\":\n            movements = movements.filter(el => el !== \"ArrowUp\")\n            break;\n            \n        case \"ArrowLeft\":\n        case \"a\":\n            movements = movements.filter(el => el !== \"ArrowLeft\")\n            break;\n            \n        case \"ArrowDown\":\n        case \"s\":\n            movements = movements.filter(el => el !== \"ArrowDown\")\n            break;\n            \n        case \"ArrowRight\":\n        case \"d\":\n            movements = movements.filter(el => el !== \"ArrowRight\")\n            break;\n    }\n    return movements;\n}\n\n\n//-------------------------------------------------------------------------------------\n// draws the characters\nconst drawCharacters = (characters, spriteCycle, ctx, c) => {\n    \n    spriteCycle++;\n    characters.unshift(c);\n    characters.sort((a, b) => {\n        return (a.y - b.y)\n    })\n\n    characters.forEach(character => {\n\n        if (character.direction !== \"stand\") {\n            if(spriteCycle % 8 === 0) {\n                spriteCycle = 0;\n                character.sprite.updateSprite(); \n            }\n        } else {\n            character.sprite.srcX = 0;\n        }\n\n        ctx.drawImage(\n            character.sprite.img, \n            character.sprite.srcX, \n            character.sprite.srcY, \n            character.sprite.width, \n            character.sprite.height, \n            character.x, \n            character.y, \n            character.sprite.width * 1.4, \n            character.sprite.height * 1.4\n        );\n    })\n    characters = characters.filter(character => c !== character)\n    return {\n        spriteCycle: spriteCycle,\n        characters: characters\n    };\n}\n\n\n//-------------------------------------------------------------------------------------\n// Character movement\nconst moveCharacter = (movements, c) => {\n    \n    if (movements.length === 0) {\n        c.direction = \"stand\";\n        return null;\n    }\n\n    movements.forEach(movement => {\n        switch(movement){\n            case \"ArrowDown\":\n                if(c.y < canvas.height - 10){\n                    c.y += c.speedY;\n                } else {\n                    c.y = -40;\n                }\n                c.sprite.srcY = 2 * c.sprite.height;\n                break;\n        \n            case \"ArrowRight\":\n                if(c.x < canvas.width - 10){\n                    c.x += c.speedX;\n                } else {\n                    c.x = -40;\n                }\n                c.sprite.srcY = 3 * c.sprite.height;\n                break;\n            \n            case \"ArrowUp\":\n                if(c.y > -50){\n                    c.y -= c.speedY;\n                } else {\n                    c.y = canvas.height - 30;\n                }\n                c.sprite.srcY = 0 * c.sprite.height;\n                break;\n            \n            case \"ArrowLeft\":\n                if(c.x > -50){\n                    c.x -= c.speedX;\n                } else {\n                    c.x = canvas.width - 30;\n                }\n                c.sprite.srcY = 1 * c.sprite.height;\n                break;\n        }\n    })\n}\n\n\n//-------------------------------------------------------------------------------------\n// Computer movement\nconst moveComputers = (computers, c) => {\n    \n    computers.forEach(computer => {\n        let dx = computer.x - c.x;\n        let dy = computer.y - c.y;\n        if (dy === 0) dy += 0.000001;\n        let dist = Math.sqrt( dx*dx + dy*dy);\n        computer.move({ x: (dx/dist), y: (dy/dist) })\n        if(dx/dy > 1){\n            if(dx > 0) {\n                computer.changeDirection(\"left\")\n                computer.sprite.srcY = 1 * computer.sprite.height;\n            } else {\n                computer.changeDirection(\"right\")\n                computer.sprite.srcY = 3 * computer.sprite.height;\n            }\n        } else {\n            if(dy > 0) {\n                computer.changeDirection(\"up\")\n                computer.sprite.srcY = 0 * computer.sprite.height;\n            } else {\n                computer.changeDirection(\"down\")\n                computer.sprite.srcY = 2 * computer.sprite.height;\n            }\n        }\n\n\n    })\n\n\n}\n\n\n//-------------------------------------------------------------------------------------\n// Random computer placement\nconst generatePos = (width, height) => {\n    let x = Math.floor(Math.random() * width);\n    let y = Math.floor(Math.random() * height);\n    let diceRoll = Math.floor(Math.random() * 4)\n    switch(diceRoll) {\n        case 0:\n            return {x: x, y: -100};\n        case 1:\n            return {x: x, y: height + 100};\n        case 2:\n            return {x: -100, y: y};\n        case 3:\n            return {x: width + 100, y: y};\n    }\n}\n\n\n//-------------------------------------------------------------------------------------\n// Collision detection\nconst detectCollision = (c, characters, fireballs) => {\n    \n    c.sprite.heal();\n    characters.forEach(character => {\n        let dx = c.x - character.x;\n        let dy = c.y - character.y;\n        if (dy === 0) dy += 0.000001;\n        let dist = Math.sqrt(dx*dx + dy*dy);\n        if (dist < (c.sprite.hitbox.radius + character.sprite.hitbox.radius)) {\n            c.bump(dx/dist * 2, dy/dist * 2)\n            c.sprite.hit();\n            console.log(c.sprite.health);\n        }\n    })\n    \n    let all = characters.concat(c);\n    for(let i = 0; i < all.length - 1; i++){\n        for(let j = i+1; j < all.length; j++){\n            let dx = all[i].x - all[j].x;\n            let dy = all[i].y - all[j].y;\n            if (dy === 0) dy += 0.000001;\n            let dist = Math.sqrt(dx*dx + dy*dy);\n                \n            if (dist < (all[i].sprite.hitbox.radius + all[j].sprite.hitbox.radius)) {\n                all[i].bump(dx/dist * 2, dy/dist * 2)\n            }\n        }\n    }\n\n    let fireballHits = []\n    let skeletonsHit = []\n    for(let i = 0; i < fireballs.length; i++){\n        for(let j = 0; j < characters.length; j++){\n            let dx = fireballs[i].x - characters[j].x;\n            let dy = fireballs[i].y - characters[j].y;\n            if (dy === 0) dy += 0.000001;\n            let dist = Math.sqrt(dx*dx + dy*dy);\n\n            if (dist < (fireballs[i].hitbox.radius + characters[j].sprite.hitbox.radius)) {\n                fireballHits.push(fireballs[i]);\n                skeletonsHit.push(characters[j]);\n            }\n        }\n    }\n\n    \n    fireballHits.forEach(hit => {\n        fireballs = fireballs.filter(fireball => hit !== fireball);\n    })\n\n    skeletonsHit.forEach(hit => {\n        characters = characters.filter(character => hit !== character);\n    })\n\n    return {fireballs: fireballs, characters: characters}\n}\n\n\n//-------------------------------------------------------------------------------------\n// Draw fireballs\nconst drawFireballs = (fireballs, ctx, canvas) => {\n\n    fireballs.forEach(fireball => {\n        \n        fireball.updateSprite(); \n        \n        ctx.drawImage(\n            fireball.img, \n            fireball.srcX, \n            fireball.srcY, \n            fireball.width, \n            fireball.height, \n            fireball.x, \n            fireball.y, \n            fireball.width * 1.2, \n            fireball.height * 1.2\n        )\n\n    })\n\n    fireballs = fireballs.filter(fireball => {\n        if (fireball.x < -40 || fireball.x > canvas.width + 40) return false \n        if (fireball.y < -40 || fireball.y > canvas.height + 40) return false\n        return true\n    })\n\n    return {\n        fireballs: fireballs\n    };\n\n}\n\n\n//-------------------------------------------------------------------------------------\n// Move fireballs\nconst moveFireballs = fireballs => {\n    \n    fireballs.forEach(fireball => {\n\n        if (fireball.shot) {\n            let dx = fireball.x - fireball.dirX;\n            let dy = fireball.y - fireball.dirY;\n            if (dy === 0) dy += 0.000001;\n            let dist = Math.sqrt( dx*dx + dy*dy);\n            fireball.data(dx, dy, dist);\n        }\n\n        fireball.move({ \n            x: (fireball.dx/fireball.dist) * 5, \n            y: (fireball.dy/fireball.dist) * 5 \n        })\n\n        \n        let ratio = fireball.dx/fireball.dy;\n        if(0.5 <= ratio && ratio < 2 && fireball.dx > 0 && fireball.dy > 0){ \n            fireball.direction(1);\n        } else \n        \n        if((-0.7 <= ratio && ratio < 0.5 && fireball.dx > 0 && fireball.dy > 0) ||\n           (-0.7 <= ratio && ratio < 0.5 && fireball.dx <= 0 && fireball.dy >= 0)){ \n            fireball.direction(2);\n        } else \n        \n        if(-5 <= ratio && ratio < -0.7 && fireball.dx < 0 && fireball.dy > 0){ \n            fireball.direction(3);\n        } else \n        \n        if(-2 <= ratio && ratio < -0.5 && fireball.dx > 0 && fireball.dy < 0){ \n            fireball.direction(7);\n        } else \n        \n        if((-0.5 <= ratio && ratio < 0.7 && fireball.dx < 0 && fireball.dy < 0) ||\n           (-0.5 <= ratio && ratio < 0.7 && fireball.dx >= 0 && fireball.dy <= 0)){ \n            fireball.direction(6);\n        } else \n        \n        if(0.7 <= ratio && ratio < 3 && fireball.dx < 0 && fireball.dy < 0){ \n            fireball.direction(5);\n        } else\n\n        if((-0.5 > ratio && fireball.dx < 0 && fireball.dy > 0) ||\n           (3 <= ratio && fireball.dx <= 0 && fireball.dy <= 0)){ \n            fireball.direction(4);\n        } else\n\n        if((-2 > ratio && fireball.dx > 0 && fireball.dy < 0) ||\n           (2 <= ratio && fireball.dx >= 0 && fireball.dy >= 0)){ \n            fireball.direction(0);\n        } \n\n    })\n\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });