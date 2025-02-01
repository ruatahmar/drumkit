window.addEventListener("keydown",function(e){

    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let keyPressed=this.document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio || !keyPressed) return;
    audio.currentTime=0;
    keyPressed.classList.add("playing");
    audio.play();

    
});
let keys=document.querySelectorAll(".button");
keys.forEach(function(key){
    key.addEventListener("transitionend",function(e){
        if(e.propertyName!=="transform") return;
        key.classList.remove("playing");
        console.log(e);
    });
});