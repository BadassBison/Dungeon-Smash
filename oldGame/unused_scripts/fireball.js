export default class Fireball {
    constructor(x, y, ctx){
        this.spriteSheet = new Image();
        this.spriteSheet.src = "fireball.png";
        this.sheetWidth = 512;
        this.sheetHeight = 512;
        this.rows = 8;
        this.cols = 8;
        this.width = this.sheetWidth / this.cols;
        this.height = this.sheetWidth / this.cols;
        this.x = x;
        this.y = y;
        this.srcX;
        this.srcY = 0;
        this.speed = 10;
        this.spriteCycle = 0;
        this.create = this.create.bind(this);
        this.create(ctx);
    }

    create(ctx) {
        ctx.drawImage(this.spriteSheet, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height)
        window.requestAnimationFrame(this.create);
    }

}