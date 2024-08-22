document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.querySelector(".image-container");
    const viewImg = document.querySelector(".view-img");
    const viewImgContent = viewImg.querySelector("img");
    const closeBtn = viewImg.querySelector("span");
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    const accessKey = "K2dCUXViErOoWutAQ5QRyY1D9coEDxLseijRnUvOqJs";
    let page = 1;

    // Function to fetch images from Unsplash
    async function fetchImages(query) {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }

    // Function to display images in the gallery
    function displayImages(images) {
        imagesContainer.innerHTML = ""; // Clear existing images
        images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description || "Unsplash Image";
            imgElement.addEventListener("click", () => {
                viewImgContent.src = image.urls.regular;
                viewImg.style.display = "flex";
            });
            imagesContainer.appendChild(imgElement);
        });
    }

    // Event listener for search button
    searchBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const query = searchInput.value;
        if (query.trim() !== "") {
            const images = await fetchImages(query);
            displayImages(images);
        }
    });

    // Close button for the image viewer
    closeBtn.addEventListener("click", () => {
        viewImg.style.display = "none";
    });

    // Automatically fetch and display random photos on page load
    async function loadRandomPhotos() {
        const randomQuery = "dark"; // You can change this to any default query you like
        const images = await fetchImages(randomQuery);
        displayImages(images);
    }

    loadRandomPhotos(); // Call the function when the page loads


    
});