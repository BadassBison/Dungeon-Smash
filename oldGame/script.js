// Canvas data
let canvas;
let ctx;
let cWidth = innerWidth;
let cHeight = innerHeight;

// Sprite data
let character = new Image();
character.src = "./sprite_sheets/trump_run.png";
let sheetWidth = 600;
let sheetHeight = 400;
let cols = 6;
let rows = 4;
let width = sheetWidth / cols;
let height = sheetHeight / rows;
let x = 0;
let y = 0;
let srcX;
let srcY = 0;
let direction = "down";

// 
let currentFrame = 0;

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

	// typical frames per second
    let framesPerSecond = 12;
    let second = 1000; // milliseconds
    
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
    updateSprite(); 
    
    // ===== Triangle ========== //
    // ctx.fillRect(0, 0, canvas.width, canvas.height); 
    // ctx.beginPath();
    // ctx.moveTo(175, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();    
    
    // ===== Smiley face ========== //
    // ctx.beginPath();
    // ctx.arc(175, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(140, 80);
    // ctx.arc(175, 80, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // ctx.moveTo(165, 65);
    // ctx.arc(160, 65, 8, 0, Math.PI * 2, true);  // Left eye
    // ctx.moveTo(195, 65);
    // ctx.arc(190, 65, 8, 0, Math.PI * 2, true);  // Right eye
    // ctx.stroke();

    // let cp0 =   { x: 50,    y: 20  };
    // let cp1 =   { x: 230,   y: 30  };
    // let cp2 =   { x: 150,   y: 80  };
    // let cp3 =   { x: 250,   y: 100 };

    // // Cubic Bézier curve
    // ctx.beginPath();
    // ctx.moveTo(cp0.x, cp0.y);
    // ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, cp3.x, cp3.y);
    // ctx.stroke();

    // // start and enkd points
    // ctx.fillStyle = 'blue';
    // ctx.beginPath();
    // ctx.arc(cp0.x, cp0.y, 5, 0, 2 * Math.PI);  // Start point
    // ctx.arc(cp3.x, cp3.y, 5, 0, 2 * Math.PI);      // End point
    // ctx.fill();

    // // Control points
    // ctx.fillStyle = 'red';
    // ctx.beginPath();
    // ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
    // ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
    // ctx.fill();

    // shiftRight = 220;
    // shiftDown = 200;

    // building
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(shiftRight, shiftDown, 375, 170);

    // Draw triangle
    // ctx.fillStyle="#A2322E";
    // ctx.beginPath();
    // ctx.moveTo(220, 200);
    // ctx.lineTo(400, 150);
    // ctx.lineTo(595,200);
    // ctx.closePath();
    // ctx.fill();

    // windows
    // ctx.fillStyle="#663300";
    // ctx.fillRect(shiftRight+25,shiftDown+40,70,50);
    // ctx.fillStyle="#0000FF";
    // ctx.fillRect(shiftRight+27,shiftDown+42,63,23);
    // ctx.fillRect(shiftRight+43,shiftDown+42,63,23);
    // ctx.fillRect(shiftRight+43,shiftDown+67,63,21);
    // ctx.fillRect(shiftRight+27,shiftDown+67,63,21);

    // door
    // ctx.fillStyle = "#754719";
    // ctx.fillRect(80,53,30,100);

    // door knob
    // ctx.beginPath();
    // ctx.fillStyle = "#F2F2F2";
    // ctx.arc(105,75,3,0,2*Math.PI);
    // ctx.fill();
    // ctx.closePath();

    // Text on the Right
    // ctx.font="20px Veranda";
    // ctx.fillText("Hello",130,60);
    // ctx.font="10px Veranda";
    // ctx.fillText("Made In",130,75);
    // ctx.fillText("Canvas",130,85);

    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
    // ctx.fillRect(100, 100)
}                                                                             
// ---------------------------------------------------------------------------------------  //

const updateSprite = () => {
    currentFrame = ++currentFrame % cols
    srcX = currentFrame * width;
}

const refresh = () => {
    ctx.clearRect(0, 0, cWidth, cHeight);
}

const moveBigBoy = () => {
    switch(direction){
        case "down":
            if(y < innerHeight - 30){
                y += 12;
            } else {
                y = -80;
            }
            break;
       
        case "right":
            if(x < innerWidth - 30){
                x += 12;
            } else {
                x = -80;
            }
            break;
        
        case "up":
            if(y > -50){
                y -= 12;
            } else {
                y = innerHeight - 30;
            }
            break;
        
        case "left":
            if(x > -50){
                x -= 12;
            } else {
                x = innerWidth - 30;
            }
            break;
   }
}

const changeDirection = keyVal => {
    console.log(keyVal.key);
    switch(keyVal.key){
        case "ArrowDown":
            srcY = 0;
            direction = "down";
            break;
        case "ArrowRight":
            srcY = 100;
            direction = "right";
            break;
        case "ArrowUp":
            srcY = 200;
            direction = "up";
            break;
        case "ArrowLeft":
            srcY = 300;
            direction = "left";
            break;
    }
}

window.addEventListener("keydown", changeDirection);