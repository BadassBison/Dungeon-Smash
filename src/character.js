import Skeleton from './skeleton.js';
import BaldGuy from './bald_guy.js';

export default class Character {

    static sprites(sprite) {
        switch(sprite) {
            case "skeleton": 
                return new Skeleton;

            case "bald guy":
                return new BaldGuy;
        }
    }
    
    constructor( sprite, x, y ) {
        this.sprite = Character.sprites(sprite);
        this.x = x;
        this.y = y;
        this.defaultSpeed = 3;
        this.speedX = this.defaultSpeed;
        this.speedY = this.defaultSpeed;
        this.direction = "stand";
    }

    directionMove() {
        this.direction = "move";
    }

    directionStand() {
        this.direction = "stand";
    }

    changeDirection(dir){
        this.direction = dir;
    }

    move(move) {
        this.x -= move.x;
        this.y -= move.y;
    }

    bump(dx, dy){
        let val = setInterval(() => {
            this.x += dx;
            this.y += dy;
        }, 50);
        setTimeout(() => {
            clearInterval(val);
        }, 150);
    }
        
}