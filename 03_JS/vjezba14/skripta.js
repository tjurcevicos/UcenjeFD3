// funkcionalne metode - skraćuju kod, danas se standardno koriste

// prvo nam trebaju podaci

const korisnici=[
    {
       id: 1,
       ime: 'Ana',
       prezime: 'Kartek',
       godine: 25,
       admin: false // na zadnje svojstvo ne mora ali može doći , 
    },
        {
       id: 2,
       ime: 'Karlo',
       prezime: 'Totig',
       godine: 29,
       admin: false // na zadnje svojstvo ne mora ali može doći , 
    },
        {
       id: 3,
       ime: 'Marko',
       prezime: 'Ćutić',
       godine: 45,
       admin: true // na zadnje svojstvo ne mora ali može doći , 
    },
            {
       id: 4,
       ime: 'Nikola',
       prezime: 'Ćutić',
       godine: 49,
       admin: true // na zadnje svojstvo ne mora ali može doći , 
    },
            {
       id: 5,
       ime: 'Žana',
       prezime: 'Đitko',
       godine: 18,
       admin: false // na zadnje svojstvo ne mora ali može doći , 
    }
]

console.table(korisnici)

// forEach() - zamjenjuje (skraćuje) for petlju

for(let i = 0; i < korisnici.length; i++){
    console.log(korisnici[i].ime)
}

console.log('**********************')

korisnici.forEach(korisnik => console.log(korisnik.ime))

console.log('**********************')

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))

console.log('**********************')

korisnici.forEach(o => {
    let oslovi = 'Poštovan'
    if(o.ime.endsWith('')){
        oslovi += 'a gospođo'
    }else{
        oslovi += 'i gospodine'
        console.log(`${oslovi} ${o.ime} ${o.prezime}`)
    }
})
korisnici.forEach(o => console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime} ${o.prezime}`))

console.log('**********************')

//map()
// Želim iz niza korisnici napraviti novi niz koji ima samo imena

const samoImena = korisnici.map( o => o.ime)

console.table(samoImena)

korisnici.map(o => o.ime).forEach(ime => console.log(ime))

console.log('**********************')

const ip = korisnici.map(o => o.ime + ' ' + o.prezime)

console.table(ip)

console.log('**********************')

const maliNiz = korisnici.map(({id, ime, prezime}) => ({šifra: id, osoba: ime + ' ' + prezime}))

console.table(maliNiz)

console.log('**********************')

// find()

console.log(korisnici.find(o => o.id === 2)?.ime ?? '')

// traži po imenu i prezimenu

console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id)

// findIndex()

console.log(maliNiz.findIndex(o => o.sifra === 100)) // -1 znači da ne postoji

// filter()

console.table(korisnici.filter(o => o.godine > 40))

// reduce()

console.log(korisnici.reduce((suma, o) => suma + o.godine, 0)) // 0 je početna vrijednost sume

// some()
console.log(korisnici.some(o => o.admin) ? 'Ima admina' : 'Nema admina')

// every()

console.log(korisnici.every(o => o.godine >= 18) ? 'Svi su punoljetni' : 'Nisu svi punoljetni')

