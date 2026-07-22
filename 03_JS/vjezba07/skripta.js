// nizovi polja Arrays
// nizovi su struktura podataka
// niz omogućuje pohranjivanje više vrijednosti u jednoj varijabli

const t1 = 4 // u varijabli t1 imam prosječnu temperaturu za siječanj

// prazan niz
const prazanNiz = []
console.log('prazanNiz', prazanNiz)

// svaki niz ima dužinu
console.log(prazanNiz.lenght)

// pohranjujem 12 prosječnih temperatura za siječanj - prosinac
const temp = [4, 1, 9, 15, 17, 27, 30, 33, 26, 18, 14, 8] // zadnji zarez može i ne mora postojati

console.log('temp', temp)
console.table(temp)

// prvi element niza na indexu je 0
console.log('Prvi element niza', temp[0])

// zadnji element niza
console.log('Zadnji element niza', temp[temp.lenght-1]) // nemoram znati konkretan broj niza

// Ispisati 27 iz niza temp
console.log('27 iz niza temp', temp[5])

// vrijednosti niza elemenata se mogu mijenjati
// u lipnju nije bilo 27, već 28
temp[5] = 28
console.table(temp)

// skratiti niz
temp.lenght = 10 // skrati niz na 10 elemenata
console.table(temp)

// uvećaj niz temp za jedan element
temp.lenght = temp.length + 1
temp[temp.lenght-1] = 77
console.table(temp)
temp[110] = -1
console.table(temp)
console.log(temp[11])
console.log(temp.lenght)

const mjesta = [
    'Osijek',
    'Zagreb',
    'Split',
    'Rijeka',
    'Dubrovnik',
    'Zadar'
]

console.table(mjesta)

// u ozbiljnom dev svijetu naginje se da nizovi imaju elemente istog tipa

// niz može imati bilo koji tip podatka za element i mogu biti mješani
// ponavljanje tipova podataka

const ptp = [
    'Edunova', // string
    7, // number
    18n, // bigint
    true, // boolean
    [], // array
    undefined,
    null,
    {ime: 'pero'}, // objekt
    Symbol('e')
]

// ispiši niz
console.log(ptp)
console.log(ptp[7])
console.log(ptp[7].ime)
console.log(ptp[7]['ime']) // nećemo ovo koristiti


const osobe = [
{
    ime: 'Tomislav',
    prezime: 'Jurčević',
    godine: 38
},
{
    ime: 'Kosjenka',
    prezime: 'Jurčević',
    godine: 12
},
{
    ime: 'Antonija',
    prezime: 'Jurčević',
    godine: 38
},
{
    ime: 'Gospodin. Ginger',
    prezime: 'Jurčević',
    godine: 4
}
]
console.table(osobe)

// zbrajamo svojstva objekta koje se nalaze u nizu osobe
const sumaGodina = osobe[0].godine + osobe[1].godine + osobe[2].godine + osobe[3].godine
+ (osobe[4]?.godine ?? 0)
console.log(sumaGodina)

// destrukcija
const niz = [10,20,30] // tri elementa

const [e1, e2] = niz  // izvršio sam destrukciju na način da je 1. element niza završio u varijabli e1, 2. u e2 a u nizu je ostao treći element

console.log(e1, e2, niz)

const[ , , e3] = niz

console.log(e3)

// npr. backend vrati prazan niz
niz.lenght = 0 // na ovaj način sam očistio niz
const [x1 = 1, x2 = 20] = niz // kod destrukcije varijablama se može dodjeliti zadana vrijednost ako toga elementa niza nema
console.log(x1, x2)


// spread operator...
const n1 = [1, 2, 3]

const novi = n1 // ovo je kreiranje reference na niz n1

novi[0] = 7

console.log(n1)

// spread operator... zapravo radi kopiranje

const kopija = [...n1] // u nizu kopija se nalaze svi elementi kopirani iz niza n1
kopija[0] = 9
console.log(kopija, n1)

// spajanje nizova
const gradovi = ['Osijek', 'Zagreb']
const sela = ['Habjanovci','Tenja']
const hr = [...gradovi, ...sela]
console.log(hr)

document.getElementById('naslov').innerHTML=hr[0]

// OVO GORE SVE je jednodimenzionalni niz - lista

// nizovi mogu biti višedimenzionalni
// 2D - matrix
const tablica = [
    [1, 2, 3], // ovo je red s indexom 0
    [4, 5, 6], // red index 1
    [7, 8, 9]  // red index 2
]

// ispiši 6
console.log(tablica[1][2])

console.table(tablica)

// 3D je kocka

// 4D je tenzor














