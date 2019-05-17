// Canvas data
let canvas;
let ctx;
// let cWidth = document.body.clientWidth;
let cWidth = innerWidth;
// let cHeight = document.body.clientHeight;
let cHeight = innerHeight;
let sprites = ["skeleton.png", "bald_guy.png", "orc_piratess.png", "girl_dress.png"];
let spritePicked = 0;

// Sprite data
let character = new Image();
character.src = sprites[spritePicked];
let sheetWidth = 576;
let sheetHeight = 256;
let cols = 9;
let rows = 4;
let width = sheetWidth / cols;
let height = sheetHeight / rows;
let x = 0;
let y = 0;
let srcX;
let srcY = 2 * height;
let direction = "stand";
let defaultSpeed = 5;
let speedX = defaultSpeed;
let speedY = defaultSpeed;
let movements = [];

// Sprite starting frame
let currentFrame = 1;

// Frames per second for animation
let framesPerSecond = 12;
let second = 1000; // milliseconds

window.onload = () => {

	// gets the canvas info from the html file
    canvas = document.getElementById("gameCanvas");
    canvas.width = cWidth;
    canvas.height = cHeight;

	// gets the 2d rendering context and allows us to draw within it
    ctx = canvas.getContext("2d");
    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

	// calls the listener function so you can click to restart
	// canvas.addEventListener("mousedown", handleMouseClick);

	// setting a timer interval to 30fps
	setInterval(() => {
		moveEverything();
		drawEverything();
	}, second / framesPerSecond);
}

// Main functions   ----------------------------------------------------------------------  //
const moveEverything = () => {                                                              //
    moveBigBoy();                                                                           //
}                                                                                           //
                                                                                            //
const drawEverything = () => {                                                              //
    refresh();
    if (direction !== "stand") {
        updateSprite(); 
    } else {
        srcX = 0;
    }
    
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}                                                                             
// ---------------------------------------------------------------------------------------  //

const updateSprite = () => {
    currentFrame = (++currentFrame % (cols-1)) + 1
    srcX = currentFrame * width;
}

const refresh = () => {
    ctx.clearRect(0, 0, cWidth, cHeight);
}

const moveBigBoy = () => {
    
    switch(direction){
        case "down":
            if(y < innerHeight - 10){
                y += speedY;
            } else {
                y = -40;
            }
            break;
       
        case "right":
            if(x < innerWidth - 10){
                x += speedX;
            } else {
                x = -40;
            }
            break;
        
        case "up":
            if(y > -50){
                y -= speedY;
            } else {
                y = innerHeight - 30;
            }
            break;
        
        case "left":
            if(x > -50){
                x -= speedX;
            } else {
                x = innerWidth - 30;
            }
            break;

        case "stand":
            currentFrame = 0;
            break;
   }
}

const changeDirection = keyVal => {
    console.log(keyVal.key);
    switch(keyVal.key){
        case "ArrowUp":
            speedY = defaultSpeed;
            srcY = 0 * height;
            direction = "up";
            currentFrame = 1;
            test();
            break;
        case "ArrowLeft":
            speedX = defaultSpeed;
            srcY = 1 * height;
            direction = "left";
            currentFrame = 1;
            test();
            break;
        case "ArrowDown":
            speedY = defaultSpeed;
            srcY = 2 * height;
            direction = "down";
            currentFrame = 1;
            test();
            break;
        case "ArrowRight":
            speedX = defaultSpeed;
            srcY = 3 * height;
            direction = "right";
            currentFrame = 1;
            test();
            break;
        case "Shift":
            speedX = 0;
            speedY = 0;
            direction = "stand";
            currentFrame = 0;
            test();
            break;
        case "c":
            spritePicked = ++spritePicked % sprites.length;
            character.src = sprites[spritePicked];
            break;
    }
}

const stopDirection = keyVal => {
    console.log(keyVal.key);
    switch(keyVal.key){
        case "ArrowUp":
            speedY = 0;
            currentFrame = 0;
            break;
        case "ArrowLeft":
            speedX = 0;
            currentFrame = 0;
            break;
        case "ArrowDown":
            speedY = 0;
            currentFrame = 0;
            break;
        case "ArrowRight":
            speedX = 0;
            speedY = 0;
            currentFrame = 0;
            break;
        case "Shift":
            speed = 0;
            currentFrame = 0;
            break;
        case "c":
            spritePicked = ++spritePicked % sprites.length;
            character.src = sprites[spritePicked];
            break;
    }
}

window.addEventListener("keydown", changeDirection);
// window.addEventListener("keyup", stopDirection);

const test = () => {
    console.log("current frame: " + currentFrame);
    console.log("direction: " + direction);
    console.log("speedX: " + speedX);
    console.log("speedY: " + speedY);
    console.log("Canvas width: " + cWidth);
    console.log("Canvas height: " + cHeight);
}