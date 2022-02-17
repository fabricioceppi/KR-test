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

  /* Game option display */

  const gameVersions = document.querySelectorAll('.game-version');
  gameVersions.forEach((game) => game.addEventListener('click', () => selectGame(game)));

  function selectGame(game) {
    gameVersions.forEach((option) => option.classList.remove('selected'));
    game.focus();
    game.classList.add('selected');
    /* setTimeout(() => game.scrollIntoView({block: "center", behavior: "smooth"}), 400); */
  }