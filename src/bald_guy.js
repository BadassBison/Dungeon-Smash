export default class BaldGuy {

    constructor() {
        this.sprite = new Image();
        this.sprite.src = '../sprite_sheets/bald_guy.png';
        this.sheetWidth = 576;
        this.sheetHeight = 256;
        this.cols = 9;
        this.rows = 4;
        this.width = this.sheetWidth / this.cols;
        this.height = (this.sheetHeight / this.rows) + 1;
        this.hitbox = {
            x: 27,
            y: 25,
            width: 22,
            height: 45
        }
        // this.ctx = ctx;
    }

}