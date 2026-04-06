const express = require("express");
const path = require("path");
// - Importing the movie-model to use as the centralized data store
const movies = require("./movie-model");
const app = express();

// - Middleware to parse JSON bodies from PUT requests so we can read movie data
app.use(express.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, "files")));

//___________________
// serve images from project root /images bc it didnt work before properly with images not loading
///////app.use("/images", express.static(path.join(__dirname, "../images")));
//__________________________

// Configure a 'get' endpoint for data..
app.get("/movies", function (req, res) {
  // - Converting the movie object values back into an array to keep the original frontend logic working
  res.json(Object.values(movies));
});

// - New GET endpoint to fetch a single movie by its ID for the edit form
app.get("/movies/:imdbID", function (req, res) {
  const movie = movies[req.params.imdbID];
  if (movie) {
    res.json(movie);
  } else {
    // - Sending 404 if the requested movie ID does not exist in our model
    res.sendStatus(404);
  }
});

// - New PUT endpoint to update an existing movie or create a new one
app.put("/movies/:imdbID", function (req, res) {
  const imdbID = req.params.imdbID;
  const isExisting = !!movies[imdbID];

  // - Overwriting the specific movie key with the new data from the request body
  movies[imdbID] = req.body;

  if (isExisting) {
    // - Returning 200 OK for a successful update
    res.sendStatus(200);
  } else {
    // - Returning 201 Created if a new movie was added to the object
    res.status(201).json(movies[imdbID]);
  }
});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");
