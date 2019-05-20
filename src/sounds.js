export default class Sound {

    constructor(src) {
        this.sound = new Audio(src);
        this.sound.volume = 0.3;
    }
    
    play (){
        this.sound.play();
    }
}