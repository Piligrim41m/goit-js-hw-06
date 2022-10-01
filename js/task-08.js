const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const { email } = event.target.elements;
    const { password } = event.target.elements;
    if (email.value.length === 0 || password.value.length === 0) {
        alert('All fields must be filled')
    };
    const data = {
        email: email.value,
        password: password.value,
    }
    console.log(data)
    formRef.reset()

    // const data = {}
    // const eventForm = event.target;
    // const formData = new FormData(eventForm)
    // console.log(formData)
    // formData.forEach((value, key) => {
    //     console.log(key)
    //     data[key] = value
    // })
    // console.log(data)
}