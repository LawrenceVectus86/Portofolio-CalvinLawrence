// Navbar fixed
const header = document.querySelector('header');
const fixedNav = header.offsetTop;

window.onscroll = function () {
  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// klik diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Word Animation

const dynamicText = document.querySelector('h1 span');
const words = ['Calvin Lawrence', 'Like Art', 'Like Movies', 'Like Tailwind CSS', 'Front End'];

let wordIndex = 0;
let charIndex = 0;
let Delete = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blink');

  if (!Delete && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (Delete && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    Delete = !Delete;
    dynamicText.classList.remove('stop-blink');
    wordIndex = !Delete ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

// About Section

function Detail(a) {
  const target = $(a.target);

  if ($(target).hasClass('active')) {
    $(target).html('Load More').removeClass('active');
  } else {
    $(target).html('Close').addClass('active');
  }

  const item = $(target).parents('.about-exp-item');

  const detail = $(item).children('.about-exp-item-detail');

  $(detail).slideToggle();
}
