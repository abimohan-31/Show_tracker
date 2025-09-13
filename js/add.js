const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const movieName = document.getElementById("add-movie");
  const message = document.getElementById("message");
  const nameRegex = /^[a-zA-Z]{1,}$/;

  if (movieName.value == "" || !nameRegex.test(movieName.value)) {
    message.style.display = "block";
    message.style.color = "red";
    message.innerText = "Invalid TV Show";
  } else {
    message.style.display = "block";
    message.style.color = "green";
    message.innerText = "TV Show has been added ";
  }
});
