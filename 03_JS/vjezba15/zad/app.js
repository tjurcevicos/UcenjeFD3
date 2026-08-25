const obrazac = document.getElementById('obrazac-podataka');
const kontejnerPogreske = document.getElementById('ispis-pogreske');
document.getElementById('naziv-projekta').focus();


obrazac.addEventListener('submit', (dogadaj) => {
    dogadaj.preventDefault();
    kontejnerPogreske.replaceChildren(); // bolje od kontejnerPogreske.innerText = ''; 
    const konf = new Konfiguracija();

    document.querySelectorAll('.greska').forEach(o => o.replaceChildren()); // počisti sve greške

    try {
        konf.provjeriValjanost({
            mjesto: document.getElementById('mjesto-projekta'),
            projekt: document.getElementById('naziv-projekta'),
            instanci: document.getElementById('broj-instanci'),
            procesor: document.getElementById('snaga-procesora'),
            datum: document.getElementById('datum-pokretanja'),
            oznake: document.getElementById('oznake-sustava'),
            datoteka: document.getElementById('datoteka-postavki'),
            uvjeti: document.getElementById('potvrda-uvjeta')
        });
        kontejnerPogreske.appendChild(Pomocno.kreirajElement('p','Pogledajte podatke u konzoli'))
        // staro kontejnerPogreske.innerText = 'Pogledajte podatke u konzoli';
        document.getElementById('naziv-projekta').focus();
    } catch (e) {
        kontejnerPogreske.appendChild(Pomocno.kreirajElement('p',e.message));
        // staro kontejnerPogreske.innerText = '⚠️ ' + pogreska.message;
        konf.greske.forEach(o => document.getElementById('greska-'+o.element.id).appendChild(Pomocno.kreirajElement('p','⚠️ ' + o.greska))); // pobacaj poruke na pripadajuće div-ove vezane za unosna polja
        konf.greske[0].element.focus(); // fokusiraj kursor na 1. unosno polje gdje je greška
    }
});