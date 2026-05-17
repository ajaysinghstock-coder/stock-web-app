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

// Contact form — submits to Google Forms via a hidden iframe (avoids CORS/400).
// The iframe receives the redirect from Google; we never read its content.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const POST_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScyU00RBSX_TtGkIZd0qcRAU907veFzv5ZHnk0yiMm1GkEwxQ/formResponse';
  const successMsg = document.getElementById('formSuccess');
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  // Create a hidden iframe to absorb the Google redirect response.
  const iframe = document.createElement('iframe');
  iframe.name = 'gform-target';
  iframe.style.cssText = 'display:none;width:0;height:0;border:0;';
  document.body.appendChild(iframe);

  contactForm.setAttribute('action', POST_URL);
  contactForm.setAttribute('method', 'POST');
  contactForm.setAttribute('target', 'gform-target');

  // Append required hidden fields Google needs.
  ['fvv:1', 'pageHistory:0'].forEach(pair => {
    const [name, value] = pair.split(':');
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    contactForm.appendChild(input);
  });

  contactForm.addEventListener('submit', () => {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    iframe.addEventListener('load', () => {
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Enquiry';
      if (successMsg) successMsg.style.display = 'block';
    }, { once: true });
  });
}
