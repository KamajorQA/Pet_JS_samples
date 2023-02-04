// #4: Получить из свойства elements формы

const form = document.forms['user-form'];

// снова нужна проверка на тип поля для радио и чекбоксов
const isCheckboxOrRadio = (type) => ['checkbox', 'radio'].includes(type);

// форма среди своих свойств помимо полей формы имеет свойство elements
// elements - содержит коллекцию элементов формы
// в коллецию элементов также попадают кнопки (они тоже элементы формы),
// поэтому можно использовать проверку на наличие атрибута name,
// чтобы отбросить кнопки (у которых нет name)

function retrieveFormValue(event) {
  event.preventDefault();

  const { elements } = form;
  const values = {};

  for (let i = 0; i < elements.length; i++) {
    const formElement = elements[i];
    const { name } = formElement;

    if (name) {
      const { value, type, checked } = formElement;

      values[name] = isCheckboxOrRadio(type) ? checked : value;
    }
  }

  console.log(values);
}

form.addEventListener('submit', retrieveFormValue);
