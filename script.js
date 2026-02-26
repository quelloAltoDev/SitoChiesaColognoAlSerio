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
