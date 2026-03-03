document.addEventListener("DOMContentLoaded", () => {
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

let currentIndex = 0;
const slideCount = slides.length;
const intervalTime = 5000; // 5 secondi

function moveCarousel() {
    currentIndex++;

    if (currentIndex >= slideCount) {
        currentIndex = 0;
    }

    const newPosition = -currentIndex * 100; // sposta di 100% ogni slide
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

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // evita il refresh della pagina

    const formData = new FormData(this);

    fetch("send_mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("response").innerText = data;
    })
    .catch(error => {
        document.getElementById("response").innerText = "Errore durante l'invio.";
    });
});
