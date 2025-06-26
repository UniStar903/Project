
// 🔁 Background Image Transition (Hero)
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  let isAlt = false;

  setInterval(() => {
    hero.classList.toggle('alt-bg');
    isAlt = !isAlt;
  }, 6000);
});

// 🎡 Responsive Portfolio Carousel
(() => {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const slideWidth = 500;
  const visibleSlides = 7;
  let position = 0;
  let intervalId;

  function updateSlider() {
    if (window.innerWidth > 768) {
      const maxSlides = track.children.length - visibleSlides;
      const offset = position * slideWidth;
      track.style.transform = `translateX(-${offset}px)`;
      if (position > maxSlides) position = 0;
    } else {
      track.style.transform = "none";
    }
  }

  let verticalScroll = 0;

  function autoSlide() {
  if (window.innerWidth > 768) {
    const maxSlides = track.children.length - visibleSlides;
    position = (position + 1) % maxSlides;
    updateSlider();
  } else {
    const step = 500;
    const maxScroll = track.scrollHeight - track.clientHeight;

    verticalScroll += step;
    if (verticalScroll >= maxScroll) {
      verticalScroll = 0;
    }

    track.scrollTop = verticalScroll;

  }
}

  function startAutoScroll() {
    clearInterval(intervalId);
    intervalId = setInterval(autoSlide, 1000);
  }

  if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      const maxSlides = track.children.length - visibleSlides;
      position = (position - 2 + maxSlides) % maxSlides;
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      const maxSlides = track.children.length - visibleSlides;
      position = (position + 2) % maxSlides;
      updateSlider();
    });

    track.addEventListener("mouseenter", () => clearInterval(intervalId));
    track.addEventListener("mouseleave", startAutoScroll);
    window.addEventListener("resize", () => {
      position = 0;
      updateSlider();
      startAutoScroll();
    });

    updateSlider();
    startAutoScroll();
  }
})();

// 🌗 Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
document.getElementById("theme-toggle-mobile")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// 👀 Fade-In on Scroll
(() => {
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
    { threshold: 0.1 }
  );

  faders.forEach(el => appearOnScroll.observe(el));
})();

// 🍔 Hamburger Navigation
(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
})();

// 📩 Contact Form Submission Handler
function handleSubmit(event) {
  event.preventDefault();
  alert("Message sent successfully!");
  return false;
}
