const timeEl = document.querySelector('.time');
let time = 0;

const timer = setInterval(() => {
    time += 1;
    timeEl.textContent = time;

    if (time === 10) clearInterval(timer);
}, 1000);

const input = document.querySelector('.input-txt');
const result = document.querySelector('#result');

input.addEventListener('input', (e) => {
    result.textContent = e.target.value;
});