import Sound from './sounds.js';
import Character from './character.js';
import Fireball from './fireball.js';
import Explosion from './explosion.js';


//-------------------------------------------------------------------------------------
// Refresh the canvas
export const refresh = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


//-------------------------------------------------------------------------------------
// Play sounds
const playSound = sound => {
    
    // Remove previous sound nodes
    let sounds = document.querySelectorAll('.sound');
    sounds.forEach(el => {
        el.remove();
    })

    switch(sound){
        case "fireball":
            let shot = new Sound('sounds/fireballShot.wav');
            shot.play();
        case "explosion":
            let hit = new Sound('sounds/explosion.wav');
            hit.play();
        case "bump":
            let bump = new Sound('sounds/bump.flac');
            bump.play();
    }
}


//-------------------------------------------------------------------------------------
// Sound toggle
export const toggleSound = (e, soundVolume) => {
    
    let mute = document.getElementById("mute");
    let volume = document.getElementById("volume");

    if(e.target.id === "mute"){
        mute.classList.add("hidden");
        volume.classList.remove("hidden");
        soundVolume = "on";
    } else {
        volume.classList.add("hidden");
        mute.classList.remove("hidden");
        soundVolume = "mute"
    }
    return soundVolume;
}


//-------------------------------------------------------------------------------------
// Start game
export const startGame = (e, c) => {
    
    let start = document.getElementById("start").setAttribute("class", "hidden");
    let controls = document.querySelectorAll(".controls");
    controls.forEach(node => node.remove());
    c.sprite.fullHealth();
    return true;
}

          
//-------------------------------------------------------------------------------------
// Click Shooting
export const shoot = (fireballs, e, c, soundVolume) => {
    if (fireballs.length < 5){
        if(soundVolume === "on") playSound("fireball");
        fireballs.push(new Fireball(c.x, c.y, e.x, e.y));
    }
    return fireballs;
}


//-------------------------------------------------------------------------------------
// Kills counter
export const displaySkeletonDeaths = (kills, ctx) => {
    ctx.font="20px Georgia"
    ctx.fillStyle = "white";
	ctx.fillText("Kills: " + kills, innerWidth - 400, 36);
}


//-------------------------------------------------------------------------------------
// Health Bar
export const displayHealthBar = (ctx, c) => {
    ctx.lineWidth = 6;
    ctx.strokeRect(innerWidth - 302, 18, 254, 24);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(innerWidth - 299, 21, c.sprite.health * 2.5, 18);
}

//-------------------------------------------------------------------------------------
// key pressed actions 
export const changeDirection = (keyVal, movements, fireballs, mousePos, c, soundVolume) => {
    
    switch(keyVal.key){
        case "ArrowUp":
        case "w":
            if(!(movements.find(move => move === "ArrowUp"))) movements.push("ArrowUp");
            c.changeDirection("move");
            break;
            
        case "ArrowLeft":
        case "a":
            if(!(movements.find(move => move === "ArrowLeft"))) movements.push("ArrowLeft");
            c.changeDirection("move");
            break;
    
        case "ArrowDown":
        case "s":
            if(!(movements.find(move => move === "ArrowDown"))) movements.push("ArrowDown");
            c.changeDirection("move");
            break;

        case "ArrowRight": 
        case "d":
            if(!(movements.find(move => move === "ArrowRight"))) movements.push("ArrowRight");
            c.changeDirection("move");
            break;

        case " ":
        case "Shift":
            if (fireballs.length < 5) {
                if (soundVolume === "on") playSound("fireball");
                fireballs.push(new Fireball(c.x, c.y, mousePos.x, mousePos.y));
            }
            break;
    }
    return fireballs;
}


//-------------------------------------------------------------------------------------
// Key release actions
export const stopDirection = (keyVal, movements) => {
    switch(keyVal.key){
        case "ArrowUp":
        case "w":
            movements = movements.filter(el => el !== "ArrowUp")
            break;
            
        case "ArrowLeft":
        case "a":
            movements = movements.filter(el => el !== "ArrowLeft")
            break;
            
        case "ArrowDown":
        case "s":
            movements = movements.filter(el => el !== "ArrowDown")
            break;
            
        case "ArrowRight":
        case "d":
            movements = movements.filter(el => el !== "ArrowRight")
            break;
    }
    return movements;
}


//-------------------------------------------------------------------------------------
// Draws the characters
export const drawCharacters = (characters, spriteCycle, ctx, c) => {
    
    spriteCycle++;
    characters.unshift(c);
    characters.sort((a, b) => {
        return (a.y - b.y)
    })

    characters.forEach(character => {

        if (character.direction !== "stand") {
            if(spriteCycle % 8 === 0) {
                spriteCycle = 0;
                character.sprite.updateSprite(); 
            }
        } else {
            character.sprite.srcX = 0;
        }

        ctx.drawImage(
            character.sprite.img, 
            character.sprite.srcX, 
            character.sprite.srcY, 
            character.sprite.width, 
            character.sprite.height, 
            character.x, 
            character.y, 
            character.sprite.width * 1.4, 
            character.sprite.height * 1.4
        );
    })
    characters = characters.filter(character => c !== character)
    return {
        spriteCycle: spriteCycle,
        characters: characters
    };
}


