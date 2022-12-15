function setup() {
  createCanvas(800, 500);
}

let x = 100;
let y = 100;
let gravity = 0.1;
let yV = 0;

function draw() {
  background(153, 169, 205);
  stroke(156, 29, 43);
  strokeWeight(2);
  fill(236, 237, 231);
  ellipse(x, y, 20 * 2);
  x++;
  if (yV < 0) {
    yV += gravity * 10;
  }
  if (yV >= 0) {
    yV += gravity;
  }
  y += yV;
}

function keyPressed() {
  //отслеживаем нажатие на пробел
  if (keyCode === 32) {
    yV = -10;
  }
}
