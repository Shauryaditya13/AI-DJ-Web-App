var song=""

var LeftWristX=""
var LeftWristY=""

var RightWristX=""
var RightWristY=""



function preload() {
    song=loadSound("music.mp3");
}

function setup() {
    canvas=createCanvas(680,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getposes);
}

function modelloaded() {
    console.log("PoseNet Is Initialized");
}

function getposes(results) {
    if(results.length>0){
        console.log(results);
        LeftWristX=results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        RightWristX=results[0].pose.rightWrist.x;
        RightWristY=results[0].pose.rightWrist.y;
        console.log(LeftWristX,LeftWristY);
        console.log(RightWristX,RightWristY);
    }
}

function draw() {
    image(video,0,0,680,450);
}

function playsong() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pausesong() {
    song.pause();
}