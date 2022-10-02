const input = document.querySelector('#validation-input');
const style = document.querySelector('style')

input.addEventListener('blur', onBlurInput)
function onBlurInput(event) {
    
    if (input.value.length === Number(input.dataset.length)) {        
        input.classList.add('valid');  
        input.classList.remove('invalid'); 
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
//     if(input.value.length == input.dataset.length) {
//    input.setAttribute('style', 'border-color: #4caf50');
//     } else { input.setAttribute('style', 'border-color: #f44336');}
}

