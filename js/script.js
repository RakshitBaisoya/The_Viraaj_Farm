// NAV scroll effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu when link is clicked
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => observer.observe(el));

// Form submission handler
async function handleSubmit() {
  const name = document.getElementById('gname').value.trim();
  const phone = document.getElementById('gphone').value.trim();
  if (!name || !phone) {
    alert('Please enter your name and phone number.');
    return;
  }

  const payload = {
    name,
    phone,
    email: document.getElementById('gemail').value.trim(),
    checkin: document.getElementById('checkin').value,
    checkout: document.getElementById('checkout').value,
    accommodation: document.getElementById('accom').value,
    guests: document.getElementById('guests').value,
    message: document.getElementById('message').value,
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  const btn = document.querySelector('.form-submit button');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // ── PASTE YOUR APPS SCRIPT WEB APP URL BELOW ──
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdwqahSgSywNqwQmgx0C5Q7ZTFtpUehYwHZ2V0OoPjWdL1Q_fHE3pOKpurreNDDJYAEw/exec";

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
    ['gname','gphone','gemail','checkin','checkout','guests','message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.getElementById('accom').selectedIndex = 0;
  } catch(err) {
    alert('Something went wrong. Please call us directly on +91 85279 92990.');
  } finally {
    btn.textContent = 'Send Enquiry';
    btn.disabled = false;
  }
}

// Set min date on checkin/checkout inputs
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkin').min = today;
document.getElementById('checkout').min = today;
document.getElementById('checkin').addEventListener('change', function() {
  document.getElementById('checkout').min = this.value;
});
