function emailValidation(email){
    if(!email.match(/[a-zA-Z0-9_]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/
    )){
        const err = new Error("Email invalido");
        err.input = "email"
        throw err
    }
}

function passwordValidation(password){
    if (
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/[0-9]/) ||
        !password.match(/^[a-zA-Z0-9\s]/)
        ) {
            const err = new Error("Senha invalida.")
            err.input = "password";
            throw err;
    }
}


//por que eu não posso pasar o "userInput" como parametro dessa função?
function resetFormStyles(){
    Object.entries(userInput).forEach(([key, value]) => {
        value.classList.remove("error")
        document.getElementById(`${key}-error`).textContent = ""
    });
}

const userInput = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password")
}

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    
    resetFormStyles();
    //como posso fazer para lançar os dois erros de uma vez?
    try {
        userInput.name.classList.add("success")
        emailValidation(userInput.email.value);
        userInput.email.classList.add("success")
        passwordValidation(userInput.password.value);
        userInput.password.classList.add("success");
    } catch (err) {
        userInput[err.input].classList.add("error")
        document.getElementById(`${err.input}-error`).textContent = err.message
    }
})