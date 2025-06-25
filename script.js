// Portfolio Carousel Logic
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
let position = 0;
const slideWidth = 320; // Adjust to match image + margin
const maxSlides = track.children.length-3;

// Manual slide controls
nextBtn.addEventListener("click", () => {
  position = (position + 2) % maxSlides;
  updateSlider();
});
prevBtn.addEventListener("click", () => {
  position = (position - 1 + maxSlides) % maxSlides;
  updateSlider();
});

function updateSlider() {
  const offset = position * slideWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

// Autoplay
setInterval(() => {
  position = (position + 1) % maxSlides;
  updateSlider();
}, 4000);

// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll animations
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

faders.forEach(el => appearOnScroll.observe(el));

// Hamburger menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Form handler
function handleSubmit(event) {
  event.preventDefault();
  alert("Message sent successfully!");
  return false;
}