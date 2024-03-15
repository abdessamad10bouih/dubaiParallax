let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('khalifa');
let stars = document.getElementById('stars');
let building = document.getElementById('building');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    khalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 0.5 + 'px';
})