// вспомогательная функция отрисовки данных на странице,
// используя получаемую из fetch-запроса dat'у
function renderRates(data) {
  // вытаскиваем нужные валюты и округляем до 2 знаков после запятой
  const usdRate = data.Valute.USD.Value.toFixed(2);
  const eurRate = data.Valute.EUR.Value.toFixed(2);

  // находим целевые DOM-элементы
  const usdElement = document.querySelector('#usd');
  const eurElement = document.querySelector('#eur');
  // записываем в них полученные значения
  usdElement.innerText = usdRate;
  eurElement.innerText = eurRate;
}

// вариант обработки fetch-запроса через цепочку then

// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//   .then((response) => response.json())
//   .then((data) => renderRates(data))
//   .catch(console.log('Some server error occured'));

// вариант обработки через asyns/await

async function getExchangeRates() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  renderRates(data);
  return data;
}

getExchangeRates();
