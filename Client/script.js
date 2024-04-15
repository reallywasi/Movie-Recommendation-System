// Dummy movie data for demonstration
const movies = [
    { title: "The Shawshank Redemption", poster: "shawshank_redemption.jpg" },
    { title: "The Godfather", poster: "godfather.jpg" },
    { title: "The Dark Knight", poster: "dark_knight.jpg" },
    // Add more movie data here
];

// Function to generate movie cards
function generateMovieCards() {
    const movieCardsContainer = document.getElementById("movieCardsContainer");

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.title;

        card.appendChild(img);
        movieCardsContainer.appendChild(card);
    });
}

// Call the function to generate movie cards when the page loads
window.onload = generateMovieCards;

function getRecommendations() {
    var userInput = document.getElementById("userInput").value;
    // Implement movie recommendation logic here
    // For now, let's just display an alert
    alert("Recommendations for '" + userInput + "' will be displayed here.");
}
