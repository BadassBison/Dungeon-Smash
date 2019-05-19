export default class Sound {

    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.setAttribute("class", "sound");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound); 
    }
    
    play (){
        this.sound.play();
    }

    // this.stop = function(){
    //     this.sound.pause();
    // }    
}