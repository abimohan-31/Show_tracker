document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const showTitle = params.get('id');
    const container = document.getElementById('detailContent');

    if (!showTitle) {
        container.innerHTML = '<div class="empty-state">No show selected. <a href="index.html" style="color:var(--accent-red)">Go back</a></div>';
        return;
    }

    const shows = DataManager.getShows();
    const show = shows.find(s => s.title === showTitle);

    if (!show) {
        container.innerHTML = '<div class="empty-state">Show not found. <a href="index.html" style="color:var(--accent-red)">Go back</a></div>';
        return;
    }

    // Update Page Title
    document.title = `${show.title} | ShowTrackr`;

    container.innerHTML = `
        <div class="detail-hero">
            <img src="${show.img}" alt="${show.title}" class="detail-poster" onerror="this.src='https://placehold.co/400x600/1e293b/white?text=Poster'">
            <div class="detail-body">
                <h1 class="detail-title">${show.title}</h1>
                
                <div class="detail-badges">
                    <span class="badge badge-type">${show.type}</span>
                    <span class="badge status-badge status-${(show.status || 'planned').toLowerCase()}">${show.status || 'Planned'}</span>
                    <span class="badge" style="background: rgba(0,0,0,0.5); color: var(--accent-amber); border: 1px solid var(--accent-amber);">★ ${show.rating || 'N/A'}</span>
                </div>

                <div class="detail-info-grid">
                    <div class="info-item">
                        <label>Release Year</label>
                        <p>${show.year}</p>
                    </div>
                    <div class="info-item">
                        <label>Genres</label>
                        <p>${show.genres.join(', ')}</p>
                    </div>
                </div>

                <div class="detail-section">
                    <div class="detail-moral">
                        "${show.moral}"
                    </div>
                </div>

                <div class="detail-section" style="margin-top: 3rem;">
                    <button class="btn-add" id="deleteShow" style="background: #333; color: #fff; font-size: 0.75rem;">Remove from Collection</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('deleteShow').onclick = () => {
        if (confirm('Are you sure you want to remove this show?')) {
            const updatedShows = shows.filter(s => s.title !== showTitle);
            DataManager.saveShows(updatedShows);
            window.location.href = 'index.html';
        }
    };
});
