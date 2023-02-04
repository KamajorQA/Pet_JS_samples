// #2: Найти все поля одним селектором

const form = document.querySelector("#user-form");

// isCheckboxOrRadio - вспомогательная функция для проверки типов
// элементов на чекбокс и радио-кнопку. Нужна, чтобы при переборе полей
// полученной формы в цикле forEach (куда залетает каждый элемент формы)
// в случае если это чекбокс или радиокнопка в 'name' записывалось не
// значение 'value' (как у прочих полей, у которых 'value' при отправке
// содержит введенные данные; в отличие от них для чекбокса и радио
// там всегда будет значение 'on'), а булевое значение свойства 'checked')
function isCheckboxOrRadio(type) {
    if (['checkbox', 'radio'].includes(type))
    return true;
};

function retrieveFormValue(event) {
    event.preventDefault();

    const fields = document.querySelectorAll('input, select, textarea');
    const values = {};

    fields.forEach(field => {
        const {name, value, type, checked} = field;
        values[name] = isCheckboxOrRadio(type) ? checked : value;
    });

    console.log(values);
}

form.addEventListener("submit", retrieveFormValue);
