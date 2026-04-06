/* - Loading the existing movie data into the form fields when the page opens */
window.onload = function () {
  // - Extracting the imdbID from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const imdbID = urlParams.get("imdbID");

  if (imdbID) {
    const xhr = new XMLHttpRequest();
    // - Fetching specific movie data from the new GET /movies/:imdbID endpoint
    xhr.onload = function () {
      if (xhr.status === 200) {
        const m = JSON.parse(xhr.responseText);

        // - Populating standard input fields with data from the JSON response
        document.getElementById("imdbID").value = m.imdbID;
        document.getElementById("Title").value = m.Title;
        document.getElementById("Released").value = m.Released;
        document.getElementById("Runtime").value = m.Runtime;

        // - Converting arrays (Directors, Writers, Actors) into strings so they fit in text inputs
        document.getElementById("Directors").value = m.Directors.join(", ");
        document.getElementById("Writers").value = m.Writers.join(", ");
        document.getElementById("Actors").value = m.Actors.join(", ");

        document.getElementById("Plot").value = m.Plot;
        document.getElementById("Poster").value = m.Poster;
        document.getElementById("Metascore").value = m.Metascore;
        document.getElementById("imdbRating").value = m.imdbRating;

        // - Setting the selected state for the multiple-choice genre dropdown
        const sel = document.getElementById("Genres");
        Array.from(sel.options).forEach(
          (o) => (o.selected = m.Genres.includes(o.value)),
        );
      }
    };
    xhr.open("GET", "/movies/" + imdbID);
    xhr.send();
  }
};

/* - Requirement 3.3 - Function to gather form data and send a PUT request to the server */
function putMovie() {
  const id = document.getElementById("imdbID").value;

  // - Constructing the movie object to match the server-side model
  const data = {
    imdbID: id,
    Title: document.getElementById("Title").value,
    Released: document.getElementById("Released").value,
    // - Re-converting inputs to correct types (numbers and arrays) before sending
    Runtime: parseInt(document.getElementById("Runtime").value),
    Genres: Array.from(document.getElementById("Genres").selectedOptions).map(
      (o) => o.value,
    ),
    Directors: document
      .getElementById("Directors")
      .value.split(",")
      .map((s) => s.trim()),
    Writers: document
      .getElementById("Writers")
      .value.split(",")
      .map((s) => s.trim()),
    Actors: document
      .getElementById("Actors")
      .value.split(",")
      .map((s) => s.trim()),
    Plot: document.getElementById("Plot").value,
    Poster: document.getElementById("Poster").value,
    Metascore: parseInt(document.getElementById("Metascore").value),
    imdbRating: parseFloat(document.getElementById("imdbRating").value),
  };

  const xhr = new XMLHttpRequest();
  // - Sending the data to the PUT /movies/:imdbID endpoint
  xhr.open("PUT", "/movies/" + id);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200 || xhr.status === 201) {
      // - Returning to the index page upon successful save
      location.href = "index.html";
    } else {
      alert("Error saving movie data to server");
    }
  };
  xhr.send(JSON.stringify(data));
}
