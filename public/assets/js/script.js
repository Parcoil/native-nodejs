function playGame(gameId) {
    alert(`Launching game with ID: ${gameId}`);
}

document.getElementById("search-box").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const gameImages = document.querySelectorAll(".game-image");

    gameImages.forEach(function(image) {
        const gameAltText = image.alt.toLowerCase();
        if (gameAltText.includes(searchTerm)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});
