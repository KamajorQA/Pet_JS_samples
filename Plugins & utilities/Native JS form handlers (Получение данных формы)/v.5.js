// #5: Через конструктор FormData

const form = document.forms['user-form'];

function retrieveFormValue(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());

  console.log(values);
}

form.addEventListener('submit', retrieveFormValue);

// обрати внимание, что в данном методе чекбокс и радио также возвращает
// значение 'on'. Но только в случае установленного флажка, а при его
// отсутствии этого свойства вообще не будет.
// Т.е. возвращаются только валидные значения.
