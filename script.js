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

    function initLightbox() {
    // Crea il overlay se non esiste già
    if (!document.getElementById('lightbox-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'lightbox-overlay';
        overlay.innerHTML = `
            <div id="lightbox-container">
                <img id="lightbox-img" src="" alt="">
                <button id="lightbox-close" aria-label="Chiudi">✕</button>
            </div>
        `;
        document.body.appendChild(overlay);
 
        // Chiudi cliccando sull'overlay (fuori dall'immagine)
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeLightbox();
        });
 
        // Chiudi con il bottone ✕
        document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
 
        // Chiudi con il tasto ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
 
        // Supporto swipe verso il basso su mobile
        let touchStartY = 0;
        overlay.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        overlay.addEventListener('touchend', (e) => {
            const deltaY = e.changedTouches[0].clientY - touchStartY;
            if (deltaY > 60) closeLightbox(); // swipe giù di almeno 60px
        }, { passive: true });
    }
 
    // Aggiungi il click a tutte le immagini dentro .evento-immagine
    document.querySelectorAll('.evento-immagine img').forEach((img) => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });
}
 
function openLightbox(src, alt) {
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
 
    lightboxImg.src = src;
    lightboxImg.alt = alt;
 
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // blocca lo scroll della pagina
}
 
function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}
 
// Inizializza quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initLightbox);

