document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    const viewImg = document.querySelector(".view-img");
    const viewImgContent = viewImg.querySelector("img");
    const closeBtn = viewImg.querySelector("span");

    images.forEach(image => {
        image.addEventListener("click", () => {
            // Set the src of the view-img image to the clicked image's src
            viewImgContent.src = image.src;
            // Display the view-img container
            viewImg.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        // Hide the view-img container
        viewImg.style.display = "none";
    });
});