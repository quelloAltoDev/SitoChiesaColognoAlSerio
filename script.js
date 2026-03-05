document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  
  if (!track) return; // ← esce subito se non trova il carosello

  const slides = Array.from(track.children);

  let currentIndex = 0;
  const slideCount = slides.length;
  const intervalTime = 5000;

  function moveCarousel() {
    currentIndex++;
    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }
    const newPosition = -currentIndex * 100;
    track.style.transform = `translateX(${newPosition}%)`;
  }

  setInterval(moveCarousel, intervalTime);
});

    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('navMenu');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('open');
        menu.classList.toggle('open');
    });

    // Chiude il menu cliccando un link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('open');
            menu.classList.remove('open');
        });
    });

    // Chiude il menu cliccando fuori
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
            btn.classList.remove('open');
            menu.classList.remove('open');
        }
    });

