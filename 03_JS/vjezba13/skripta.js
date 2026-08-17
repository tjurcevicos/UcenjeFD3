// // Try Catch je mehanizam osiguranja da nam program ne pukne na način da nam omogući obradu iznimke (greške)


// console.log('Početak')

// const i = 7

// const rezultat = i + varijabla

// console.log(rezultat)

// console.log('Kraj')

try{
// ovdje se uvijek ulazi
console.log('Početak')
const i = 7
const rezultat = i + varijabla
console.log(rezultat)
}catch(e){
// ovdje završim ako se dogodi greška bačena greška
console.log('Greška', e.name, e.message, e)
}
console.log('Kraj')

// 2.primjer

// opcionalna sintaksa ima još i finally

console.log('2.primjer')
const i = 7
let rezultat = 0

try{
    // uvijek se izvodi
rezultat = i + varijabla
}catch{
    // uvijek se izvodi u slučaju greške u try
rezultat = i + 1
}finally{
    // uvijek izvodi 
    console.log(rezultat)
}
console.log('Kraj 2. primjer')

// provociramo grešku

function korjen(broj){
    if(broj<-1){
        // bacamo pogrešku
        throw new Error('Ne mogu izvaditi 2. korjen')
    }
    return Math.sqrt(broj)
}

try {
    console.log(korjen(-9))
} catch (e) {
    console.log(e.message)
}


// zgodan primjer - loša sintaksa

function rekurzija(){
    let a = 1, b = 2, c = 3, d = 4, e = 5
    let f = 'Neki dugački tekst koji zauzima prostor'
    brojac++
    rekurzija()
}

let brojac = 0

console.time('rekurzija')
try {
    rekurzija()
} catch (error) {
    console.log('Stog napunjen na:', brojac)
}
console.timeEnd('rekurzija')
