// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

//Stars 2

let stars = [];
let stars2 = [];
let speed;
let x;
let c;
let colorNum = 180;
let qty = 200;

function setup() {
  createCanvas(windowWidth, windowHeight); //screenWidth, screenHeight);
  // fullScreen(true);
  for (let i = 0; i < qty; i++) {
    stars[i] = new Star();
  }
  for (let i = 0; i < qty; i++) {
    stars2[i] = new Star(107);
  }
}

function draw() {
  speed = 10;
  background(40, 20, 50);
  translate(width / 2, height / 2);

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
    stars2[i].update();
    stars2[i].show();
    // star[i].setColor();
  }
}