
// Generator funkcije: to su posebne vrste funkcija koje se mogu zaustaviti i nastaviti
// * označava da se radi o generator funkciji

function* primjerGenerator(){
    console.log('Početak rada generatora')
    yield true // 1. pauza
    yield 2.7 // 2. pauza
    yield 'Edunova'
    return 'Gotov'
}

// ovdje se funkcija ne izvršava
const generator = primjerGenerator() // konzola je prazna

console.log(generator.next().value) // next je poziv do prvo yield - true

// poziv na drugu pauzu
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

console.log('*******************************')

const g2 = primjerGenerator()

let g
do{
    g = g2.next()
    console.log(g.value)
}while(!g.done)


function* sljedeciID(){
    let id=1
    while(true){
        yield `ID_${id++}`
    }
}

const id = sljedeciID()

console.log(id.next().value)

console.log(id.next().value)

console.log('Nešto radim')

for(let i=0;i<10;i++){
    console.log(id.next().value)
}


function* razgovor(){
    let odgovor
    while(true){
        odgovor = yield 'Kako se zoveš'
        console.log(`Generator kaže: Drago mi je, ${odgovor}`)
    }
}

const chat = razgovor()

let pitanje = chat.next().value // pitanje  = 'Kako se zoveš'
console.log(pitanje)
pitanje = chat.next('Marko').value
console.log(pitanje)
console.log(chat.next('Marija').value)