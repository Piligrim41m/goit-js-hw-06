const input = document.querySelector('#name-input');
const elementSpanText = document.querySelector('#name-output');
input.addEventListener('input', event => {
    if (input.value.length === 0) {
        elementSpanText.textContent = 'Anonymous';
    } else 
    {elementSpanText.textContent = input.value;}
});

