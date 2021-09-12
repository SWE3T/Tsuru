let img;
let myFont;

function preload() {
    myFont = loadFont('src/NotoSansJP-Medium.otf');
    tsuru = loadModel('src/tsuru.obj');
}

function setup() {
    createCanvas(500, 500, WEBGL);
    img = loadImage('https://swe3t.github.io/Just-wait-a-sec/src/queroVenderMinhaArte.png');
    textFont(myFont);
    textSize(height / 4);
    textAlign(CENTER, CENTER);
}

function draw() {
    if (frameCount % 3 == 0) {
        text('吉', random(-width, width), random(-height, height));
    }


    let locX = mouseX;
    let locY = mouseY;

    ambientLight(255, 255, 255);
    pointLight(255, 255, 255, locX, locY, 100);

    push();
    rotateZ(frameCount * 0.001);
    rotateX(locX * 0.005);
    rotateY(locY * 0.005);

    scale(50);

    model(tsuru);
    pop();
}

