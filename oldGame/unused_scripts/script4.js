// Canvas data
let canvas;
let ctx;
let cWidth = innerWidth;
let cHeight = innerHeight;
// let sprites = ["skeleton.png", "bald_guy.png", "orc_piratess.png", "girl_dress.png"];
// let spritePicked = 0;

// Sprite data
let character = new Image();
character.src = "zelda_girl.png";
let sheetWidth = 288;
let sheetHeight = 256;
let cols = 12;
let rows = 8;
let width = sheetWidth / cols;
let height = (sheetHeight / rows) + 1;
let x = cWidth/2;
let y = cHeight/2;
let srcX;
let srcY = 2 * height;
let direction = "stand";
let defaultSpeed = 2;
let speedX = defaultSpeed;
let speedY = defaultSpeed;
let movements = [];

// Sprite hit box coord variables
let hitbox;

// Sprite starting frame
let currentFrame = 1;

// Frames per second for animation
let framesPerSecond = 60;
let second = 1000; // milliseconds
let spriteCycle = 0;

// Money
let money = new Image();
money.src = "stack_money.png"
let moneyX = Math.floor(Math.random() * innerWidth);
let moneyY = Math.floor(Math.random() * innerHeight);
let moneyWidth = 40;
let moneyHeight = 40;
let moneyBox;

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
    spriteCycle++;
    if (direction !== "stand") {
        if(spriteCycle % 8 === 0) {
            spriteCycle = 0;
            updateSprite(); 
        }
    } else {
        srcX = 0;
    }

    hitBox = {
        x: x + 22,
        y: y + 25,
        width: 20,
        height: 30
    }

    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    if(moneyAvailabe()) {
        ctx.drawImage(money, moneyX, moneyY, moneyWidth, moneyWidth);
    } else {
        moneyX = Math.floor(Math.random() * innerWidth);
        moneyY = Math.floor(Math.random() * innerHeight);
    }
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
    
    // Uncomment to see hit box of the character
    // ctx.rect(hitBox.x, hitBox.y, hitBox.width, hitBox.height);
    // ctx.stroke();
    // ctx.rect(moneyBox.x, moneyBox.y, moneyBox.width, moneyBox.height);
    // ctx.stroke();
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
    
    if (movements.length === 0) {
        direction = "stand";
        return null;
    }
    
    // Movement
    movements.forEach(movement => {
        switch(movement){
            case "ArrowDown":
                if(y < innerHeight - 10){
                    y += speedY;
                } else {
                    y = -40;
                }
                srcY = 2 * height;
                break;
        
            case "ArrowRight":
                if(x < innerWidth - 10){
                    x += speedX;
                } else {
                    x = -40;
                }
                srcY = 3 * height;
                break;
            
            case "ArrowUp":
                if(y > -50){
                    y -= speedY;
                } else {
                    y = innerHeight - 30;
                }
                srcY = 0 * height;
                break;
            
            case "ArrowLeft":
                if(x > -50){
                    x -= speedX;
                } else {
                    x = innerWidth - 30;
                }
                srcY = 1 * height;
                break;

            case "stand":
                currentFrame = 0;
                break;
        }
    })
}

const moneyAvailabe = () => {
    
    moneyBox = {
        x: moneyX + 10, 
        y: moneyY + 13,
        width: 20,
        height: 14
    }
    let xMin = moneyBox.x;
    let xMax = moneyBox.x + moneyBox.width;
    let yMin = moneyBox.y;
    let yMax = moneyBox.y + moneyBox.height;
    
    let noOverlap = true;
    // let xOverlap = false;
    // let yOverlap = false;
    // if(hitBox.tl.x < xMin && xMin < (hitBox.tl.x + hitBox.width) ) {
    //     xOverlap = true;
    // } 
    // if(hitBox.tl.x < xMax && xMax < (hitBox.tl.x + hitBox.width) ) {
    //     xOverlap = true;
    // }
    // if (hitBox.tl.y < yMin && yMin < (hitBox.tl.y + hitBox.height)) {
    //     yOverlap = true;
    // }
    // if (hitBox.tl.y < yMax && yMax < (hitBox.tl.y + hitBox.height)) {
    //     yOverlap = true;
    // }

    if (hitBox.x < moneyBox.x + moneyBox.width &&
        hitBox.x + hitBox.width > moneyBox.x &&
        hitBox.y < moneyBox.y + moneyBox.height &&
        hitBox.y + hitBox.height > moneyBox.y)
    {
        noOverlap = false
    }

    return (noOverlap);
}

const changeDirection = keyVal => {

    switch(keyVal.key){
        case "ArrowUp":
            if(!(movements.find(move => move === keyVal.key))) movements.push(keyVal.key);
            speedY = defaultSpeed;
            direction = "move";
            currentFrame %= (cols - 1);
            test();
            break;
        case "ArrowLeft":
            if(!(movements.find(move => move === keyVal.key))) movements.push(keyVal.key);
            speedX = defaultSpeed;
            direction = "move";
            currentFrame %= (cols - 1);
            test();
            break;
        case "ArrowDown":
            if(!(movements.find(move => move === keyVal.key))) movements.push(keyVal.key);
            speedY = defaultSpeed;
            direction = "move";
            currentFrame %= (cols - 1);
            test();
            break;
        case "ArrowRight":
            if(!(movements.find(move => move === keyVal.key))) movements.push(keyVal.key);
            speedX = defaultSpeed;
            direction = "move";
            currentFrame %= (cols - 1);
            test();
            break;
        case "c":
            spritePicked = ++spritePicked % sprites.length;
            character.src = sprites[spritePicked];
            break;
    }
}

const stopDirection = keyVal => {
   
    switch(keyVal.key){
        case "ArrowUp":
            movements = movements.filter(el => el !== "ArrowUp")
            test();
            break;
        case "ArrowLeft":
            movements = movements.filter(el => el !== "ArrowLeft")
            test();
            break;
        case "ArrowDown":
            movements = movements.filter(el => el !== "ArrowDown")
            test();
            break;
        case "ArrowRight":
            movements = movements.filter(el => el !== "ArrowRight")
            test();
            break;
        
    }
}

window.addEventListener("keydown", changeDirection);
window.addEventListener("keyup", stopDirection);

const test = () => {
    // console.log("X pos: " + x);
    // console.log("Y pos: " + y);
    // console.log(`Sprite TL Coord: (${hitBox.tl.x}, ${hitBox.tl.y})`);
    // console.log(`Sprite TR Coord: (${hitBox.tr.x}, ${hitBox.tr.y})`);
    // console.log(`Sprite BL Coord: (${hitBox.bl.x}, ${hitBox.bl.y})`);
    // console.log(`Sprite BR Coord: (${hitBox.br.x}, ${hitBox.br.y})`);
    // console.log(`Money TL Coord: (${moneyBox.tl.x}, ${moneyBox.tl.y})`);
    // console.log(`Money TR Coord: (${moneyBox.tr.x}, ${moneyBox.tr.y})`);
    // console.log(`Money BL Coord: (${moneyBox.bl.x}, ${moneyBox.bl.y})`);
    // console.log(`Money BR Coord: (${moneyBox.br.x}, ${moneyBox.br.y})`);
    // console.log(moneyAvailabe());
    // console.log("current frame: " + currentFrame);
    // console.log("direction: " + direction);
    // console.log("movements: " + movements);
    // console.log("speedX: " + speedX);
    // console.log("speedY: " + speedY);
    // console.log("Canvas width: " + cWidth);
    // console.log("Canvas height: " + cHeight);
    // console.log("moneyX: " + moneyX);
    // console.log("moneyY: " + moneyY);
}