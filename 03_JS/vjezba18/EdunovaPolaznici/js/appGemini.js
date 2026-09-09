// Niz s podacima o polaznicima - izmijeni imena i nazive slika prema potrebi
const polaznici = [
    { ime: 'Andreas', prezime: 'Sklizović', slika: 'img/Andreas.jpeg', github: 'https://github.com/androwebgraphic' },
    { ime: 'Ivica',   prezime: 'Jelošek', slika: 'img/IvicaJ.png', github: 'https://github.com/jeloseki' },
    { ime: 'Juraj',   prezime: 'Prša', slika: 'img/Juraj.png', github: 'https://github.com/jurajprsa-ai' },
    { ime: 'Olha',    prezime: 'Đerek', slika: 'img/Olha.png', github: 'https://github.com/Mameyeva-create' },
    { ime: 'Sean',    prezime: 'Kušec', slika: 'img/Sean.png', github: 'https://github.com/skusec' },
    { ime: 'Tomislav', prezime: 'Jakopec', slika: 'img/Tomislav.png', github: 'https://github.com/tjakopec' },
    { ime: 'Tomislav', prezime: 'Jurčević', slika: 'img/Tomislav2.png', github: 'https://github.com/tjurcevicos' },
];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    renderCards(polaznici);
    initLightbox();
});

// Renderiranje kartica u gridu
function renderCards(data) {
    const container = document.getElementById("cards-container");
    if (!container) return;

    container.innerHTML = data.map((polaznik, index) => `
        <article class="card" data-index="${index}">
            <div class="card-image-wrapper">
                <img src="${polaznik.slika}" alt="${polaznik.ime} ${polaznik.prezime}" loading="lazy">
            </div>
            <div class="card-info">
                <h3 class="card-name">${polaznik.ime} ${polaznik.prezime}</h3>
            </div>
        </article>
    `).join("");

    // Dodaj event listener za klik na svaku karticu
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const index = parseInt(card.getAttribute("data-index"), 10);
            openLightbox(index);
        });
    });
}

// Inicijalizacija funkcija galerije
function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);

    // Klik izvan slike zatvara lightbox
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigacija pomoću tipkovnice (Strelica lijevo/desno i ESC za izlaz)
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
    });
}

function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
}

function updateLightboxContent() {
    const polaznik = polaznici[currentIndex];
    const imgEl = document.getElementById("lightbox-img");
    const captionEl = document.getElementById("lightbox-caption");

    imgEl.src = polaznik.slika;
    imgEl.alt = `${polaznik.ime} ${polaznik.prezime}`;
    captionEl.textContent = `${polaznik.ime} ${polaznik.prezime}`;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + polaznici.length) % polaznici.length;
    updateLightboxContent();
}

function showNext() {
    currentIndex = (currentIndex + 1) % polaznici.length;
    updateLightboxContent();
}