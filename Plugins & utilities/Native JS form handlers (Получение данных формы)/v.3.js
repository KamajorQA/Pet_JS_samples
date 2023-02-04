// #3: Получить из HTML элемента формы по ключам name

// document.forms возвращает HTML-коллекцию всех элементов
// в полученном псевдомассиве к каждой форме можно обратиться по:
// а) ее индексу в массиве
// б) атрибуту name, при его наличии (у меня в форме его сейчас нет)
// в) id. При нормальном id (без дефисов) можно просто обратиться сразу
// по нему, например, let {formID} = document.forms и получить форму в
// переменной formID. При наличии же дефиса требуется заключение id в
// кавычки + задание название переменной (в моем случае - 'myForm')
// соответствие ID (вообще свойства) переменной указывается через двоеточие
// в итоге форма с id 'user-form' записана в переменную myForm.
const { 'user-form': myForm } = document.forms;

// как вариант можно было бы напрямую получить форму через доступ
// к свойству глобального объекта document.forms по соответствующему
// ключу :   document.forms['user-form']

// доступ к конкретному полю и его значению также можно получить
// напрямую при обращении к свойствам через dotNotation:
// document.forms['user-form'].age  - получаем поле возраста (элемент
// формы с атрибутом name = "age")
// document.forms['user-form'].age.value - получаем значение input
// элемента формы с атрибутом name="age"
// таким образом не нужно искать форму и ее элементы в HTML-документе

function retrieveFormValue(event) {
  event.preventDefault();

  const { id, age, name, rate, description, favorite, img_link } = myForm;

  const values = {
    id: id.value,
    age: age.value,
    name: name.value,
    rate: rate.value,
    description: description.value,
    favorite: favorite.checked,
    img_link: img_link.value,
  };

  console.log(values);
}

myForm.addEventListener('submit', retrieveFormValue);
