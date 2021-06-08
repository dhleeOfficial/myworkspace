const topBtn = document.querySelector('#back-to-top');
const docElem = document.documentElement;
let offset;
let scrollPos;
let docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 'undefined') offset = docHeight / 4;

window.addEventListener('scroll', (e) => {
    scrollPos = docElem.scrollTop;

    topBtn.className = (scrollPos > offset) ? 'visible' : '';
});

topBtn.addEventListener('click', (e) => {
    e.preventDefault();

    scrollToTop();
});

function scrollToTop() {
    const scrollInterval = setInterval(() => {
        if (scrollPos !== 0) window.scrollBy(0, -55);
        else clearInterval(scrollInterval);
    }, 15);
}