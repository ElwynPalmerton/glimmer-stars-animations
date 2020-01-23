// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM


function Star() {
  this.x = random(-width / 2, width / 2);
  this.y = random(-height / 2, height / 2);
  this.r = 5;

  let c, colorString, colorNum = 0;

  this.update = function () {
    this.r = this.r + random(-1, 1);


  };

  this.changeColor = function () {
    this.color += 1;
    console.log(this.color);
    if (this.color = 255) {
      this.color = 0;
    };

  }

  this.show = function () {
    //colorString = "HSLA(" + 350 + ", 60%, 70%, .4)";

    //colorString = "HSLA(50, 60%, 70%, .4)";

    colorNum = this.color;
    c = color("HSLA(" + colorNum + ", 60%, 70%, .4)");

    fill(c); //this.color, this.color - 50, this.color + 100);

    var sx = this.x;
    var sy = this.y;

    r = this.r;

    noStroke();
    ellipse(sx, sy, r, r);

    this.pz = this.z;
  };
}