let squarePositionX = 0;
let squarePositionY = 0;
let direction;

let ourSnake = new Snake();

function setup() {
    createCanvas(420, 420);
    background(60);
    frameRate(3);
}

function draw() {
    if (!direction) { 
    } else if (direction === "right") {
        squarePositionX += 30;
    } else if (direction === "left") {
        squarePositionX -= 30;
    } else if (direction === "up") {
        squarePositionY -= 30;
    } else if (direction === "down") {
        squarePositionY += 30;
    }

    background(60);
    ourSnake.display()
    // square(squarePositionX, squarePositionY, 30);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        direction = "left";
    } 
    if (keyCode === RIGHT_ARROW) {
        direction = "right";
    } 
    if (keyCode === UP_ARROW) {
        direction = "up";
    } 
    if (keyCode === DOWN_ARROW) {
        direction = "down";
    }
}