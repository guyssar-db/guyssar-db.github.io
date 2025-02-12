const keyclose = document.getElementById('keyclose');
const keyopen = document.getElementById('Keyword');
const keybg = document.getElementById('keys');

keyclose.addEventListener('click', () => {
    translateYValue += 1;
    keybg.style.display = `none`;
});
keyopen.addEventListener('click', () => {
    translateYValue += 1;
    keybg.style.display = `block`;
});