const overlay = document.getElementById('overlay');

function getRandomImageURL() {
  // Remplacez par vos URLs d'images réelles
  const imageUrls = [
    "assets/images/767238-la-bande-annonce-de-la-flamme-avec-jonat-cover-2-1.webp",
    "assets/images/la-flamme-alexandra.gif",
    "assets/images/la-flamme-alexandra-1.gif",
    "assets/images/tumblr_9593555983b583409e5953c5a6cc70ee_243f70cb_540.gif",
    "assets/images/tumblr_5194c7c7ea167f9944ba924244a99d5a_d23aeab1_540.gif"
  ];
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function getRandomPosition() {
  const maxX = window.innerWidth - 200; // Largeur maximale de l'écran moins la largeur de l'image
  const maxY = window.innerHeight - 200; // Hauteur maximale de l'écran moins la hauteur de l'image

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  return { left: randomX, top: randomY };
}

function showOverlay() {
  const randomDelay = Math.random() * (5000 - 3000) + 1000;

  setTimeout(() => {
    const image = new Image();
    const randomPosition = getRandomPosition();

    image.src = getRandomImageURL();
    image.style.position = 'fixed';
    image.style.left = `${randomPosition.left}px`;
    image.style.top = `${randomPosition.top}px`;

    overlay.innerHTML = '';
    overlay.appendChild(image);

    overlay.style.display = 'block';

    setTimeout(() => {
      overlay.style.display = 'none';
      showOverlay();
    }, randomDelay);
  }, randomDelay);
}

showOverlay();
