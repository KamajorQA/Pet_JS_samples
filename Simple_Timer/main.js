// Секундомер

let clockFace = document.querySelector(".counter");

// Старт
let buttonStart = document.querySelector("#start");

let timerID;
let counter = 0;

let startTimer = function () {
    timerID = setInterval(function () {
      counter++;
      clockFace.innerText = counter;
      clockFace.style.backgroundImage = getGradient();
    }, 1000);
};

function disableBtn () {
    buttonStart.setAttribute('disabled', "disabled");
    buttonPause.removeAttribute('disabled');
    buttonReset.removeAttribute('disabled');
    buttonStart.classList.add("pulse");
    setTimeout(() => {
        buttonStart.classList.remove("pulse");
    }, 800);
}

buttonStart.addEventListener('click', startTimer);
buttonStart.addEventListener('click', disableBtn)

// Пауза
let buttonPause = document.querySelector('#pause');
buttonPause.addEventListener('click', () => {
    clearInterval(timerID);
    buttonStart.removeAttribute('disabled');
    buttonPause.setAttribute('disabled', "disabled");
    buttonPause.classList.add("pulse");
    setTimeout(() => {
        buttonPause.classList.remove("pulse");
    }, 800);
})

// Сброс
let buttonReset = document.querySelector('#reset');
buttonReset.addEventListener('click', () => {
    counter = 0;
    clockFace.innerText = 0;
    buttonReset.classList.add("pulse");
    setTimeout(() => {
        buttonReset.classList.remove("pulse");
    }, 800);
})