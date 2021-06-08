const contentElems = document.querySelectorAll('.content');
const btnElems = document.querySelectorAll('.btn');
const glinder = document.querySelector('.glinder');
const tabContainer = document.querySelector('.tab-container');

const bgColors = ['orange', 'orchid', 'palegoldenrod', 'peru'];

let curTab = 0;
let curBG = bgColors[0];

contentElems.forEach((e, i) => {
    e.style.backgroundColor = bgColors[i];
});

tabContainer.addEventListener('click', (e) => {
    curTab = +e.target.dataset.index;

    contentElems.forEach((elem, idx) => {
        elem.classList.toggle('active', curTab === idx);
    });

    glinder.style.transform = `translate3d(${curTab * 100}%, 0, 0)`;
    glinder.style.backgroundColor = bgColors[curTab];
});
