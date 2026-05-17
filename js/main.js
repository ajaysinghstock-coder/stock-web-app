// Theme toggle — flips body.dark class and updates button label.
const toggle = document.getElementById('themeToggle');
if (toggle) {
  // Sync initial label with the body's current state (dark is default on landing).
  toggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  });
}

// Contact form handler (homepage only).
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you. We will get back to you shortly.');
    contactForm.reset();
  });
}
