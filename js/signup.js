// variables
const form = document.getElementById("form-container");
const username = document.getElementById("username")
const email = document.getElementById("email1");
const password = document.getElementById("password1");

form.addEventListener ('submit', function(event){
    event.preventDefault();
    alert();


    validateInputs();



// to avoid whitespace
function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();   
    
    if (usernameValue === '') {
        setError (username, "Name is required");
    } else {
        setSuccess (username);
    }


    if (emailValue === '') {
        setError (email, "Email is required");
    } else if (!validateEmail(emailValue)) {
        setError (email, "Enter a valid email");
    } else {
        setSuccess (email)
    }

    if (passwordValue === '') {
        setError (password, "Password is required");
    } else if (passwordValue.length < 8){
        setError (password, "Password must be atleast 08 Characters");
    } else {
        setSuccess (password)
    }
}


const setError = (element, message) => {
    const inputDisplay = element.parentElement;
    const errorDisplay = inputDisplay.querySelector('.error');

    errorDisplay.innerText = message;
    inputDisplay.classList.add('error');
    inputDisplay.classList.remove('success');
}

const setSuccess = (element) => {
    const inputDisplay = element.parentElement;
    const errorDisplay = inputDisplay.querySelector('.error');

    errorDisplay.innerText = '';
    inputDisplay.classList.add('error');
    inputDisplay.classList.remove('success');
}

// email validatio 
const validateEmail = (emailValue) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

})
