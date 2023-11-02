document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const images = document.querySelectorAll("#image-gallery img");
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      images.forEach(function (image) {
        const altText = image.getAttribute("alt").toLowerCase();
        const parentCol = image.parentElement;
  
        if (altText.includes(searchTerm)) {
          parentCol.style.display = "block";
        } else {
          parentCol.style.display = "none";
        }
      });
    });
  });  