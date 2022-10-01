let counterValue = 0;
const elementValue = document.querySelector('#value');
elementValue.textContent = counterValue;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', (event) => {
    elementValue.textContent = elementValue.textContent -1
});

incrementBtn.addEventListener('click', (event) => {
    elementValue.textContent = Number(elementValue.textContent) +1;
});
