const login = document.getElementById('login')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages = []
    if(login.value === '' || login.value === null) {
        messages.push("A Login Information is required.")
    }
    else if(login.value === '' || login.value === null) {
        messages.push("A Login Information is required.")
    }
    e.preventDefault()
})