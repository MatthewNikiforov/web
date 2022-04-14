const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', () => {
    const email = document.getElementById('inputEmail')
    const password = document.getElementById('inputPassword')
    if (email.value != '' && password.value != '') {
        alert('You have submitted the login!')
    } else {
        alert('Enter the inputs!')
    }
})
