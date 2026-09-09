// ===============================================
// Edunova — Polaznici smjera Frontend developer
// Podaci polaznika (ime i prezime promijeni ručno)
// ===============================================

const polaznici = [
    { ime: 'Andreas', prezime: 'Sklizović', slika: 'img/Andreas.jpeg', github: 'https://github.com/androwebgraphic' },
    { ime: 'Ivica',   prezime: 'Jelošek', slika: 'img/IvicaJ.png', github: 'https://github.com/jeloseki' },
    { ime: 'Juraj',   prezime: 'Prša', slika: 'img/Juraj.png', github: 'https://github.com/jurajprsa-ai' },
    { ime: 'Olha',    prezime: 'Đerek', slika: 'img/Olha.png', github: 'https://github.com/Mameyeva-create' },
    { ime: 'Sean',    prezime: 'Kušec', slika: 'img/Sean.png', github: 'https://github.com/skusec' },
    { ime: 'Tomislav', prezime: 'Jakopec', slika: 'img/Tomislav.png', github: 'https://github.com/tjakopec' },
    { ime: 'Tomislav', prezime: 'Jurčević', slika: 'img/Tomislav2.png', github: 'https://github.com/tjurcevicos' },
];

// ------------------------------------------------
// Kartični pregled (CSS Grid, 4 stupca na desktopu)
// Klik na karticu otvara lightbox galeriju
// ------------------------------------------------
const renderKartice = (lista) => {
    const grid = document.getElementById('cardsGrid');

    grid.innerHTML = lista.map(({ ime, prezime, slika }, index) => `
        <article class="card" data-index="${index}" tabindex="0" role="button"
                 aria-label="Otvori sliku: ${ime} ${prezime}">
            <div class="card-img-wrap">
                <img src="${slika}" alt="${ime} ${prezime}" loading="lazy">
            </div>
            <div class="card-body">
                <h3 class="card-name">${ime} ${prezime}</h3>
                <p class="card-role">Frontend developer</p>
            </div>
        </article>
    `).join('');

    // Klik ili Enter na karticu otvara lightbox
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) otvoriLightbox(Number(card.dataset.index));
    });

    grid.addEventListener('keydown', (e) => {
        const card = e.target.closest('.card');
        if (card && e.key === 'Enter') otvoriLightbox(Number(card.dataset.index));
    });
};

// ------------------------------------------------
// Lightbox galerija (velika slika + strelice ◀ ▶)
// ------------------------------------------------
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');

let trenutniIndex = 0;

const prikaziSliku = (index) => {
    // Kružna navigacija: iza zadnje ide prva i obrnuto
    trenutniIndex = (index + polaznici.length) % polaznici.length;

    const { ime, prezime, slika, github } = polaznici[trenutniIndex];

    lbImg.src = slika;
    lbImg.alt = `${ime} ${prezime}`;

    // GitHub link umjesto imena i broja slike
    lbCaption.innerHTML = `
        <a href="${github}" target="_blank" rel="noopener noreferrer">
            ${github}
        </a>
    `;
};

const otvoriLightbox = (index) => {
    prikaziSliku(index);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden'; // blokiraj scroll pozadine
};

const zatvoriLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = '';
};

// Gumbi: naprijed / nazad / zatvori
document.getElementById('lbPrev').addEventListener('click', () => prikaziSliku(trenutniIndex - 1));
document.getElementById('lbNext').addEventListener('click', () => prikaziSliku(trenutniIndex + 1));
document.getElementById('lbClose').addEventListener('click', zatvoriLightbox);

// Klik na tamnu pozadinu zatvara lightbox
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) zatvoriLightbox();
});

// Tipkovnica: ← prethodna, → sljedeća, Esc zatvori
document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'ArrowLeft') prikaziSliku(trenutniIndex - 1);
    if (e.key === 'ArrowRight') prikaziSliku(trenutniIndex + 1);
    if (e.key === 'Escape') zatvoriLightbox();
});

// ------------------------------------------------
// Inicijalizacija
// ------------------------------------------------
renderKartice(polaznici);