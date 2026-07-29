const isDev = true // za potrebe developmenta treba biti true

// funkcija je skup naredbi s određenom svrhom, s ciljem višestrukog poziva
// DRY - dont repeat yourself

// "klasične" funkcije

// 2 koraka rada s funkicijama: definicija i pozivanje

// redosljed definicije i pozivanja nije bitan

// 1. ne prima vrijednost i ne vraća vrijednost

// 1.1. definiranje
// u () se nalaze parametri, ova ne prima parametre
// u tijelu nema return nekog tipa, ova je tipa void
function odradi(){
    console.log('Poziv funkcije odradi 1.1.')
}

// 1.2. poziv funkcije odradi
odradi()

document.getElementById('gumb2').addEventListener('click',odradi)

// korištenje bezimene funkcije
document.getElementById('gumb3').addEventListener('click',function(){
console.log('Poziv iz bezimene funkcije')

})

// 2. Prima parametre ne vraća vrijednost (nema return, ne vraća vrijednost)

// 2.1. definicija
function parniBrojevi(odBroja, doBroja){ // odBroja, doBroja su parametri. Odvajaju se zarezom (,)
    for(let i=odBroja; i<=doBroja; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

}

// 2.2. poziv
parniBrojevi(2,12)
parniBrojevi(127,134)

// korisni primjer 2. vrste funkcije

function log(poruka){
    if(!isDev){
        return // ako nije dev izađi iz funkcije van - short curcuiting
    }
    console.log('\n') // backslash altgr + q \\\\ | prelazi u novi red
    console.log('+---------------------------+')
    console.log(poruka)
    console.log('+---------------------------+')
}


log('Prva poruka, testiranje')

log('Osijek')

// 3. ne prima parametre, vraća vrijednost

// 3.1. definicija
/**
 * Funkcija daje slučajni broj. Ako su dva parametra poslana, daje slučajni broj između njih
 * Ako je jedan parametar poslan daje slučajni broj od 0 do tog parametra
 * Ako nije poslan niti jedan parametar daje slučajni broj od 0 do 1
 * @param {*} odBroja 
 * @param {*} doBroja 
 * @returns slučajni broj
 */

function slucajniBroj(odBroja=0, doBroja=0){ // prazna zagrada znači da ne prima parametre, = daje zadanu vrijednost, to su opcionalni parametri
   if(odBroja && doBroja){
    return (Math.random()*(doBroja - odBroja) + odBroja).toFixed(0)
   }
   

   if(odBroja){
    return (Math.random()*odBroja).toFixed(0) 
   }
   

    return Math.random()
}

// 3.2 poziv

// funkcije koje vraćaju vrijednost kod poziva čiji se rezultat ne koristi se izvedu i "bace u vjetar"
slucajniBroj()

// varijabli sb dodjeljujem rezultat izvoženja funkcije slucajniBroj
const sb = slucajniBroj()

log(sb)

// korištenje funkcije unutar parametra druge funkcije
log(slucajniBroj())

for(let i=0; i<6; i++){
    log(slucajniBroj(1,45)) // zovem funkicju slucajniBroj s dva parametra
}

log(slucajniBroj(20))

// 4. prima parametre vraća vrijednost

// 4.1. definicija
function zbrojPrimBrojeva(odBroja, doBroja){
    let suma=0, prim=true
    for(let i=odBroja; i<=doBroja; i++){
       if(i<2){
        continue
       } 

       prim=true
       for(let j = 2; j < i; j++){
        if(i % j === 0){
            prim=false
            break
        }
       }

       if(prim){
        suma += i
       }

    }
    return suma
}

// 4.2. poziv

log(zbrojPrimBrojeva(-2,10)) // 17 treba biti rezultat

log(zbrojPrimBrojeva(100,120))

const ime = 'pero'

// slučaj 4
log(ime.charCodeAt(0))
log(ime.charCodeAt(1))
log(ime.charCodeAt(2))
log(ime.charCodeAt(3))

// slučaj 3
log(ime.toLocaleUpperCase())

// slučaj 2
console.log('slučaj 2')

// slučaj 1
// obrada događaja na stranici

// rekurzija
// rekurzija je kada funkicja zove samu sebe uz uvijet prekida rekurzije
// u rekurziji moramo paziti na stackovarflow

function zbroj(broj){
    if(broj===1){ // ovo je uvijet prekida rekurzije
        return 1
    }
    return broj + zbroj(broj - 1)
}

// hello() arrow funkcijama ne možemo pristupiti prije inicijaliziranja

log(zbroj(100))

// "moderne" funkcije - arrow function

const hello = () => log('Hello iz arrow')

hello()

const brojevi = (a,b) => {
    return [a,3,b]
}

log(brojevi(1,2))

// potrebno ; prije, to je IIFE
;(()=>{
    console.log('Kreirana funkcija i odmah izvedena')
})()