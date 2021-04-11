// Import stylesheets
import "./style.css";

// Write Javascript code here!
const items = document.querySelectorAll('details');

document.body.addEventListener('click', function(e) {
    const target = e.target;

    if (target.nodeName !== 'P' && target.nodeName !== 'SUMMARY') {
        items.forEach((elem) => {
            elem.removeAttribute('open');
        })
    }

    items.forEach((elem) => {
        if (elem !== target.parentElement) {
            elem.removeAttribute('open');
        }
    })
});