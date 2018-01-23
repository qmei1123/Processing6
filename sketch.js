var widthX;
var heightY;
var speed = 1;
var circleX = 0;
var circleY = 300;
var col = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
};
function setup() {
    createCanvas(1000, 900);
    frameRate(1);
}

function draw() {  
    for (var i = 0; i < width; i++) {
        var r = random(255);
        var g = random(255);
        var b = random(255);
        stroke(r, g, b);
        strokeWeight(r);
        line(i, 0, i, height);
}
}
