import CanvasEl from './canvas.js';
import Character from './character.js';
import {refresh,
        changeDirection, 
        stopDirection,
        drawCharacters,
        drawFireballs,
        drawExplosions,
        moveCharacter,
        moveComputers,
        moveFireballs,
        detectCollision,
        generatePos
    } from './utils.js';
import Fireball from './fireball.js';
import Explosion from './explosion.js';


// Canvas build
let canvasEl = new CanvasEl(innerWidth, innerHeight);
let canvas = canvasEl.canvasEl;
let ctx = canvasEl.ctx;
let mousePos;
window.canvas = canvas;

// Characters
let characters = [];
let fireballs = [];
let explosions = [];


// Main character
let c = new Character("bald guy", 300, 300);


// Test skeletons
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
const updateAll = drawData => {
    characters = drawData["characters"];
    fireballs = drawData["fireballs"];
    explosions = drawData["explosions"];
}
const updateExplosionData = drawData => {
    explosions = drawData["explosions"];
}


const healthBar = () => {
    ctx.lineWidth = 6;
    ctx.strokeRect(innerWidth - 302, 18, 254, 24);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(innerWidth - 299, 21, c.sprite.health * 2.5, 18);
}


// Animations ----------------------------------------------------------
const move = () => {
    updateAll(detectCollision(c, characters, fireballs, explosions));
    moveCharacter(movements, c);
    // moveComputers(characters, c);
    moveFireballs(fireballs);
}


const draw = () => {
    refresh(ctx, canvas); // clears the canvas
    
    updateCharacterData(drawCharacters(characters, spriteCycle, ctx, c));
    updateFireballData(drawFireballs(fireballs, ctx, canvas));
    updateExplosionData(drawExplosions(explosions, ctx));

    healthBar();

    move();

    window.requestAnimationFrame(draw);
}
// ------------------------------------------------------------------------


const shoot = e => {
    fireballs.push(new Fireball(c.x, c.y, e.x, e.y));
}


window.addEventListener("keydown", e => fireballs = changeDirection(e, movements, fireballs, mousePos, c));
window.addEventListener("keyup", e => movements = stopDirection(e, movements));
window.addEventListener("click", e => shoot(e));
window.addEventListener("mousemove", e => mousePos = {x: e.clientX, y: e.clientY});

draw();