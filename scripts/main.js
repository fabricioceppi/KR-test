/* mobile viewport height fix */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// fix when resizing
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  /* open menu functionallity */

  const nav = document.querySelector('nav');
  const openButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-menu');

  openButton.addEventListener('click', () => nav.classList.add('active'));
  closeButton.addEventListener('click', () => nav.classList.remove('active'));