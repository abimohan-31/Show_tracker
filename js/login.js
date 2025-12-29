// alert("test");
//variables declaration
export const form = document.getElementById("form-container");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(
    (user) =>
      user.email === inputEmail.value.trim() &&
      user.password === inputPassword.value.trim()
  );

  if (matchedUser) {
    error.style.display = "none";
    alert("Log in Successfully!");
  } else {
    error.style.display = "block";
    error.innerText = "Invalid Email / Paassword";
    alert("Log in Unsuccessfully!");
  }
});
