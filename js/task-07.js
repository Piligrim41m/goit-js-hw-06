const inputRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text')

inputRef.addEventListener('input', event => {
    console.log(event.target.value)
    spanRef.style = `font-size: ${event.target.value}px`
     // spanRef.setAttribute('style', `font-size: ${event.target.value}px`)
});