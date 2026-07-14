const ime = "Pero";

console.log(ime);

console.log(typeof ime);

console.log("ime", typeof ime, ime);

console.log(`Dobar dan ${ime}!`);

const unosGodina = "2026";

const godina = Number(unosGodina);

console.log(
  "unosGodina",
  typeof unosGodina,
  unosGodina,
  "godina",
  typeof godina,
  godina,
);

const pi = parseFloat("3.14");

console.log("pi", typeof pi, pi);

const logickaVrijednost = true;

console.log("logickaVrijednost", typeof logickaVrijednost, logickaVrijednost);

//logickaVrijednost=false ne možemo mijenjati const

//drugi način deklariranja prave varijable
let broj = 7;
console.log("broj", typeof broj, broj);

//let broj = 8
broj = 8;
console.log("broj", typeof broj, broj);

broj = "Osijek";
console.log("broj", typeof broj, broj);

var x = 8;
console.log("var x", typeof x, x);
x = "8";
console.log("x", typeof x, x);
var x = true;
console.log("x", typeof x, x);

const velikiBroj = 342625672724572457n;
console.log("velikiBroj", typeof velikiBroj, velikiBroj);

let varijabla;

console.log("varijabla", typeof varijabla, varijabla); // undefiend je i tip i vrijednost

varijabla = 7;
console.log("varijabla", typeof varijabla, varijabla);

// JSON - JavaScript Object Notation
const osoba = {
  id: 1,
  ime: "Pero",
  placa: 2345.99,
  zaposlen: true,
};

console.log("osoba", typeof osoba, osoba);
console.table(osoba);

//Array, niz, polja  - a JS to zove object
const niz = [1, 22, 3, 7, 8]; //AltGR + F


console.log('niz', typeof niz, niz)
console.table(niz)

const json = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
console.table(json)


// u JS je i funkcija tip podatka

// stari način definiranja funkcicje
function pozdrav(){
    console.log('Pozdrav iz funkcije!')
}

console.log('pozdrav', typeof pozdrav, /*,pozdrav*/) // primjer komentara u sintakse
// poziv funkicje
pozdrav()


// novi nalin definiranja funkcije
const pozdravi = () => console.log('Pozdrav iz nove funkcije')

console.log('pozdravi', typeof pozdravi)
pozdravi()

// Ovo nećemo nikada koristiti

const id1 = Symbol('Edunova') // Edunova je opis, ali je vrijednost jedinstvena
const id2 = Symbol('Edunova')

console.log('id1', typeof id1, id1)
console.log('id2', typeof id2, id2)

//danas smo koristili =
// = je operator dodjeljivanja

// operator usporedbe == i ===
//== usporedba po vrijednosti
//=== usporedba po vrijednosti i po tipu podataka
console.log('7' == 7) // true
console.log('7' === 7) // false
console.log(7 === 7) // true

console.log(id1 == id2) //false
console.log(id1 === id2) //false


