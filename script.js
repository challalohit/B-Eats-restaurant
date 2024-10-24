let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slideIndex++;

    if (slideIndex >= slides.length) { slideIndex = 0; }  // Reset index if it exceeds slide count

    slides[slideIndex].style.display = "block";  // Show the current slide

    setTimeout(showSlides, 3000);  // Change image every 3 seconds
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle active class
});

// Change header opacity on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header.style.backgroundColor = "rgba(30, 30, 30, 0.9)";
    } else {
        header.style.backgroundColor = "rgba(30, 30, 30, 0.8)";
    }
});
