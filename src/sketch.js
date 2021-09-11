let img;
let myFont;

function preload() {
    myFont = loadFont('src/NotoSansJP-Black.otf');
}

function setup() {
    createCanvas(500, 500, WEBGL);
    img = loadImage('https://swe3t.github.io/Just-wait-a-sec/src/queroVenderMinhaArte.png');
    textFont(myFont);
    textSize(width / 3);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(0);

    text('吉', 0, 0);


    let locX = mouseX;
    let locY = mouseY;

    ambientLight(255, 255, 255);
    //pointLight(255, 255, 255, locX, locY, 100);

    push();
    rotateZ(frameCount * 0.001);
    rotateX(locX * 0.005);
    rotateY(locY * 0.005);
    box(200);
    pop();
}

