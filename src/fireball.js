export default class Fireball {
    
    constructor(x, y, dirX, dirY){
        this.img = new Image();
        this.img.src = "sprite_sheets/fireball.png";
        this.sheetWidth = 512;
        this.sheetHeight = 512;
        this.rows = 8;
        this.cols = 8;
        this.width = this.sheetWidth / this.cols;
        this.height = this.sheetWidth / this.cols;
        this.x = x;
        this.y = y + 20;
        this.dirX = dirX;
        this.dirY = dirY;
        this.dx = 0;
        this.dy = 0;
        this.dist = 0;
        this.hitbox = {
            x: 27,
            y: 25,
            width: 22,
            height: 45,
            radius: 25
        }
        this.srcX = 0;
        this.srcY = 3 * this.height;
        this.spriteCycle = 0;
        this.currentFrame = 0;
        this.shot = true;
    }

    updateSprite() {
        this.currentFrame = ++this.currentFrame % (this.cols-1)
        this.srcX = this.currentFrame * this.width;
    }

    move(move) {
        this.x -= move.x;
        this.y -= move.y;
    }

    data(dx, dy, dist){
        this.shot = false;
        this.dx = dx;
        this.dy = dy;
        this.dist = dist;
    }

    direction(num){
        this.srcY = num * this.height
    }

}