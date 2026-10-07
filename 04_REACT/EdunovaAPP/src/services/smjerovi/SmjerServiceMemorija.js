import { smjerovi } from "./SmjerPodaci";

// 1/4 Read od CRUD
async function get(){
    return {data: [...smjerovi]} // [...] stvara novi niz s istim podacima
}

async function getBySifra(sifra){
    return {data: smjerovi.find(s => s.sifra === parseInt(sifra))}    
}


// 2/4 Create od CRUD
async function dodaj(smjer){
    if(smjerovi.length===0){
        smjer.sifra = 1
    }else{
        smjer.sifra = smjerovi[smjerovi.length-1].sifra + 1
    }
    smjerovi.push(smjer)
}

// 3/4 Update od CRUD
async function promijeni(sifra,smjer){
    const index = nadiIndex(sifra)
    smjerovi[index] = {...smjerovi[index], ...smjer}
}

// ne moraju sve funkcije biti dostupne izvana
function nadiIndex(sifra){
    return smjerovi.findIndex(s => s.sifra === parseInt(sifra))
}

// 4/4 Delete od CRUD
async function obrisi(sifra){
    const index = nadiIndex(sifra)
    smjerovi.splice(index,1)
}

export default{
    get,
    dodaj,
    getBySifra,
    promijeni,
    obrisi
}