window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("splash").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("splash").style.display = "none";
            document.getElementById("app").style.display = "block";
        }, 800);

    }, 2500); // intro duration
});
const video = document.getElementById("video");
const fileInput = document.getElementById("fileInput");

let brightness = 100;
video.addEventListener("loadedmetadata", () => {
    console.log("Video Loaded");
});
accept="video/mp4"

fileInput.addEventListener("change", function() {

    const file = this.files[0];

    if(file){

        const url = URL.createObjectURL(file);

        console.log(url);

        video.src = url;

        video.load();

        video.play();
    }
});

function playPause(){

    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}

function forward(){
    video.currentTime += 10;
}

function backward(){
    video.currentTime -= 10;
}

function volUp(){

    if(video.volume < 1){
        video.volume += 0.1;
    }
}

function volDown(){

    if(video.volume > 0){
        video.volume -= 0.1;
    }
}

function brightUp(){

    brightness += 10;

    video.style.filter =
    `brightness(${brightness}%)`;
}

function brightDown(){

    brightness -= 10;

    video.style.filter =
    `brightness(${brightness}%)`;
}
console.log("MEDIA PLAYER Loaded");
window.addEventListener("load", () => {
    const intro = document.getElementById("introSound");

    intro.volume = 0.8;

    setTimeout(() => {
        intro.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });
    }, 300);
});
document.addEventListener("click", () => {
    document.getElementById("introSound").play();
}, { once: true });