//-------------------------------------------------------------------------------------
// Character movement
export const moveCharacter = (movements, c) => {
    
    if (movements.length === 0) {
        c.direction = "stand";
        return null;
    }

    movements.forEach(movement => {
        switch(movement){
            case "ArrowDown":
                if(c.y < canvas.height - 10){
                    c.y += c.speedY;
                } else {
                    c.y = -40;
                }
                c.sprite.srcY = 2 * c.sprite.height;
                break;
        
            case "ArrowRight":
                if(c.x < canvas.width - 10){
                    c.x += c.speedX;
                } else {
                    c.x = -40;
                }
                c.sprite.srcY = 3 * c.sprite.height;
                break;
            
            case "ArrowUp":
                if(c.y > -50){
                    c.y -= c.speedY;
                } else {
                    c.y = canvas.height - 30;
                }
                c.sprite.srcY = 0 * c.sprite.height;
                break;
            
            case "ArrowLeft":
                if(c.x > -50){
                    c.x -= c.speedX;
                } else {
                    c.x = canvas.width - 30;
                }
                c.sprite.srcY = 1 * c.sprite.height;
                break;
        }
    })
}


//-------------------------------------------------------------------------------------
// Computer movement
export const moveComputers = (computers, c) => {
    
    computers.forEach(computer => {
        let dx = computer.x - c.x;
        let dy = computer.y - c.y;
        if (dy === 0) dy += 0.000001;
        let dist = Math.sqrt( dx*dx + dy*dy);
        computer.move({ x: (dx/dist), y: (dy/dist) })
        if(dx/dy > 1){
            if(dx > 0) {
                computer.changeDirection("left")
                computer.sprite.srcY = 1 * computer.sprite.height;
            } else {
                computer.changeDirection("right")
                computer.sprite.srcY = 3 * computer.sprite.height;
            }
        } else {
            if(dy > 0) {
                computer.changeDirection("up")
                computer.sprite.srcY = 0 * computer.sprite.height;
            } else {
                computer.changeDirection("down")
                computer.sprite.srcY = 2 * computer.sprite.height;
            }
        }
    })
}


//-------------------------------------------------------------------------------------
// Start screen Computer movement
export const startComputers = (computers, mousePos) => {
    
    computers.forEach(computer => {
        let dx = computer.x - mousePos.x;
        let dy = computer.y - mousePos.y;
        if (dy === 0) dy += 0.000001;
        let dist = Math.sqrt( dx*dx + dy*dy);
        computer.move({ x: (dx/dist), y: (dy/dist) })
        if(dx/dy > 1){
            if(dx > 0) {
                computer.changeDirection("left")
                computer.sprite.srcY = 1 * computer.sprite.height;
            } else {
                computer.changeDirection("right")
                computer.sprite.srcY = 3 * computer.sprite.height;
            }
        } else {
            if(dy > 0) {
                computer.changeDirection("up")
                computer.sprite.srcY = 0 * computer.sprite.height;
            } else {
                computer.changeDirection("down")
                computer.sprite.srcY = 2 * computer.sprite.height;
            }
        }
    })
}


//-------------------------------------------------------------------------------------
// Random computer placement
export const generatePos = (width, height) => {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    let diceRoll = Math.floor(Math.random() * 4)
    switch(diceRoll) {
        case 0:
            return {x: x, y: -100};
        case 1:
            return {x: x, y: height + 100};
        case 2:
            return {x: -100, y: y};
        case 3:
            return {x: width + 100, y: y};
    }
}


//-------------------------------------------------------------------------------------
// Collision detection
export const detectCollision = (c, characters, fireballs, explosions, kills, soundVolume) => {
    
    // Main character health regeneration
    c.sprite.heal();

    // Main character touches an enemy
    characters.forEach(character => {
        let dx = c.x - character.x;
        let dy = c.y - character.y;
        if (dy === 0) dy += 0.000001;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < (c.sprite.hitbox.radius + character.sprite.hitbox.radius)) {
            c.bump(dx/dist * 2, dy/dist * 2)
            if (soundVolume == "on") playSound("bump");
            c.sprite.hit();
        }
    })
    
    // Any Enemy touches any other enemy
    let all = characters.concat(c);
    for(let i = 0; i < all.length - 1; i++){
        for(let j = i+1; j < all.length; j++){
            let dx = all[i].x - all[j].x;
            let dy = all[i].y - all[j].y;
            if (dy === 0) dy += 0.000001;
            let dist = Math.sqrt(dx*dx + dy*dy);
                
            if (dist < (all[i].sprite.hitbox.radius + all[j].sprite.hitbox.radius)) {
                all[i].bump(dx/dist * 2, dy/dist * 2)
            }
        }
    }

    // Fireball hits an enemy
    let fireballHits = []
    let skeletonsHit = []
    for(let i = 0; i < fireballs.length; i++){
        for(let j = 0; j < characters.length; j++){
            let dx = fireballs[i].x - characters[j].x;
            let dy = fireballs[i].y - characters[j].y;
            if (dy === 0) dy += 0.000001;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < (fireballs[i].hitbox.radius + characters[j].sprite.hitbox.radius)) {
        
                if (soundVolume === "on") playSound("explosion");
                kills++;
                fireballHits.push(fireballs[i]);
                skeletonsHit.push(characters[j]);
                explosions.push(new Explosion(characters[j].x, characters[j].y))
            }
        }
    }

    // Remove fireball if hit
    fireballHits.forEach(hit => {
        fireballs = fireballs.filter(fireball => hit !== fireball);
    })

    // Remove skeleton if hit
    skeletonsHit.forEach(hit => {
        characters = characters.filter(character => hit !== character);
    })

    return {
        fireballs: fireballs, 
        characters: characters,
        explosions: explosions,
        kills: kills
    }
}


