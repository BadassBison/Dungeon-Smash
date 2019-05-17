// Canvas data
let canvas;
let ctx;
let cWidth = innerWidth;
let cHeight = innerHeight;
let sprites = [
    "./sprite_sheets/bald_guy.png", 
    "./sprite_sheets/orc_piratess.png", 
    "./sprite_sheets/skeleton.png", 
    "./sprite_sheets/girl_dress.png"];
let spritePicked = 0;

// Sprite data
let character = new Image();
character.src = sprites[spritePicked]; 
let sheetWidth = 576;
let sheetHeight = 256;
let cols = 9;
let rows = 4;
let width = sheetWidth / cols;
let height = (sheetHeight / rows) + 1;
let x = cWidth/2;
let y = cHeight/2;
let srcX;
let srcY = 2 * height;
let direction = "stand";
let defaultSpeed = 3;
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
money.src = "./images/stack_money.png"
let moneyX;
let moneyShadowX;
let moneyY;
let moneyShadowY;
let moneyFloatCount = 0;
let moneyFloat = "up";
let moneyWidth = 40;
let moneyHeight = 40;
let moneyBox;
let totalMoney = 0;

// Fireball
let fireball = new Image();
fireball.src = "fireball.png";

window.onload = () => {

	// gets the canvas info from the html file
    canvas = document.getElementById("gameCanvas");
    canvas.width = cWidth;
    canvas.height = cHeight;
    // canvasBG = document.getElementById("gameCanvasBG");
    // canvasBG.width = cWidth;
    // canvasBG.height = cHeight;

	// gets the 2d rendering context and allows us to draw within it
    ctx = canvas.getContext("2d");

    // ctxBG.drawImage(background,0,0);

	// calls the listener function so you can click to restart
	// canvas.addEventListener("mousedown", handleMouseClick);

    generateMoney();
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
    displayMoney();
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
        x: x + 27,
        y: y + 25,
        width: 22,
        height: 45
    }

    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.beginPath();
    ctx.ellipse(moneyShadowX + 20, moneyShadowY + 63, 11, 15, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();

    if(moneyAvailabe()) {
        updateFloatingMoney();
        ctx.drawImage(money, moneyX, moneyY, moneyWidth, moneyWidth);
    } else {
        totalMoney += 1000;
        generateMoney();
    }
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width * 1.2, height * 1.2);
    
    // Uncomment to see hit box of the character
    // ctx.rect(hitBox.x, hitBox.y, hitBox.width, hitBox.height);
    // ctx.stroke();

    // Uncomment to see hit box of the money
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
    
    let noOverlap = true;

    if (hitBox.x < moneyBox.x + moneyBox.width &&
        hitBox.x + hitBox.width > moneyBox.x &&
        hitBox.y < moneyBox.y + moneyBox.height &&
        hitBox.y + hitBox.height > moneyBox.y)
    {
        noOverlap = false
    }

    return (noOverlap);
}

const generateMoney = () => {
    moneyX = Math.floor(Math.random() * innerWidth);
    if (moneyX < 150) {
        moneyX += 150;
    } else if (moneyX > innerWidth - 150) {
        moneyX -= 150;
    }
    moneyY = Math.floor(Math.random() * innerHeight);
    if (moneyY < 150) {
        moneyY += 150;
    } else if (moneyY > innerHeight - 150) {
        moneyY -= 150;
    }
    moneyShadowX = moneyX;
    moneyShadowY = moneyY;
}

const updateFloatingMoney = () => {
    let floatDistance = 20;
    if(moneyFloat === "up"){
        moneyFloatCount++;
        if(moneyFloatCount % 8) moneyY++;
        if(moneyFloatCount > floatDistance) {
            moneyFloatCount = 0;
            moneyFloat = "down";
        }
    } else {
        moneyFloatCount++;
        if(moneyFloatCount % 8) moneyY--;
        if(moneyFloatCount > floatDistance) {
            moneyFloatCount = 0;
            moneyFloat = "up";
        }
    }

}

const displayMoney = () => {
    ctx.font="60px Georgia"
    ctx.fillStyle = "white";
	ctx.fillText("$" + totalMoney, 120, 100);
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
        case "Shift":
            defaultSpeed = 5;
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
        case "Shift":
            defaultSpeed = 3;
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