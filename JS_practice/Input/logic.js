const formElement = document.querySelector('.input-form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const ageInput = document.querySelector('#age');
const list = document.querySelector('.list');

let _name = '';
let _phone = '';
let _age = '';

formElement.addEventListener('submit', (e) => {
    _name = nameInput.value;
    _phone = phoneInput.value;
    _age = ageInput.value;

    let str = list.innerHTML;

    str += `<li>
                <div>
                    ${_name}, ${_phone}, ${_age}
                </div>
            </li>`;
    list.innerHTML = str;

    e.preventDefault();
});

