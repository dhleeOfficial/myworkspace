const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');

const colors = [
    'deepskyblue', 'orange', 'black', 'green', 'gold', 'magenta', 'darkblue'
];

const linkArray = Array.from(links);

for (const link of linkArray) {
    link.addEventListener('click', e => e.preventDefault());
    link.addEventListener('mouseenter', mouseEnterFunc);
}

function mouseEnterFunc() {
    if (!this.parentNode.classList.contains('active')) {
        for (const link of linkArray) {
            link.parentNode.classList.remove('active');
            link.style.opacity = '0.25';
        }
    }
    this.parentNode.classList.add('active');
    this.style.opacity = '1';

    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left + window.pageXOffset;
    const top = this.getBoundingClientRect().top + window.pageYOffset;
    const color = ~~(Math.random() * linkArray.length);

    console.log(color);

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.top = `${top}px`;
    target.style.left = `${left}px`;
    target.style.borderColor = colors[color];
}

function resizeFunc() {
    //active가 있는 메뉴에 위치를 다시 잡아야 한다.
    const active = document.querySelector('.mynav li.active');

    if (active) {
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
    }
}

window.addEventListener('resize', resizeFunc);