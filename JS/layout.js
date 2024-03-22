// Get all elements with the class "no-underline"
const noUnderlineLinks = document.querySelectorAll('.no-underline');

// Add event listener to each element to toggle class on hover
noUnderlineLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hovered'); // Add class on hover
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('hovered'); // Remove class on mouseout
    });
});