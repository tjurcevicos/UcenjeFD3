import { polaznici } from "./PolaznikPodaci";

// 1/4 Read od CRUD
async function get(){
    return {data: [...polaznici]} // [...] stvara novi niz s istim podacima
}

async function getBySifra(sifra){
    return {data: polaznici.find(s => s.sifra === parseInt(sifra))}    
}


// 2/4 Create od CRUD
async function dodaj(polaznik){
    if(polaznici.length===0){
        polaznik.sifra = 1
    }else{
        polaznik.sifra = polaznici[polaznici.length-1].sifra + 1
    }
    polaznici.push(polaznik)
}

// 3/4 Update od CRUD
async function promijeni(sifra,polaznik){
    const index = nadiIndex(sifra)
    polaznici[index] = {...polaznici[index], ...polaznik}
}

// ne moraju sve funkcije biti dostupne izvana
function nadiIndex(sifra){
    return polaznici.findIndex(s => s.sifra === parseInt(sifra))
}

// 4/4 Delete od CRUD
async function obrisi(sifra){
    const index = nadiIndex(sifra)
    polaznici.splice(index,1)
}


// Straničenje - dohvati stranicu polaznika
async function dohvatiStranicu(stranica = 1, velicinaStranice = 8,uvjetPretrazivanja='') {
    let filtriraniPolaznici = [...polaznici];

    if (uvjetPretrazivanja && uvjetPretrazivanja.trim() !== '') {
        const loweruvjetPretrazivanja = uvjetPretrazivanja.toLowerCase().trim();
        filtriraniPolaznici = filtriraniPolaznici.filter(polaznik => {
            const ime = (polaznik.ime || '').toLowerCase();
            const prezime = (polaznik.prezime || '').toLowerCase();
            const email = (polaznik.email || '').toLowerCase();
            const oib = (polaznik.oib || '').toLowerCase();
            
            return ime.includes(loweruvjetPretrazivanja) ||
                   prezime.includes(loweruvjetPretrazivanja) ||
                   email.includes(loweruvjetPretrazivanja) ||
                   oib.includes(loweruvjetPretrazivanja);
        });
    }


    const pocetniIndeks = (stranica - 1) * velicinaStranice; 
    const zavrsniIndeks = pocetniIndeks + velicinaStranice;
    const stranicenjePodaci = filtriraniPolaznici.slice(pocetniIndeks, zavrsniIndeks);
    const ukupnoStavki = filtriraniPolaznici.length;
    const ukupnoStranica = Math.ceil(ukupnoStavki / velicinaStranice);

    return {
        data: stranicenjePodaci,
        ukupnoStranica: ukupnoStranica,
        ukupnoStavki: ukupnoStavki
    };
}

async function spremiSliku(entitet) {
    return {poruka: 'Ne radi na memoriji'}
}


export default{
    get,
    dodaj,
    getBySifra,
    promijeni,
    obrisi,
    dohvatiStranicu,
    spremiSliku
}