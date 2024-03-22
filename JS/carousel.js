function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('div.carousel-item');
    const firstImage = images[0];
    const lastImage = images[images.length - 1];
    const imageWidth = images[0].offsetWidth; // Width of each image

    if (direction === 1) {
        carousel.style.transition = 'transform 0.5s ease'; // Smooth transition
        carousel.style.transform = `translateX(-${imageWidth}px)`; // Move carousel to the left
        setTimeout(() => {
            carousel.appendChild(firstImage); // Move the first image to the end
            carousel.style.transition = 'none'; // Remove transition for instant repositioning
            carousel.style.transform = 'translateX(0)'; // Reset carousel position
        }, 500); // Same duration as transition (0.5s)
    } else {
        carousel.insertBefore(lastImage, images[0]); // Move the last image to the beginning
        carousel.style.transition = 'none'; // Remove transition for instant repositioning
        carousel.style.transform = `translateX(-${imageWidth}px)`; // Shift carousel to the left
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // Restore transition for smooth movement
            carousel.style.transform = 'translateX(0)'; // Reset carousel position
        }, 0); // Delay before restoring transition (0ms)
    }
}
setInterval(() => {
    moveCarousel(1);
}, 5000); // Change image every 5 seconds



document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const photoContainers = document.querySelectorAll(".photo-text-container");
    const numPages = Math.ceil(photoContainers.length / 4); // Calculate the total number of pages
    let currentPage = 1; // Initialize current page

    // Function to show images for the current page
    function showCurrentPage() {
        const startIndex = (currentPage - 1) * 4;
        const endIndex = startIndex + 4;

        // Loop through photo containers and show/hide based on the current page
        photoContainers.forEach((container, index) => {
            if (index >= startIndex && index < endIndex) {
                container.style.display = "flex";
            } else {
                container.style.display = "none";
            }
        });

        // Show/hide navigation buttons based on current page
        if (currentPage === 1) {
            prevBtn.classList.add("hidden");
        } else {
            prevBtn.classList.remove("hidden");
        }
        if (currentPage === numPages) {
            nextBtn.classList.add("hidden");
        } else {
            nextBtn.classList.remove("hidden");
        }
    }

    // Initial setup
    showCurrentPage();

    // Event listener for previous button
    prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showCurrentPage();
        }
    });

    // Event listener for next button
    nextBtn.addEventListener("click", function () {
        if (currentPage < numPages) {
            currentPage++;
            showCurrentPage();
        }
    });
});
