
// OOP - Objektno orjentirano programiranje

// napamet naučiti što je klasa a što objekt


// I1: Klasa je opisnik objekta

class Osoba{
    // OOP princip učahurivanja (encapsulation)
    // 1. Klasa će sakriti svoja svojstva
    #ime // # označavaju da se radi o skriveno, privatnom svojstvu

    // 2.Klasa će učiniti svoja svojstva dostupna putem get i set svojstava
    get ime(){return this.#ime}
    set ime(s){this.#ime=s}

    // konstruktor koji se poziva s ključnom rječju new
    constructor(ime=''){
        this.#ime=ime
    }
}

// I2: Objekt je pojavnost (istanca) klase
// varijabla osoba je instanca klase Osoba
const osoba = new Osoba()
osoba.ime = 'Pero' // ovdje se poziva set

console.log(osoba.ime) // ovdje se poziva get

const o = new Osoba('Marko')

console.log(o.ime)

// OOP princip nasljeđivanje
// Klasa će nasljediti metode nadklase, jedna klasa može nasljediti jednu klasu

class Polaznik extends Osoba{
    #odradioObaveze
    get odradioObaveze(){return this.#odradioObaveze}
    set odradioObaveze(b){this.#odradioObaveze=b}
    constructor(ime='', oo=false){
        super(ime) // ime osobe prosljeđujem konstruktoru klase Osoba, on će znati što s tim
        this.#odradioObaveze=oo
    }
}

// Čitanje o OOP principima


const p = new Polaznik('Karlo', false)

console.log(`${p.ime} ${p.odradioObaveze ? 'je' : 'nije'} odradio obveze`)

console.log(p)


class Predavac extends Osoba{
    #vrsta
    get vrsta(){return this.#vrsta}
    set vrsta(s){this.#vrsta=s }

    toString(){
        return `${this.vrsta} ${super.ime}`
    }
}

const pr = new Predavac()
pr.ime='Gordana'
pr.vrsta='Vanjska suradnica'

console.log(pr)
console.log(`${pr}`)


// metode u klasi se koriste na objektima, ne klasama
// metode u klasi se mogu koristiti i na klasama ali moraju biti static

console.log(Math.random())

class Pomocno{
    static slucajniBroj(){
        return Math.random()
    }
}

console.log(Pomocno.slucajniBroj())

