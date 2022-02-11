var song=""

var LeftWristX=""
var LeftWristY=""

var RightWristX=""
var RightWristY=""

var LeftWristScore=""
var RightWristScore=""


function preload() {
    song=loadSound("music.mp3");
}

function setup() {
    canvas=createCanvas(680,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(680,450)
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
        LeftWristScore=results[0].pose.keypoints[9].score;
        RightWristScore=results[0].pose.keypoints[10].score;
    }
}

function draw() {
    image(video,0,0,680,450);
    fill("blue");
    stroke("yellow");
    if(LeftWristScore>0.2) {
        circle(LeftWristX,LeftWristY,20);
        NumberY=Number(LeftWristY);
        RemoveDecimals=floor(NumberY);
        Volume=(RemoveDecimals/450).toFixed(2);
        song.setVolume(Number(Volume));
        document.getElementById("volume").innerHTML="volume:"+Volume;
    }

    if(RightWristScore>0.2) {
        circle(RightWristX,RightWristY,20);
        if(RightWristY>0&&RightWristY<=90) {
            song.rate(0.5);
            document.getElementById("speed").innerHTML="speed:0.5x";
        }
        if(RightWristY>90&&RightWristY<=180) {
            song.rate(1);
            document.getElementById("speed").innerHTML="speed:1x";
        }
        if(RightWristY>180&&RightWristY<=270) {
            song.rate(1.5);
            document.getElementById("speed").innerHTML="speed:1.5x";
        }
        if(RightWristY>270&&RightWristY<=360) {
            song.rate(2);
            document.getElementById("speed").innerHTML="speed:2x";
        }
        if(RightWristY>360&&RightWristY<=450) {
            song.rate(2.5);
            document.getElementById("speed").innerHTML="speed:2.5x";
        }
    }
}

function playsong() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pausesong() {
    song.pause();
}

