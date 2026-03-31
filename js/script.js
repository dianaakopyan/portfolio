// ========================
// DARK / LIGHT MODE
// ========================
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function getTheme() {
  return localStorage.getItem('theme') || 'light';
}

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.textContent = theme === 'dark' ? '○' : '●';
  }
}

// Init theme
setTheme(getTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

// ========================
// STICKY HEADER
// ========================
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// ========================
// MOBILE MENU
// ========================
const menuBtn = document.getElementById('menuBtn');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link');

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
}
