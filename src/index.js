import CanvasEl from './canvas.js';
import Character from './character.js';


// Canvas build
let canvasEl = new CanvasEl(innerWidth, innerHeight);
let canvas = canvasEl.canvasEl;
let ctx = canvasEl.ctx;


// Characters
let characters = new Array;
characters.push(new Character("skeleton", 100, 100));
// characters.push(new Character(100, 100, '../sprite_sheets/skeleton.png'));
window.characters = characters;

