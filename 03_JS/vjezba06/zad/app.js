const rez = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click',()=>{
    rez.innerHTML = ''
    const aString = document.getElementById('inputA').value
    const zad = Number(document.getElementById('zadatak').value)

    switch(zad){
        case 1:
            //počinje prvi zadatak
            if(!aString){
                rez.innerHTML='Obavezan unos'
                rez.style.color='red'
                return
            }

            switch(aString.toLowerCase().trim()){
                case 'start':
                    rez.innerHTML='Pokretanje programa'
                    rez.style.color='green'
                    break
                case 'stop':
                    rez.innerHTML='Zaustavljanje programa'
                    rez.style.color='yellow'
                    break
                case 'pauza':
                    rez.innerHTML='Pauziranje programa'
                    rez.style.color='antique'
                    break
                default:
                rez.innerHTML='Nedogovarajuća komanda'
                rez.style.color='red'
            }


            //završava prvi zadatak
            break
            case 2:
                // počinje drugi zadatak
                rez.innerHTML='2.zad'
                if(!aString){
                    rez.innerHTML='Obavezan unos'
                    rez.style.color='red'
                    return
                }

                if(aString.lenght>1){
                    rez.innerHTML='Unesi jedno slovo'
                    rez.style.color='red'
                    return
                }
            
                switch(aString.toLowerCase()){
                    case 'a':
                    case 'b':
                    case 'c':
                        rez.innerHTML='Položio'
                        rez.style.color='green'
                        break
                    case 'd':
                    case 'f':
                        rez.innerHTML='Nije položio'
                        rez.style.color='yellow'
                        break

                    
                    default:
                        rez.innerHTML='Unesi A, B, C, D, ili F'
                        rez.style.color='red'
                }

                // završava drugi zadatak
                break
    }
})








// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).


// 4. zadatak
// Za uneseno ime namirnice ispisi dali je voće ili meso ili nemozes odrediti
// npr. ulaz janjetina, svinjetina, teletina ispis Meso
// npr. ulaz jabuka, kruška, šljiva, jagoda ispis Voće
// npr. žablji kraci ispis Ne može se odrediti 

