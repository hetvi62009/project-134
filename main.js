function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects"
}

img = "";
status = "";
objects = [];
function preload(){
    img = loadImage('park.jpg');

}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotresult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);

    }
    console.log(results);
    objects = results;
}
function draw(){
    image(img,0 , 0, 640, 420);
    if(status !="")
    {
    
    }
}