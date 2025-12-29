const INITIAL_SHOWS = [
  {
    title: "Inside Out 2",
    year: 2024,
    genres: ["Animation", "Adventure", "Comedy"],
    moral: "Emotions evolve as we grow; all feelings matter.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg",
    type: "Movie",
    status: "Watched",
    rating: 8.5,
  },
  {
    title: "Moana 2",
    year: 2024,
    genres: ["Animation", "Adventure", "Family"],
    moral: "Courage and leadership come from within.",
    img: "https://resizing.flixster.com/bQIS-13y9JNyPiE6Odn6MGE6Mlc=/fit-in/705x460/v2/https://resizing.flixster.com/rWPSCwhhTCobPL9QbDeBkLurISE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdlZGUwYzMwLTg3ODUtNDU0ZS1iYTE4LTBiMGVjNThmZWYwZi5qcGc=",
    type: "Movie",
    status: "Planned",
    rating: 7.8,
  },
  {
    title: "Avatar: Fire and Ash",
    year: 2025,
    genres: ["Sci-Fi", "Action", "Adventure"],
    moral: "Respect for other cultures and nature leads to harmony.",
    img: "https://lumiere-a.akamaihd.net/v1/images/image_f9fd690c.jpeg?region=0,0,540,810",
    type: "Movie",
    status: "Planned",
    rating: 9.0,
  },
  {
    title: "Wicked",
    year: 2024,
    genres: ["Musical", "Fantasy"],
    moral: "Prejudice is destructive; empathy reveals truth.",
    img: "https://img.vwassets.com/novacinema.com/vertical_77ba9a82-d02a-4d17-a348-8f89d2dcc4d5.jpg",
    type: "Movie",
    status: "Planned",
    rating: 8.2,
  },
  {
    title: "Eephus",
    year: 2024,
    genres: ["Drama", "Sports"],
    moral: "Teamwork and passion can triumph over obstacles.",
    img: "https://musicboxshop.com/cdn/shop/files/Eephus_BD_3D_Box_1x1_1e8ed6eb-9605-4672-b99a-4d7f089f94b2.png?v=1749835992",
    type: "Movie",
    status: "Watched",
    rating: 7.5,
  },
  {
    title: "Pillion",
    year: 2025,
    genres: ["Romance", "Drama"],
    moral: "Love defies convention and transforms lives.",
    img: "https://preview.redd.it/new-poster-for-harry-lightons-pillion-starring-harry-v0-3su2pomzavwf1.jpeg?width=640&crop=smart&auto=webp&s=98d4fc99f8da78f4a5c7d40cecae382ed55d2d2b",
    type: "Movie",
    status: "Planned",
    rating: 8.0,
  },
  {
    title: "Dude",
    year: 2025,
    genres: ["Romance", "Comedy", "Drama"],
    moral: "Self-discovery and relationships shape life’s direction.",
    img: "https://preview.redd.it/dude-second-look-poster-v0-ws8t1tmb740f1.jpeg?width=1080&crop=smart&auto=webp&s=5c76c6bc43f2df760c2cb72378bb8c6e3c3ee79a",
    type: "Movie",
    status: "Planned",
    rating: 7.2,
  },
  {
    title: "Yamakaathaghi",
    year: 2025,
    genres: ["Thriller", "Supernatural"],
    moral: "Tradition and hidden truths can clash with consequences.",
    img: "https://chennaivision.com/wp-content/uploads/2025/03/Untitled-1.png",
    type: "Movie",
    status: "Planned",
    rating: 7.6,
  },
  {
    title: "Aaryan",
    year: 2025,
    genres: ["Crime", "Thriller"],
    moral: "Facing past choices reveals strength and accountability.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Aaryan_poster.jpg",
    type: "Movie",
    status: "Planned",
    rating: 8.4,
  },
  {
    title: "Thanal",
    year: 2025,
    genres: ["Action", "Thriller"],
    moral: "Justice demands courage and integrity.",
    img: "https://www.cinema.com.my/images/movies/2025/7thanal00_450.jpg",
    type: "Movie",
    status: "Planned",
    rating: 7.9,
  },
  {
    title: "Bison",
    year: 2025,
    genres: ["Action", "Thriller", "Drama"],
    moral: "Bravery and resilience are tested when survival is at stake.",
    img: "https://resizing.flixster.com/Ck03A6QjAYZv5HTwNGtH4rr0Ygc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM3ODg5YmUyLTdlNzMtNDMyNi04ZTIyLTFjOTY5NzM0N2EyNS5qcGc=",
    type: "Movie",
    status: "Planned",
    rating: 8.1,
  },
  {
    title: "Kudumbasthan",
    year: 2024,
    genres: ["Drama", "Thriller"],
    moral: "Family loyalty can lead to both protection and peril.",
    img: "Assets/images/Kudumbasthan.jpg",
    type: "Movie",
    status: "Watched",
    rating: 8.3,
  },
  {
    title: "Dexter",
    year: 2006,
    genres: ["Crime", "Drama", "Mystery"],
    moral: "Justice can be a complex and personal journey.",
    img: "Assets/images/Dexter.jpg",
    type: "Series",
    status: "Watched",
    rating: 8.7,
  },
  {
    title: "Encanto",
    year: 2021,
    genres: ["Animation", "Comedy", "Family"],
    moral: "Every individual has a unique gift that family helps to nurture.",
    img: "Assets/images/Enchanto.jpg",
    type: "Movie",
    status: "Watched",
    rating: 7.7,
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genres: ["Action", "Adventure", "Drama"],
    moral: "Power and politics often come at a great personal cost.",
    img: "Assets/images/Game of Thrones.jpg",
    type: "Series",
    status: "Watched",
    rating: 9.3,
  },
  {
    title: "Ice Age",
    year: 2002,
    genres: ["Animation", "Adventure", "Comedy"],
    moral: "Family is found through shared experiences and loyalty.",
    img: "Assets/images/Ice-age.jpg",
    type: "Movie",
    status: "Watched",
    rating: 7.5,
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    year: 2017,
    genres: ["Action", "Adventure", "Comedy"],
    moral:
      "Embracing your strengths and working together can overcome any challenge.",
    img: "Assets/images/Jumanji-welcome-to-the-jungle.png",
    type: "Movie",
    status: "Watched",
    rating: 7.0,
  },
  {
    title: "Jurassic World",
    year: 2015,
    genres: ["Action", "Adventure", "Sci-Fi"],
    moral: "Respecting nature and its power is essential for survival.",
    img: "Assets/images/Jurrasic-world.jpg",
    type: "Movie",
    status: "Watched",
    rating: 7.0,
  },
  {
    title: "Maleficent",
    year: 2014,
    genres: ["Action", "Adventure", "Family"],
    moral: "True love can take many forms and redeem even the coldest hearts.",
    img: "Assets/images/Maleficent.png",
    type: "Movie",
    status: "Watched",
    rating: 7.0,
  },
  {
    title: "Moana",
    year: 2016,
    genres: ["Animation", "Adventure", "Comedy"],
    moral:
      "Following your heart and intuition is the key to finding your true purpose.",
    img: "Assets/images/Moana.jpeg",
    type: "Movie",
    status: "Watched",
    rating: 7.6,
  },
  {
    title: "Nitham Oru Vaanam",
    year: 2022,
    genres: ["Drama", "Romance"],
    moral: "Life's journeys are about finding yourself through others.",
    img: "Assets/images/Niththam-oru-vaanam.jpg",
    type: "Movie",
    status: "Watched",
    rating: 7.8,
  },
  {
    title: "The Conjuring",
    year: 2013,
    genres: ["Horror", "Mystery", "Thriller"],
    moral: "Faith and family can overcome even the darkest forces.",
    img: "Assets/images/The-Conjuring.jpg",
    type: "Movie",
    status: "Watched",
    rating: 7.5,
  },
  {
    title: "Alice in Wonderland",
    year: 2010,
    genres: ["Adventure", "Family", "Fantasy"],
    moral: "Curiosity can lead to extraordinary discoveries and self-growth.",
    img: "Assets/images/alice-in-wonderland.jpg",
    type: "Movie",
    status: "Watched",
    rating: 6.4,
  },
  {
    title: "Breaking Bad",
    year: 2008,
    genres: ["Crime", "Drama", "Thriller"],
    moral: "The choices we make can lead us down a dark and irreversible path.",
    img: "Assets/images/breaking bad.jpg",
    type: "Series",
    status: "Watched",
    rating: 9.5,
  },
  {
    title: "Dawn of the Planet of the Apes",
    year: 2014,
    genres: ["Action", "Adventure", "Sci-Fi"],
    moral:
      "Peace is fragile and requires understanding and trust from both sides.",
    img: "Assets/images/dawn-of-the-planet-of-the-apes.jpeg",
    type: "Movie",
    status: "Watched",
    rating: 7.6,
  },
  {
    title: "How I Met Your Mother",
    year: 2005,
    genres: ["Comedy", "Romance"],
    moral: "Life is about the journey and the friends you make along the way.",
    img: "Assets/images/how i met your mother.jpg",
    type: "Series",
    status: "Watched",
    rating: 8.3,
  },
  {
    title: "Zootopia",
    year: 2016,
    genres: ["Animation", "Adventure", "Comedy"],
    moral: "Bias can be overcome with empathy and understanding.",
    img: "Assets/images/zootopia.jpg",
    type: "Movie",
    status: "Watched",
    rating: 8.0,
  },
];

