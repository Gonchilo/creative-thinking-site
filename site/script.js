// Nav scroll
const nav = document.getElementById('nav');
if (nav) window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 20); });

// Mobile burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.documentElement.classList.add('js');
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
