const input = document.querySelector('#name-input');
const elementSpanText = document.querySelector('#name-output');
input.addEventListener('input', event => {
    elementSpanText.textContent = input.value;
});

