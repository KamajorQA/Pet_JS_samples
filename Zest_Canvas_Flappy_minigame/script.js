function setup() {
  createCanvas(800, 500);
}

let x = 0;
let y = 100;
let gravity = 0.1; // скорость падения тела (сила тяжести)
let yV = 0;
let birdRadius = 10; // радиус игрового тела (круга)
let arcHeight = 80; // высота отверстия между препятствиями
let arrObstacle = [randomInteger(30, 500 - 70 - arcHeight)]; // массив с высотой препятствий (координата по оси y)
let arrX = [0]; // массив со счетчиком созданных препятствий и их координатой по оси x

let obstacleWidth = 10; // ширина препятствия

let gameInProgress = true;

function draw() {
  if (gameInProgress) {
    checkScreen();
    checkObstacle();
    background(153, 169, 205); // отрисовка фона с заданием ему цвета в rgb
    drawBird(); // вызов коллбэк функции для отрисовки игрового тела
    if (x % 100 == 0) {
      arrX.push(x - 100 * arrX.length); // изменение координаты по x оси, а ниже - по y
      arrObstacle.push(randomInteger(30, 500 - 70 - arcHeight)); // координата левого верхнего угла для верхнего препятствия и правого нижнего - для нижнего
    }
    for (let i = 0; i < arrX.length; i++) {
      drawRect(arrX[i], arrObstacle[i]); // вызов callback функции для отрисовки препятствий
    }
  }
}

// функция отрисовки самого игрового тела
const drawBird = () => {
  stroke(156, 29, 43);
  strokeWeight(2);
  fill(236, 237, 231);
  ellipse(400, y, birdRadius * 2);

  x++;
  for (let i = 0; i < arrX.length; i++) {
    arrX[i]++; // скорость движения препятствий (увеличение значения x-координаты препятсвия)
  }
  if (yV < 0) {
    yV += gravity * 10; // изменение скорости падения тела
  }
  if (yV >= 0) {
    yV += gravity;
  }
  y += yV * 1; // задается высота прыжка
};

function keyPressed() {
  //отслеживаем нажатие на пробел, arrowUp или W
  if (keyCode === 32 || keyCode === 38 || keyCode === 87) {
    yV = -10; // изменяем ускорение падения (и следовательно положение y-координаты)
  }
  //отслеживаем нажатие на клавижу R
  if (keyCode === 82) {
    window.location.reload(); // делаем рестарт игры (перезагрузку страницы)
  }
}

// функция отрисовки препятствий
const drawRect = function (w, h) {
  rectMode(CORNERS); // отрисовка прямоугольника по углам (позиция углов задана в rect())
  stroke(50, 43, 38); // цвет контура прямоугольника в rgb
  strokeWeight(2); // толщина обводки контура фигуры
  fill(148, 119, 95); // цвет заливки прямоугольника в rgb
  rect(800 - obstacleWidth - w, 0, 800 - w, h); // отрисовка верхнего препятствия
  rect(800 - obstacleWidth - w, h + arcHeight, 800 - w, 500); // отрисовка верхнего препятствия
};

// вспомогательная функция получения случайного числа
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
// функция проверки пересечения телом границы экрана
function checkScreen() {
  if (y >= 500) {
    // проверка пересечения нижней границы Canvas'а
    gameInProgress = false;
  }
  if (y < 0) {
    // проверка пересечения верхней границы Canvas'а
    gameInProgress = false;
  }
}

// функция проверка касания телом препятствия
function checkObstacle() {
  for (let i = 0; i < arrX.length; i++) {
    // проверка достижения каждым препятствием координаты x = 400 +- ширина препятствия
    if (
      arrX[i] <= 400 + birdRadius &&
      arrX[i] >= 400 - obstacleWidth - birdRadius
    ) {
      if (
        y < arrObstacle[i] + birdRadius ||
        y > arrObstacle[i] + arcHeight - birdRadius
      ) {
        // проверка совпадения y-координаты тела и препятствия
        gameInProgress = false;
      }
    }
  }
}
