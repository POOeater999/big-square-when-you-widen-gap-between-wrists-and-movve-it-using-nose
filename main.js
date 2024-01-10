
 


leftWristX=0
rightWristX=0
noseX=0
noseY=0
difference=0

function setup() {
    video = createCapture(VIDEO)
    video.size(900,550)
    canvas = createCanvas(550,550)
    canvas.position(1000,)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
   
}

function gotPoses(results) {

    if(results.length > 0) {
        console.log(results) ;
        noseX = results[0].pose.nose.x - 250
        noseY = results[0].pose.nose.y - 80
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = Math.floor(leftWristX-rightWristX) ;
    }

}

function modelLoaded() {
    console.log("Model Loaded")
}

function draw() {
    background("#8297d6")
    fill("#65fb55")
    stroke("#65fb55")
    square(noseX,noseY,difference)
    document.getElementById("square_size").innerHTML = "The Height and Width of the square is - " + difference + "px"
}

