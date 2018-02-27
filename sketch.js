var col = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
};
function setup() {
    createCanvas(1000, 900);
    frameRate(3);
}

function draw() {  
    for (var i = 0; i < width; i++) {
        var r = random(255);
        var g = random(255);
        var b = random(255);
        stroke(r, g, b);
        strokeWeight(r);
        ellipse(20, 20, i, i);
    
}
    ellipse(mouseX, mouseY, 50, 50);
    fill(200, 200, 150);
}