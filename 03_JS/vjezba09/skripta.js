// ponavljanje (iteracije) odnosno (petlje) odnosno (loops)

// u konzolu ispisati 10 puta edunova 

console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");

// Ovo gore nije dobro riješenje
// Klasična for petlja

// for (inicijalna vrijednost brojača); uvijet izlaska iz petlje; uvečanje umanjenje

console.log('==================')

// riješenje zadatka

for(let i=0;i<10;i++){
    console.log('Edunova')
}

console.log('==================')

// unutar petlje "i" mijenja vrijednost

for(let i=0;i<10;i++){
    console.log(`i=${i+1}`)
}

console.log('==================')

let suma=0

// odradio je 100 iteracija 
for(let i=0;i<100;i++){
    suma += i+1
    //debugger
}

console.log(suma) // 5050

console.log('==================')
// nekoliko primjera šetanja petlje

for(let i=10;i>0;i--){
    console.log(i)
}

console.log('==================')


// manji prema većem za 2

for(let i=7; i<20; i+=2){
    console.log(i)
}

console.log('==================')
// simuliram unos korisnika

const pocetak = 7
const kraj = 20
const uvecanje = 2

for(let i=pocetak; i<kraj; i+=uvecanje){
    console.log(i)
}

console.log('==================')

// ugnježđivanje petlje

document.write('<table>')
for(let i=1;i<=10;i++){
    document.write('<tr>')

    for(let j=1;j<=10;j++){
        document.write(`<td>${i*j}</td>`)
    }

    document.write('</tr>')

}

 document.write('</table>')

 // petlju možemo preskočiti i nasilno prekinuti

for(let i=0;i<10;i++){
    if(i===3){
        continue //nastavlja, preskače petlju
    }

    if(i===7){
        break // nasilno prekida
    }

    console.log(i)
}

console.log('==================')

const niz = [1,2,3,4,5,6,7]

// ispisati sve elemente niza
for(let i=0;i<niz.lenght;i++){
    console.log(niz[i])
}


// ispisati od zadnjeg prema prvog
for(let i= niz.length-1;i>=0;i--){
    console.log(niz[i])
}
console.log('==================')
// string je niz znakova

const ime = 'Nina'
for(let i=0;i<ime.length;i++){
    console.log(ime[i])
}


console.log('==================')

// beskonačna petlja
const spavaj = (ms) => new Promise(r => setTimeout(r, ms))

async function odradi(){
for(;;){
    document.getElementById('lista').innerHTML
    = '<li>' + (Math.floor(Math.random()*1000)+1) + '</li>'
    + document.getElementById('lista').innerHTML
    await spavaj(500)
    break
}
}

odradi()
