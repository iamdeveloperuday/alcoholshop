const menuBtn = document.querySelector('.menu-btn');
const navOption = document.querySelector('.nav-option');
const loginBtn = document.querySelector('.loginbtn');

menuBtn.addEventListener('click', () => {
    navOption.classList.toggle('active');
    loginBtn.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.product-slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const cards = document.querySelectorAll('.product-card');
  const cardWidth = cards[0].offsetWidth;
  const gap = 16; // 1rem gap
  let currentPosition = 0;
  const maxPosition = (cards.length - 5) * (cardWidth + gap);

  function updateSliderPosition() {
    slider.scrollLeft = currentPosition;
    // Update button states
    prevBtn.disabled = currentPosition <= 0;
    nextBtn.disabled = currentPosition >= maxPosition;
  }

  nextBtn.addEventListener('click', () => {
    if (currentPosition < maxPosition) {
      currentPosition += cardWidth + gap;
      updateSliderPosition();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
      currentPosition -= cardWidth + gap;
      updateSliderPosition();
    }
  });

  // Initialize button states
  updateSliderPosition();

  // Add touch support for mobile
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
});

// Go to Top Button Functionality
const goToTopButton = document.getElementById('goToTop');

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        goToTopButton.classList.add('show');
    } else {
        goToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
