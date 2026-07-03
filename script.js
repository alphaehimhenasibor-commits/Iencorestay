/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(11, 11, 13, 0.95)';
    nav.style.borderBottom = '1px solid rgba(200,169,106,0.2)';
  } else {
    nav.style.background = 'rgba(11, 11, 13, 0.85)';
    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
  }
});

/* =========================
   SIMPLE REVEAL ANIMATION
========================= */

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

/* =========================
   FORM HANDLING (FRONTEND ONLY)
========================= */

const form = document.querySelector('.cta form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Name"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const location = form.querySelector('input[placeholder="Property Location"]').value;

    if (name && email && location) {
      alert("Thanks! We'll contact you shortly with your revenue estimate.");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}
