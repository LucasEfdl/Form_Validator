function emailValidation(email){
    if(!email.match(/^[a-zA-Z0-9_]{2,}@([a-zA-Z]{2,}\.[a-zA-Z]+)$/
    )){
        const err = new Error("Email invalido");
        err.input = "email"
        throw err
    }
}

const userInput = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password")
}

document.querySelector("form").addEventListener("click", (ev) => {
    ev.preventDefault()


    try {
        userInput.name.classList.add("success")
        emailValidation(userInput.email.value);
    } catch (err) {
        
    }
})