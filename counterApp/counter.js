let counter = document.getElementById('counter');

counter.innerText = 0;

let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');
let resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => { counter.innerText = parseInt(counter.innerText) + 1; updateCounterColor() });
decreaseBtn.addEventListener('click', () => { counter.innerText = parseInt(counter.innerText) - 1; updateCounterColor() });
resetBtn.addEventListener('click', () => { counter.innerText = 0; updateCounterColor() });
function updateCounterColor() {
    counter.style.color = counter.innerText == 0 ? 'black' : counter.innerText > 0 ? 'green' : 'red';
}
