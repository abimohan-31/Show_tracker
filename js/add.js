document.addEventListener("DOMContentLoaded", () => {
    const addForm = document.getElementById('addForm');

    addForm.onsubmit = (e) => {
        e.preventDefault();
        
        const shows = DataManager.getShows();
        
        const newShow = {
            title: document.getElementById('inTitle').value.trim(),
            type: document.getElementById('inType').value,
            status: document.getElementById('inStatus').value,
            rating: parseFloat(document.getElementById('inRating').value),
            year: parseInt(document.getElementById('inYear').value),
            genres: document.getElementById('inGenres').value.split(',').map(s => s.trim()),
            img: document.getElementById('inImg').value.trim(),
            moral: document.getElementById('inMoral').value.trim()
        };

        // Add to the beginning of the array
        shows.unshift(newShow);
        DataManager.saveShows(shows);

        alert('Show added successfully!');
        window.location.href = 'index.html';
    };
});
