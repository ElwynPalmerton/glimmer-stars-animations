// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

//Stars 2

let stars = []
let speed;
let x;

function setup() {
  createCanvas(windowWidth, windowHeight); //screenWidth, screenHeight);
  // fullScreen(true);
  for (let i = 0; i < 10; i++) {
    stars[i] = new Star();
  };
}

function draw() {
  speed = 10;
  background(20, 20, 50);
  translate(width / 2, height / 2);


  for (let i = 0; i < stars.length; i++) {
    stars[i].update()
    stars[i].changeColor();
    stars[i].show();
    // star[i].setColor();

  }



}