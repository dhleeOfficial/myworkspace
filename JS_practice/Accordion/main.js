const pq = document.querySelectorAll('.panel-question');
const allBtn = document.querySelector('#btn-collapse');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    const target = e.target;

    if (target === allBtn) {
        pq.forEach(e => {
            e.classList.remove('active');
        })
    } else {
        target.parentNode.classList.toggle('active');
    }
});
