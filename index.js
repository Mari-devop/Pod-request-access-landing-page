const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", function (event){
    if(email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", function (event) {
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }
})

function showError() {
    if(email.validity.valueMissing) {
        emailError.textContent = "Oops! Please add your email";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Oops! Please check your email";
    }

    emailError.className = "error active";
}