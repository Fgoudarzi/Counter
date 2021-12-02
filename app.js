const decreaseBut = document.getElementById('dec')
const increaseBut = document.getElementById('inc')
const resetBut = document.getElementById('reset')
const countLineElement = document.getElementById('count-line')
const mainElement = document.getElementById('main')
let count = 0;
countLineElement.innerText = count;
decreaseBut.addEventListener('click', decrease)
increaseBut.addEventListener('click', increase)
resetBut.addEventListener('click', reset)

function decrease() {
    count = count - 1;
    countLineElement.innerText = count;
    setBackgroundColor();
}
function increase() {
    count = count + 1;
    countLineElement.innerText = count;
    setBackgroundColor();
}
function reset() {
    count = 0;
    countLineElement.innerText = count;
    setBackgroundColor();
}
function setBackgroundColor() {
    if (count == 0) {
        main.style.backgroundColor = 'white';
    } else if (count < 0) {
        main.style.backgroundColor = 'rgb(231, 92, 115)';
    } else {
        main.style.backgroundColor = 'rgb(82, 181, 218)';
    }

}

