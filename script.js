const submit = document.getElementById("submit-button");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");
const inputEmail = document.querySelector('input[type="email"]');
const errorImg = document.querySelector(".error-image");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm(e);
});

const validateForm = (e) => {
  const validRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  let inputValue = e.target[0].value;
  const isValid = validRegex.test(inputValue);
  inputEmail.classList.toggle("success", isValid);
  inputEmail.classList.toggle("error", !isValid);
  errorMessage.innerText = isValid
    ? "Your email has been submitted"
    : "Please provide a valid email";
  errorMessage.style.color = isValid ? "rgb(20, 209, 20)" : "#F96464";
  errorImg.style.display = isValid ? "none" : "block";
};
