// - Centralized data store. Added the 4th movie (American Gangster)
// that was in your original server.js code.
const movies = {
  tt0209064: {
    imdbID: "tt0209064",
    Title: "Snatch",
    Released: "2000-01-01",
    Runtime: 104,
    Genres: ["Crime", "Comedy"],
    Directors: ["Guy Ritchie"],
    Writers: ["Guy Ritchie"],
    Actors: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"],
    Plot: "In the underbelly of London, merciless gangsters, boxing promoters, amateur thieves and violent bookmakers try to retrieve a precious diamond stolen from an Antwerp jeweller.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzk5NjJkMTQtN2IyNC00YWM5LTlhZmMtNGI3MWNhMTU1YTc4XkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 73,
    imdbRating: 8.3,
  },
  tt0111161: {
    imdbID: "tt0111161",
    Title: "The Shawshank Redemption",
    Released: "1994-09-23",
    Runtime: 142,
    Genres: ["Drama"],
    Directors: ["Frank Darabont"],
    Writers: ["Stephen King", "Frank Darabont"],
    Actors: ["Tim Robbins", "Morgan Freeman"],
    Plot: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 80,
    imdbRating: 9.3,
  },
  tt0119217: {
    imdbID: "tt0119217",
    Title: "Good Will Hunting",
    Released: "1997-12-05",
    Runtime: 126,
    Genres: ["Drama", "Romance"],
    Directors: ["Gus Van Sant"],
    Writers: ["Matt Damon", "Ben Affleck"],
    Actors: ["Matt Damon", "Robin Williams", "Ben Affleck"],
    Plot: "Will Hunting, a janitor at MIT, is a mathematical genius and a bad mf.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 70,
    imdbRating: 8.3,
  },
  tt0765429: {
    // - Added the missing 4th movie from your original Exercise 1 file
    imdbID: "tt0765429",
    Title: "American Gangster",
    Released: "2007-11-02",
    Runtime: 157,
    Genres: ["Crime", "Drama"],
    Directors: ["Ridley Scott"],
    Writers: ["Steven Zaillian"],
    Actors: ["Denzel Washington", "Russell Crowe"],
    Plot: "Frank is a powerful drug lord whose booming drug trade is being undermined by crooked law enforcement officers and smaller street crews. Detective Roberts is the only cop who is willing to tackle him - nobody owns him though.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGExM2MwNjUtNThkNi00ZjBmLWJhZDgtN2ZmOWJiZWEwNGMxXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 76,
    imdbRating: 7.8,
  },
};

module.exports = movies;
