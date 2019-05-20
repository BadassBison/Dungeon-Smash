export default class BaldGuy {

    constructor() {
        this.img = new Image();
        this.img.src = 'sprite_sheets/bald_guy.png';
        this.sheetWidth = 576;
        this.sheetHeight = 256;
        this.cols = 9;
        this.rows = 4;
        this.width = this.sheetWidth / this.cols;
        this.height = (this.sheetHeight / this.rows) + 1;
        this.hitbox = {
            x: 44.5,
            y: 75,
            width: 27,
            height: 24,
            radius: 15
        }
        this.health = 100;
        this.srcX = 0;
        this.srcY = 2 * this.height;
        this.currentFrame = 1;
    }

    updateSprite() {
        this.currentFrame = (++this.currentFrame % (this.cols-1)) + 1
        this.srcX = this.currentFrame * this.width;
    }

    hit() {
        if (this.health > 0) this.health -= 2;
        if (this.health < 2) this.health = 0;
    }

    heal() {
        if (this.health > 0 && this.health < 100) this.health += 0.03;
    }

    fullHealth() {
        this.health = 100;
    }

}