const form = document.querySelector("form")
const email = document.getElementById("email")
const error = document.getElementById("error-msg")
const userInput = document.getElementById("comment");
const logElement = document.getElementById("info-msg");
const nameInput = document.getElementById("name");
const nameRegex = /^[A-Za-z]+$/;
let form_errors = [];


nameInput.addEventListener("input", (event) => {
    if (!nameRegex.test(nameInput.value)) {
        error.style.display = "block";
        error.textContent = "You have typed an illegal character";
        nameInput.classList.add("invalid-input")
        form_errors.push("Invalid character in name");
        setTimeout(() => {
            error.textContent = "";
            nameInput.classList.remove("invalid-input")
        }, 2000);

    }
});
email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        error.textContent = " ";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if (!nameInput.validity.valid) {
        showError();
        event.preventDefault();
    }
    else if (email.validity.typeMismatch) {
        error.textContent = "Entered value needs to be an email address";
        email.classList.add("invalid-input")
        form_errors.push("Email format not valid");
        event.preventDefault();
        setTimeout(() => {
            error.textContent = "";
            email.classList.remove("invalid-input")
        }, 2000);
    } else if (!email.validity.valid) {
        showError();
        event.preventDefault();
    } else if (200 - userInput.value.length < 0) {
        event.preventDefault();
        form_errors.push("Somehow typed more than 200 characters in comments")
        logElement.classList.add("red")
    } else {
        const jsonErrors = JSON.stringify(form_errors);
        const formErrors = document.getElementById("form-errors");
        formErrors.value = jsonErrors;
    }
});

function showError() {

    error.style.display = "block";
    if (nameInput.validity.valueMissing) {
        nameInput.classList.add("invalid-input")
        error.textContent = "You need to enter a name";
        form_errors.push("Missing input in name");
        setTimeout(() => {
            error.textContent = "";
            nameInput.classList.remove("invalid-input")
        }, 2000);
    } else if (email.validity.valueMissing) {
        error.textContent = "You need to enter a email address"
        form_errors.push("missing input in email");
        email.classList.add("invalid-input")
        setTimeout(() => {
            error.textContent = "";
            email.classList.remove("invalid-input")
        }, 2000);
    }
    error.className = "error active";
}

function log(text) {
    logElement.innerText = text;
}

userInput.addEventListener("input", () => {
    const textLength = userInput.value.length;
    logElement.textContent = 200 - textLength + " characters left"
    if (200 - textLength < 50) {
        logElement.classList.add("red")
    }
});


