function setup() {
  createCanvas(800, 500);
}

let x = 100;
let y = 100;
let gravity = 0.1; // скорость падения тела
let yV = 0;

let y1 = randomInteger(30, 400); // координата левого верхнего угла для верхнего препятствия и правого нижнего - для нижнего
let height = 70; // высота отверстия между препятствиями

function draw() {
  background(153, 169, 205); // отрисовка фона с заданием ему цвета в rgb
  drawBird(); // вызов коллбэк функции для отрисовки игрового тела
  drawRect(); // вызов callback функции для отрисовки препятствий

  x++;
  if (yV < 0) {
    yV += gravity * 10;
  }
  if (yV >= 0) {
    yV += gravity;
  }
  y += yV;
}

// функция отрисовки самого игрового тела
const drawBird = () => {
  stroke(156, 29, 43);
  strokeWeight(2);
  fill(236, 237, 231);
  ellipse(x, y, 10 * 2);
};

function keyPressed() {
  //отслеживаем нажатие на пробел
  if (keyCode === 32) {
    yV = -10;
  }
}

// функция отрисовки препятствий
const drawRect = function () {
  rectMode(CORNERS); // отрисовка прямоугольника по углам (позиция углов задана в rect())
  stroke(156, 29, 43); // цвет заливки прямоугольника в rgb
  strokeWeight(2); // толщина обводки контура фигуры
  fill(236, 237, 231);
  rect(50, 0, 70, y1); // отрисовка верхнего препятствия
  rect(50, y1 + height, 70, 500); // отрисовка верхнего препятствия
};

// вспомогательная функция получения случайного числа
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
