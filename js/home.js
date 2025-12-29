document.addEventListener("DOMContentLoaded", () => {
    const App = {
        shows: [],
        filters: { search: '', alpha: 'All', genre: 'All', type: 'All' },

        init() {
            this.shows = DataManager.getShows();
            this.renderAlphabet();
            this.renderGenres();
            this.bindEvents();
            this.render();
        },

        bindEvents() {
            // Search
            const searchBox = document.getElementById('searchBox');
            const clearSearchBtn = document.getElementById('clearSearch');

            searchBox.oninput = (e) => {
                this.filters.search = e.target.value.toLowerCase();
                clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
                this.render();
            };

            clearSearchBtn.onclick = () => {
                searchBox.value = '';
                this.filters.search = '';
                clearSearchBtn.style.display = 'none';
                this.render();
            };

            // Clear All Filters
            document.getElementById('clearFilters').onclick = () => {
                this.filters.alpha = 'All';
                this.filters.genre = 'All';
                this.filters.type = 'All';
                
                // Reset UI active states
                document.querySelectorAll('.type-btn, .alph-btn, .genre-btn').forEach(b => {
                    b.classList.remove('active');
                    if(b.dataset.filter === 'All') b.classList.add('active');
                });

                this.render();
            };

            // Type Filter
            document.getElementById('typeBar').addEventListener('click', (e) => {
                if(e.target.classList.contains('type-btn')) {
                    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    this.filters.type = e.target.dataset.filter;
                    this.render();
                }
            });

            // Alphabet Filter
            document.getElementById('alphabetBar').addEventListener('click', (e) => {
                if(e.target.classList.contains('alph-btn')) {
                    document.querySelectorAll('.alph-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    this.filters.alpha = e.target.dataset.filter;
                    this.render();
                }
            });

            // Genre Filter
            document.getElementById('genreBar').addEventListener('click', (e) => {
                if(e.target.classList.contains('genre-btn')) {
                    document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    this.filters.genre = e.target.dataset.filter;
                    this.render();
                }
            });
        },

        renderAlphabet() {
            const bar = document.getElementById('alphabetBar');
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(l => {
                const btn = document.createElement('button');
                btn.className = 'alph-btn';
                btn.textContent = l;
                btn.dataset.filter = l;
                bar.appendChild(btn);
            });
        },

        renderGenres() {
            const bar = document.getElementById('genreBar');
            const genres = ['All', ...new Set(this.shows.flatMap(s => s.genres))];
            bar.innerHTML = '';
            genres.forEach(g => {
                const btn = document.createElement('button');
                btn.className = `genre-btn ${this.filters.genre === g ? 'active' : ''}`;
                btn.textContent = g;
                btn.dataset.filter = g;
                bar.appendChild(btn);
            });
        },

        render() {
            const grid = document.getElementById('movieGrid');
            const filtered = this.shows.filter(s => {
                const matchesSearch = s.title.toLowerCase().includes(this.filters.search);
                const matchesAlpha = this.filters.alpha === 'All' || 
                                   (this.filters.alpha === '0-9' ? /^\d/.test(s.title) : s.title.toUpperCase().startsWith(this.filters.alpha));
                const matchesGenre = this.filters.genre === 'All' || s.genres.includes(this.filters.genre);
                const matchesType = this.filters.type === 'All' || s.type === this.filters.type;
                return matchesSearch && matchesAlpha && matchesGenre && matchesType;
            });

            grid.innerHTML = filtered.length ? '' : `
                <div class="empty-state">
                    <h3>No shows found matching your filters.</h3>
                    <p style="color: var(--text-muted); margin-top: 1rem;">Try adjusting your search or filters.</p>
                </div>`;

            filtered.forEach((show) => {
                const card = document.createElement('a');
                card.href = `detail.html?id=${encodeURIComponent(show.title)}`;
                card.className = 'movie-card';
                card.innerHTML = `
                    <div class="card-img-container">
                        <img src="${show.img}" alt="${show.title}" onerror="this.src='https://placehold.co/400x600/1e293b/white?text=Poster'">
                        <div class="rating-badge">★ ${show.rating || 'N/A'}</div>
                        <div class="status-badge status-${(show.status || 'planned').toLowerCase()}">${show.status || 'Planned'}</div>
                        <div class="card-overlay">
                            <span class="genre-pill">${show.genres[0]}</span>
                        </div>
                    </div>
                    <div class="movie-info">
                        <h3 class="movie-title">${show.title}</h3>
                        <div class="movie-meta">
                            <span>${show.year}</span>
                            <span class="genre-pill" style="background: var(--accent-blue);">${show.type}</span>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
    };

    App.init();
});