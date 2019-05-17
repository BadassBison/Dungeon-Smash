import Skeleton from './skeleton.js';
import BaldGuy from './bald_guy.js';

export default class Character {

    constructor( sprite, x, y ) {
        this.sprite = Character.sprites(sprite);
        this.x = x;
        this.y = y;
    }

    static sprites(sprite) {
        
        switch(sprite) {
            case "skeleton": 
                return new Skeleton;

            case "bald guy":
                return new BaldGuy;
        }
    }

}