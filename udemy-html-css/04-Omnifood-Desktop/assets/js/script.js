/*
console.log('Hello WOrld!');

const myName = 'Artem Usatyi';
const h1 = document.querySelector('.heading-primary');

console.log(myName);
console.log(h1);

h1.addEventListener('click', () => {
h1.textContent = myName;
h1.style.backgroundColor = 'red';
h1.style.padding = '5rem';
});
*/

/// ////////////////////////////////////////////////////////
// Set current year in footer copyright section
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/// ////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

/// ////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

/// ////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