//-------------------------------------------------------------------------------------
// Draw fireballs
export const drawFireballs = (fireballs, ctx, canvas) => {

    fireballs.forEach(fireball => {
        
        fireball.updateSprite(); 
        
        ctx.drawImage(
            fireball.img, 
            fireball.srcX, 
            fireball.srcY, 
            fireball.width, 
            fireball.height, 
            fireball.x, 
            fireball.y, 
            fireball.width * 1.2, 
            fireball.height * 1.2
        )
    })

    fireballs = fireballs.filter(fireball => {
        if (fireball.x < -40 || fireball.x > canvas.width + 40) return false 
        if (fireball.y < -40 || fireball.y > canvas.height + 40) return false
        return true
    })

    return { fireballs: fireballs };
}


//-------------------------------------------------------------------------------------
// Move fireballs
export const moveFireballs = fireballs => {
    
    fireballs.forEach(fireball => {

        if (fireball.shot) {
            let dx = fireball.x - fireball.dirX;
            let dy = fireball.y - fireball.dirY;
            if (dy === 0) dy += 0.000001;
            let dist = Math.sqrt( dx*dx + dy*dy);
            fireball.data(dx, dy, dist);
        }

        fireball.move({ 
            x: (fireball.dx/fireball.dist) * 5, 
            y: (fireball.dy/fireball.dist) * 5 
        })

        
        let ratio = fireball.dx/fireball.dy;
        if(0.5 <= ratio && ratio < 2 && fireball.dx > 0 && fireball.dy > 0){ 
            fireball.direction(1);
        } else 
        
        if((-0.7 <= ratio && ratio < 0.5 && fireball.dx > 0 && fireball.dy > 0) ||
           (-0.7 <= ratio && ratio < 0.5 && fireball.dx <= 0 && fireball.dy >= 0)){ 
            fireball.direction(2);
        } else 
        
        if(-5 <= ratio && ratio < -0.7 && fireball.dx < 0 && fireball.dy > 0){ 
            fireball.direction(3);
        } else 
        
        if(-2 <= ratio && ratio < -0.5 && fireball.dx > 0 && fireball.dy < 0){ 
            fireball.direction(7);
        } else 
        
        if((-0.5 <= ratio && ratio < 0.7 && fireball.dx < 0 && fireball.dy < 0) ||
           (-0.5 <= ratio && ratio < 0.7 && fireball.dx >= 0 && fireball.dy <= 0)){ 
            fireball.direction(6);
        } else 
        
        if(0.7 <= ratio && ratio < 3 && fireball.dx < 0 && fireball.dy < 0){ 
            fireball.direction(5);
        } else

        if((-0.5 > ratio && fireball.dx < 0 && fireball.dy > 0) ||
           (3 <= ratio && fireball.dx <= 0 && fireball.dy <= 0)){ 
            fireball.direction(4);
        } else

        if((-2 > ratio && fireball.dx > 0 && fireball.dy < 0) ||
           (2 <= ratio && fireball.dx >= 0 && fireball.dy >= 0)){ 
            fireball.direction(0);
        } 
    })
}


//-------------------------------------------------------------------------------------
// Draw explosions
export const drawExplosions = (explosions, ctx) => {

    explosions.forEach(boom => {
        
        boom.spriteCycle++;
        if (boom.spriteCycle % 2 === 0) {
            boom.updateSprite();
            boom.spriteCycleReset();
        } 
        
        ctx.drawImage(
            boom.img, 
            boom.srcX, 
            boom.srcY, 
            boom.width, 
            boom.height, 
            boom.x, 
            boom.y, 
            boom.width * 0.8, 
            boom.height * 0.8
        )
    })

    explosions = explosions.filter(boom => !boom.complete);

    return {explosions: explosions}
}

//-------------------------------------------------------------------------------------
// Game Over
export const gameOver = c => {
    return (c.sprite.health !== 0)
}