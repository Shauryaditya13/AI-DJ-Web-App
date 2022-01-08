song=""

function preload() {
    song=loadSound("music.mp3");
}

function setup() {
    canvas=createCanvas(680,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,680,450);
}

function playsong() {
    song.play();
    song.setVolume(1)
    song.rate(1)
}

function pausesong() {
    song.pause();
}