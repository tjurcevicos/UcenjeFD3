// operatori

// vjezba 02 = == === <- operator dodjeljivanja

// aritmetički operatori
// + - * /

// ovdje može doći prompt s parseInt ili Number - ULAZ
const a=2, b=3 // deklariranje dvije varijable u jednoj liniji

let rez // undefined
// Algoritam
rez = a + b
// Izlaz
console.log('rez',rez) // ima vrijednost broja 5

// neću pokazivati primjere za - * /

// modluo operator (%)
// ostatak nakon cjelobrojnog djeljenja

// 9 % 2 =
// 4 * 2 = 8
// 9 - 8 = 1 <- rezultat

console.log('9 % 2',9 % 2) // 1  <-
console.log('8 % 2',8 % 2) // 0  <- rezultati

// modulo se najčešće koristi pri određivanju parnosti broja

// operatori dodjele

rez += 2 // kao i rez = rez + 2

console.log('rez+2', rez)

//debugger // <----- ne smije ostati u kodu, zaustavlja kod na točnoj toj liniji
rez = rez + 3

console.log('rez = rez + 3', rez)
// postoje i -=, *=, /=

// vjerovali ili ne rubrika
// najčešča operacija u programiranju je uvećanje varijable za 1

// načini uvaćanja varijable za 1
rez = rez + 1 // 11
rez += 1 // 12
rez++ // 13 ovaj način zapisa se nikada ne bi trebao koristiti sam u liniji

// inkrement ++
// dekrement --
// dvojaka uloga
// kada se koristi i kada se uvećava / smanjuje

let i = 0

// prvo koristi pa uvećaj
console.log('i++', i++) // 0

// prvo uvećaj pa koristi
console.log('++i', ++i) // 2 --> 1 + 1 daje 2 i onda to ispisuje

// isto sve vrijedi i za --

// ovo može biti na razgovoru za posao
//debugger
i = 2
let j = 1
i = j++ - i // 1 - 2    j=2, i = -1
j += --i - ++j  // i = -2 - 3 = -5, j = -3
console.log(i-j) // 1

// operatori uspređivanja == ===

// različito !=
console.log(5 != 4) // true
console.log('5' != 5) // false
console.log('5' !== 5) // true

// <, >, <=, >= operatori uspoređivanja
const godine = 18

console.log(godine > 18) // false
console.log(godine >= 18) // true

// logički operatori - rade na logičkom tipu podatka: boolean
const ispunjenUvjet = godine >=18

console.log('ispunjenUvjet', typeof ispunjenUvjet, ispunjenUvjet)

// AND, OR i NOT (I, ILI i NE)
// &&, || (Alt Gr + W) i !   -> u JS se ne smije koristiti & na boolean, rezerviran je za operacije nad bitovima

const imaNovaca = true

console.log('Može u disko', ispunjenUvjet && imaNovaca) // true jer vrijede pravila booleovi tablica

console.log(!imaNovaca)


//ternarni operator ?:
console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan')

// operator spajanja - nadoljepljivanja (concatination)
// +
// + je operator zbrajanja kada se radi o dva broja
// u svim ostalim situacijama + spaja
console.log('Marko ima ' + godine + ' godina') // Ovo nije baš najbolje

console.log(`Marko ima ${godine} godina`)

const x = '7', y =5
console.log(x + y) //75, slijepi zato što je string

// spread operator - operator proširivnja (...)

const niz = [2,1] // konstanta koja se ne može mijenjati

console.table(niz)

const noviNiz = [0, ...niz, 3] 

console.table(noviNiz)

const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
}

const polaznik = {
    ...osoba,
    edukacija: 'FD'
}

// suprotno od proširivanja (...) je destructing operator
const [prvi,drugi] = [1,2] // dobijemo varijable prvi i drugi koje imaju vrijednosti 1 i 2

console.log(prvi, drugi)

const {prezime, ...meniBitno} = polaznik
// prezime je otpadak - ne treba ali je način da iz polaznika maknem prezime

console.log(meniBitno) // imam ime i edukacija, bez prezimena

//nullish calescing operator (??)
// ako je verijednost varijable null ili undefined koristi nešto drugo

let sifra

console.log(sifra ?? 'Šifra nije postavljena')

sifra=1

console.log(sifra ?? 'Šifra nije postavljena')

// optional chaining operator ?.

// idemo vidjeti što radi točka (.)

const korisnik = {
    adresa: {
        grad: 'Osijek',
        ulica: 'Trg'
    }
}

console.log(korisnik.adresa.grad) //Osijek

console.log(korisnik?.adresa?.ulica?.toUpperCase() ?? 'Nije postavljeno')

// koristiti ćemo ove operatore u nastavi























