import CanvasEl from './canvas.js';
import Character from './character.js';
import {refresh,
        changeDirection, 
        stopDirection,
        drawCharacters,
        drawFireballs,
        moveCharacter,
        moveComputers,
        detectCollision,
        moveFireballs,
        generatePos
    } from './utils.js';
import Fireball from './fireball.js'


// Canvas build
let canvasEl = new CanvasEl(innerWidth, innerHeight);
let canvas = canvasEl.canvasEl;
let ctx = canvasEl.ctx;
window.canvas = canvas;


// Characters
let characters = [];
let fireballs = [];

// Main character
let c = new Character("bald guy", 300, 300);

// One skeleton
characters.push(new Character("skeleton", 500, 300));
characters.push(new Character("skeleton", 800, 100));
characters.push(new Character("skeleton", 400, 900));
characters.push(new Character("skeleton", 800, 1000));
characters.push(new Character("skeleton", 100, 100));

// Many skeletons
// let skelly;
// setInterval(() => {
//     let sx = -50;
//     let pos = generatePos(canvas.width, canvas.height);
//     skelly = new Character("skeleton", pos.x, pos.y);
//     characters.push(skelly)
// }, 1200);

window.characters = characters;


// Sprite cycle info
let spriteCycle = 0;


// Movement storage
let movements = [];
let drawData;

const updateCharacterData = drawData => {
    spriteCycle = drawData["spriteCycle"];
    characters = drawData["characters"];
}
const updateFireballData = drawData => {
    fireballs = drawData["fireballs"];
}
const updateAllData = drawData => {
    characters = drawData["characters"];
    fireballs = drawData["fireballs"];
}

const healthBar = () => {
    ctx.lineWidth = 6;
    ctx.strokeRect(innerWidth - 302, 18, 254, 24);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(innerWidth - 299, 21, c.sprite.health * 2.5, 18);
}

// Animations ----------------------------------------------------------
const move = () => {
    moveCharacter(movements, c);
    moveComputers(characters, c);
    updateAllData(detectCollision(c, characters, fireballs));
    moveFireballs(fireballs);
}

const draw = () => {
    refresh(ctx, canvas); // clears the canvas
    
    updateCharacterData(drawCharacters(characters, spriteCycle, ctx, c));
    updateFireballData(drawFireballs(fireballs, ctx, canvas));
    healthBar();

    move();

    window.requestAnimationFrame(draw);
}
// ------------------------------------------------------------------------



const shoot = e => {
    fireballs.push(new Fireball(c.x, c.y, e.x, e.y));
}


window.addEventListener("keydown", e => changeDirection(e, movements, fireballs, c));
window.addEventListener("keyup", e => movements = stopDirection(e, movements));
window.addEventListener("click", e => shoot(e));

draw();