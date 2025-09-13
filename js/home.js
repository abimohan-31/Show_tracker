document.addEventListener("DOMContentLoaded", () => {
    const genre = document.querySelectorAll(".genre");
    const card = document.querySelectorAll(".card");
    const alphabtn = document.querySelectorAll(".alph-btn")

    genre.forEach (button => {
        button.addEventListener("click", () => {
            const selectedGenre = button.textContent.trim().toLowerCase();
            const cardArray = Array.from(card);

            const filteredCards = cardArray.filter(card => {
                const genreText = card.querySelector(".card-text").textContent.toLowerCase();
                return selectedGenre === "all" || genreText.includes(selectedGenre);
            });

            cardArray.forEach(card => {
                card.style.display = "none";
            });

            filteredCards.forEach(card => {
                card.style.display = "block";
            });
        });
    });

alphabtn.forEach(button => {
    button.addEventListener("click", () => {
        const selectedLetter = button.textContent.trim().toLowerCase();

        card.forEach(cardItem => {
            const title = cardItem.querySelector(".card-title").textContent.trim().toLowerCase();

            if (selectedLetter === "0-9") {
                if (title[0] >= '0' && title[0] <= '9') {
                    cardItem.style.display = "block";
                } else {
                    cardItem.style.display = "none";
                }
            } else {
                if (title.startsWith(selectedLetter)) {
                    cardItem.style.display = "block";
                } else {
                    cardItem.style.display = "none";
                }
            }
        });
    });
});
})