 /**
 * GENERATOR FUNKCIJA: tijekUpoznavanja
 * Upravlja stanjima aplikacije koristeći 'yield'.
 */
function* tijekUpoznavanja() {
    // 1. KORAK: Tražimo ime
    // yield šalje objekt prema van i pauzira funkciju
    const ime = yield { 
        naslov: 'Tko si ti?', 
        opis: 'Prvo nam reci svoje ime kako bismo znali s kim pričamo.', 
        prikaziUnos: true 
    };

    const godine = yield { 
        naslov: `Drago nam je, ${ime}!`, 
        opis: 'Koliko imaš godina?', 
        prikaziUnos: true 
    };

    let poruka = 'Igraš se ha, ne želiš reći godine'
    const g = Number(godine)
    if(g){
        switch (true) {
            case (g >= 0 && g <= 10):
                poruka= 'ti si beba';
                break;
            case (g > 10 && g <= 17):
                poruka=  'malo si mlad';
                break;
            case (g >= 18 && g <= 29):
                poruka=  'frajeru';
                break;
            case (g >= 30 && g <= 50):
                poruka=  'šefe, sad si u najboljim godinama'; 
                break;
            case (g > 50):
                poruka=  'stari lisac, sve si već vidio'; 
                break;
            default:
                poruka=  'Ajde ne izmišljaj, unesi prave godine!';
        }
    }

    // 2. KORAK: Tražimo grad (koristimo 'ime' dobiveno iz prethodnog koraka)
    const grad = yield { 
        naslov: `${ime} (${poruka})!`, 
        opis: 'Iz kojeg grada dolaziš?', 
        prikaziUnos: true 
    };

    // 3. KORAK: Završna poruka
    return { 
        naslov: 'Sve je spremno!', 
        opis: `Pozdrav za ${ime} (${godine}) iz grada ${grad}. Uspješno ste završili proces!`, 
        prikaziUnos: false,
        gotovo: true 
    };
}

// Inicijalizacija elemenata (JavaScript varijable na hrvatskom)
const tijek = tijekUpoznavanja();
const gumbDalje = document.getElementById('gumb-dalje');
const naslovElement = document.getElementById('glavni-naslov');
const opisElement = document.getElementById('glavni-opis');
const kontejnerUnosa = document.getElementById('kontejner-unosa');
const poljeZaUnos = document.getElementById('polje-za-unos');

let zadnjiUnosKorisnika = '';

/**
 * FUNKCIJA: izvrsiSljedeciKorak
 * Poziva se na klik gumba ili enter na input polje i budi generator.
 */
function izvrsiSljedeciKorak() {
    // Spremi što je korisnik upisao prije nego što krenemo na sljedeći yield
    zadnjiUnosKorisnika = poljeZaUnos.value;
    poljeZaUnos.value = ''; // Očisti polje za sljedeći put

    // Prosljeđujemo unos natrag u generator pomoću .next()
    const rezultat = tijek.next(zadnjiUnosKorisnika);

    if (!rezultat.done) {
        const podaci = rezultat.value;
        
        // Ažuriranje sučelja (UI)
        naslovElement.innerText = podaci.naslov;
        opisElement.innerText = podaci.opis;
        
        if (podaci.prikaziUnos) {
            kontejnerUnosa.classList.remove('skriveno');
            poljeZaUnos.focus();
        } else {
            kontejnerUnosa.classList.add('skriveno');
        }

        gumbDalje.innerText = 'Nastavi';
    } else {
        // Kraj - generator je vratio 'return'
        const konacniPodaci = rezultat.value;
        naslovElement.innerText = konacniPodaci.naslov;
        opisElement.innerText = konacniPodaci.opis;
        
        gumbDalje.classList.add('skriveno');
        kontejnerUnosa.classList.add('skriveno');
    }
}

gumbDalje.addEventListener('click', izvrsiSljedeciKorak);

window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        izvrsiSljedeciKorak();
    }
});