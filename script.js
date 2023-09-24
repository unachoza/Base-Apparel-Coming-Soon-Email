let containsError = false

const submit = document.getElementById("submit-button")
const form = document.querySelector("form")
const errorMessage = document.querySelector(".error-message")
const thankYouMessage = document.querySelector(".thank-you-message")
const inputEmail = document.querySelector('input[name="email"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm(e)
})

const validateForm = (e) => {
    let inputValue = e.target[0].value
    !inputValue.includes("@") ?
        containsError = true : containsError = false
    if (containsError) {
        errorMessage.style.display = "inline"; ""
        inputEmail.classList.add("error")
    } else {
        errorMessage.style.display = "none";
        inputEmail.classList.remove("error")
        thankYouMessage.style.display = "inline";
        form.style.display = "none"
    }
}

