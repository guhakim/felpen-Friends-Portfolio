// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

// Nav border on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottom = window.scrollY > 30
    ? '1px solid #e0e0e0'
    : '1px solid transparent';
}, { passive: true });
