// #6: Через цикл for...of

// снова нужна проверка на тип поля для радио и чекбоксов
const isCheckboxOrRadio = (type) => ['checkbox', 'radio'].includes(type)

// тут также нужна проверка на наличие name у поля, чтобы отбросить кнопки

const form = document.forms['user-form']


function retrieveFormValue(event) {
    event.preventDefault();

    const values = {};

    for (let field of form) {
        const {name} = field;

        if (name) {
            const {type, checked, value} = field;

            values[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    }

    console.log(values);
}

form.addEventListener("submit", retrieveFormValue);


