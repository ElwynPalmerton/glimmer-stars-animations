// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

class Star {
  constructor(colorNum) {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.r = 10;
    this.colorNum = colorNum || 10;
  }

  update() {
    this.r = this.r + random(-1, 1);
  }

  show() {
    // colorString,

    //colorString = "HSLA(" + 350 + ", 60%, 70%, .4)";

    //colorString = "HSLA(50, 60%, 70%, .4)";


    c = color("HSLA(" + this.colorNum + ", 90%, 70%, .4)");

    fill(c); //this.color, this.color - 50, this.color + 100);

    var sx = this.x;
    var sy = this.y;

    //r = this.r;

    noStroke();
    ellipse(sx, sy, this.r, this.r);

    this.pz = this.z;
  }
}