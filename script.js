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
    video.style.filter = "none";
}
console.log("CineFlow Loaded");
const video = document.getElementById("video");
const fileInput = document.getElementById("fileInput");

// Store different quality sources
let sources = {
    "360": null,
    "720": null,
    "1080": null
};

// Load file (same file used here, but in real system you should have different encodes)
fileInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const url = URL.createObjectURL(file);

        // For demo: same file assigned to all qualities
        sources["360"] = url;
        sources["720"] = url;
        sources["1080"] = url;

        setQuality("720"); // default play
    }
});

// Quality switcher
function setQuality(q) {
    if (!sources[q]) {
        alert("This quality not available");
        return;
    }

    const currentTime = video.currentTime;
    const isPaused = video.paused;

    video.src = sources[q];
    video.load();

    video.onloadedmetadata = () => {
        video.currentTime = currentTime;
        if (!isPaused) video.play();
    };

    console.log("Quality switched to:", q);
}
function fullScreen(){
    const video = document.getElementById("video");
    video.requestFullscreen?.();
}
video.addEventListener("error", () => {
    console.log("Video failed to load - codec or file issue");
});
if (!video.canPlayType('video/mp4; codecs="hvc1"')) {
    console.log("HEVC not supported - use H.264 version");
}