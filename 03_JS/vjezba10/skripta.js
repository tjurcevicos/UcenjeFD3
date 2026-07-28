//while petlja
// radi s boolean tipom podatka
// sve dok je true ostaje u petlji

// beskonačna petlja

while(true){
    console.log('Edunova')
    break
}

// continue i break rade isto kao u for

let brojac = 0

console.time('while petlja')
let suma = 0

while(brojac++ < 100){
  //  console.log(brojac) // 1,2,3 ... 100
  //  if(brojac % 10 === 0){
  //      console.log(brojac)
  //  }
  suma += brojac
}

console.timeEnd('while petlja')
console.log(suma)

let brojUnos = '1262' // simuliram da je ovo unio korisnik = 11

console.time('ZB1')

suma = 0

for(let i = 0; i<brojUnos.length; i++){
 suma += Number(brojUnos[i]) // ovo se izvede 4 puta
}

console.timeEnd('ZB1')
console.log(suma)

console.time('ZB2')

let broj = Number(brojUnos) // ovo se izvodi jednom

suma=0

while(broj>0){
suma += broj % 10     // 1262 ----> 2 | 126 -> 6 | 12 -> 2 | 1 -> 1
broj = broj - (broj % 10) // 1262 - 2 = 1260 | 126 - 6 = 120 | 12 - 2 = 10 | 1 - 1 = 0
broj /= 10 // 126 | 12 | 1  | 0
}
console.timeEnd('ZB2')
console.log(suma)

// 1261 % 10 = 2
// 1262 / 10 = 126 cjelobrojno, 126 * 10 = 1260 - 1260 = 2

// 126 % 10 = 6
// 126 / 10 = 12 cjelobrojno, 12 * 10 = 120, 126 - 120 = 6

// 12 % 10 = 2

// 1 % 10 = 1

// Big 0 notacija

// činjenica: u petlje se ne mora ući (for, while)
const x = 5

for(let i = 0; i > x; i++){
    console.log('Ušao u petlju')
}



const podaciApi = [

    {
        ime: 'Pero'
    },
    {
        ime: 'Marko'
    },
    {
        ime: 'Marija'
    }
]

while(podaciApi.length>0){
    // funkicja pop() uzima prvi element iz niza i skračuje niz za taj element smani lenght
    console.log('Ušao u petlju', podaciApi.pop()?.ime)
}
