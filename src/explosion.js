export default class Explosion {
    
    constructor(x, y){
        this.img = new Image();
        this.img.src = "sprite_sheets/explosion.png";
        this.sheetWidth = 780;
        this.sheetHeight = 910;
        this.rows = 7;
        this.cols = 6;
        this.width = this.sheetWidth / this.cols;
        this.height = this.sheetWidth / this.cols;
        this.x = x;
        this.y = y;
        this.currentFrame = 0;
        this.yFrame = 0;
        this.srcX = 0;
        this.srcY = 0;
        this.spriteCycle = 0;
        this.complete = false;
    }

    updateSprite() {
        
        if (this.currentFrame < this.cols - 1) {
            // console
            this.currentFrame = ++this.currentFrame;
            this.srcX = this.currentFrame * this.width;
        } else {
            this.yFrame++;
            this.srcY = this.yFrame * this.height;
            this.currentFrame = 0;
            this.srcX = this.currentFrame * this.width;
        }
      
        if(this.yFrame >= this.rows) this.complete = true;
    }

    spriteCycleReset() {
        this.spriteCycle = 0;
    }

}