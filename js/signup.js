// alert("test");

//variables declaration
const form = document.getElementById("form-container");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isDataValid = true;

  // Reqular Expressions
  const nameRegex = /^[a-zA-Z]{3,}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

  //   Error Message
  const errorName = document.getElementById("name-error");
  const errorEmail = document.getElementById("email-error");
  const errorPassword = document.getElementById("password-error");

  //User name Validation

  if (inputName.value.trim() === "") {
    isDataValid = false;
    errorName.style.display = "block";
    errorName.innerText = "Name is Required";
  } else if (!nameRegex.test(inputName.value.trim())) {
    isDataValid = false;
    errorName.style.display = "block";
    errorName.innerText =
      "Name must be at least 3 characters and contain only alphabets";
  } else {
    errorName.style.display = "none";
  }

  //User email Validation

  if (inputEmail.value.trim() === "") {
    isDataValid = false;
    errorEmail.style.display = "block";
    errorEmail.innerText = "Email is Required";
  } else if (!emailRegex.test(inputEmail.value.trim())) {
    isDataValid = false;
    errorEmail.style.display = "block";
    errorEmail.innerText = "Enter a valid Email";
  } else {
    errorEmail.style.display = "none";
  }

  //Password Validation

  if (inputPassword.value.trim() === "") {
    isDataValid = false;
    errorPassword.style.display = "block";
    errorPassword.innerText = "Password is Required";
  } else if (!passwordRegex.test(inputPassword.value.trim())) {
    isDataValid = false;
    errorPassword.style.display = "block";
    errorPassword.innerText = "Password must be at least 08 characters";
  } else {
    errorPassword.style.display = "none";
  }

  // Show success if all validations pass
  if (isDataValid) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === inputEmail.value.trim())) {
      return;
    }

    users.push({
      userName: inputName.value.trim(),
      email: inputEmail.value.trim(),
      password: inputPassword.value.trim(),
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("You signed up successfully!");
    form.reset();
  }
});