const DataManager = {
  getShows() {
    const stored = localStorage.getItem("trackr_shows");
    if (!stored) {
      this.saveShows(INITIAL_SHOWS);
      return INITIAL_SHOWS;
    }

    const storedShows = JSON.parse(stored);
    let updated = false;

    // Ensure all shows have required fields (especially for user-added ones)
    storedShows.forEach((show) => {
      if (show.type === undefined) {
        show.type = "Movie";
        updated = true;
      }
      if (show.status === undefined) {
        show.status = "Planned";
        updated = true;
      }
      if (show.rating === undefined) {
        show.rating = 8.0;
        updated = true;
      }
    });

    // Merge missing initial shows and fields from the system list
    INITIAL_SHOWS.forEach((initialShow) => {
      const existingIndex = storedShows.findIndex((s) => s.title === initialShow.title);
      if (existingIndex === -1) {
        storedShows.push(initialShow);
        updated = true;
      } else {
        // For matches, ensure we have the most accurate data if missing
        const existingShow = storedShows[existingIndex];
        ["type", "status", "rating"].forEach((field) => {
          if (existingShow[field] === undefined) {
            existingShow[field] = initialShow[field];
            updated = true;
          }
        });
      }
    });

    if (updated) {
      this.saveShows(storedShows);
    }

    return storedShows;
  },
  saveShows(shows) {
    localStorage.setItem("trackr_shows", JSON.stringify(shows));
  },
};
