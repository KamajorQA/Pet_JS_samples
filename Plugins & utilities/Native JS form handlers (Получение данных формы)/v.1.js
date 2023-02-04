// #1: Найти каждое поле через селектор

const form = document.querySelector('#user-form');

function retrieveFormValue(event) {
  event.preventDefault();

  const id = form.querySelector('[name="id"]'),
    age = form.querySelector('[name="age"]'),
    name = form.querySelector('[name="name"]'),
    rate = form.querySelector('[name="rate"]'),
    description = form.querySelector('[name="description"]'),
    favorite = form.querySelector('[name="favorite"]'),
    img_link = form.querySelector('[type="url"]');

  const values = {
    id: id.value,
    age: age.value,
    name: name.value,
    rate: rate.value,
    description: description.value,
    favorite: favorite.checked,
    img_link: img_link.value,
  };
  console.log('ver.1', values);
}

form.addEventListener('submit', retrieveFormValue);
