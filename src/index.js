import CanvasEl from './canvas.js';
import Character from './character.js';
import {refresh,
        toggleSound,
        startGame,
        displaySkeletonDeaths,
        displayHealthBar,
        shoot,
        changeDirection, 
        stopDirection,
        drawCharacters,
        drawFireballs,
        drawExplosions,
        moveCharacter,
        moveComputers,
        startComputers,
        moveFireballs,
        detectCollision,
        generatePos,
        gameOver
    } from './utils.js';
import Fireball from './fireball.js';
import Explosion from './explosion.js';


// Canvas build
let canvasEl = new CanvasEl(innerWidth, innerHeight);
let canvas = canvasEl.canvasEl;
let ctx = canvasEl.ctx;
let mousePos = {x: innerHeight - 400, y: innerHeight/2};
let soundVolume = "on";
let skeletonCount = 0;
let skeletonRate = 80;
let killTracker = 0;
let start = false;
let playBtn = document.getElementById("start");
window.canvas = canvas;

// Character data
let characters = [];
let fireballs = [];
let explosions = [];
let kills = 0;


// Main character
let c = new Character("bald guy", innerWidth-350, innerHeight/2.5);


// start skeletons
characters.push(new Character("skeleton", innerWidth-300, innerHeight/1.4));
characters.push(new Character("skeleton", innerWidth-380, innerHeight/3));
characters.push(new Character("skeleton", innerWidth-290, 140));
characters.push(new Character("skeleton", innerWidth-440, innerHeight/2.7));
characters.push(new Character("skeleton", innerWidth-300, innerHeight/1.2));
characters.push(new Character("skeleton", innerWidth-280, innerHeight/2.2));
characters.push(new Character("skeleton", innerWidth-450, innerHeight/2.2));
characters.push(new Character("skeleton", innerWidth-450, 200));
characters.push(new Character("skeleton", innerWidth-250, 100));
characters.push(new Character("skeleton", innerWidth-500, innerHeight/2.9));
characters.push(new Character("skeleton", innerWidth-470, innerHeight/1.5));



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
    kills = drawData["kills"];
    if (kills % 4 === 0 && kills !== 0 && kills !== killTracker) {
        skeletonRate--;
        killTracker = kills;
    }
    
}
const updateExplosionData = drawData => {
    explosions = drawData["explosions"];
}

const makeSkeletons = (skeletonCount, characters) => {
    skeletonCount++;
   
    if (skeletonCount % skeletonRate === 0) {
        skeletonCount = 0;
        let pos = generatePos(canvas.width, canvas.height);
        characters.push(new Character("skeleton", pos.x, pos.y))
    }
    return skeletonCount;
}

// Animations ----------------------------------------------------------
const game = () => {
    refresh(ctx, canvas);

    ctx.font = "50px Georgia";
    ctx.fillStyle = "White";
    ctx.fillText("Dungeon Smash", canvas.width * 0.38, canvas.height/2 - 200);
    updateCharacterData(drawCharacters(characters, spriteCycle, ctx, c));
    c.directionMove();
    startComputers(characters, mousePos);
    updateAll(detectCollision(c, characters, fireballs, explosions, kills, soundVolume));

    if (start){
        characters = [];
        draw();
    } 
    if (!start) window.requestAnimationFrame(game);
}


const move = () => {
    updateAll(detectCollision(c, characters, fireballs, explosions, kills, soundVolume));
    moveCharacter(movements, c);
    moveComputers(characters, c);
    moveFireballs(fireballs);
}


const draw = () => {
    if (gameOver(c)){
        
        refresh(ctx, canvas); // clears the canvas
        
        skeletonCount = makeSkeletons(skeletonCount, characters);
        updateCharacterData(drawCharacters(characters, spriteCycle, ctx, c));
        updateFireballData(drawFireballs(fireballs, ctx, canvas));
        updateExplosionData(drawExplosions(explosions, ctx));
        
        displaySkeletonDeaths(kills, ctx);
        displayHealthBar(ctx, c);

        move();
    } else {
        ctx.font = "50px Georgia";
        ctx.fillStyle = "red";
        ctx.fillText("You Died", canvas.width * 0.43, canvas.height/2 - 200);
        ctx.fillStyle = "Red";
        ctx.fillText("Your Kills: " + kills, canvas.width * 0.41, canvas.height - 250);
        kills = 0;
        skeletonRate = 80;
        killTracker = 0;
        characters = []
        playBtn.classList.remove("hidden");
    }
    
    window.requestAnimationFrame(draw);
}
// ------------------------------------------------------------------------


window.addEventListener("click", e => fireballs = shoot(fireballs, e, c, soundVolume));
window.addEventListener("keydown", e => fireballs = changeDirection(e, movements, fireballs, mousePos, c, soundVolume));
window.addEventListener("keyup", e => movements = stopDirection(e, movements));
window.addEventListener("mousemove", e => mousePos = {x: e.clientX, y: e.clientY});
volume.addEventListener("click", e => soundVolume = toggleSound(e, soundVolume));
mute.addEventListener("click", e => soundVolume = toggleSound(e, soundVolume));
playBtn.addEventListener("click", e => start = startGame(e, c));

game();