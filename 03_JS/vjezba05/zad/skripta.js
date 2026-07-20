const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click',()=>{
    // ovaj kod će se izvoditi svaki puta kada korisnik klikne na gumb Izvedi
    // resetirati ću rezultat
    rezultat.innerHTML=''

    // varijable koje je korisnik unio
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    // koji je odabrani zadatak
    const zadatak = document.getElementById('zadatak').value

    if(zadatak=== '1') {
        // početak 1. zadatka
        const a = Number(aString)
        // osiguravam da korisnik mora unjet brojeve

        if(!a){
            rezultat.innerHTML='A nije broj'
            rezultat.style.color='red'
            return // prekida izvoženje click funkicje i to se zove shortcuircuiting
        }

        const b = Number(bString)
        if(!b){
            rezultat.innerHTML='B nije broj'
            rezultat.style.color='red'
            return
        }

        // ja ovdje kao programer sam siguran da su A i B brojevi
        rezultat.innerHTML = a >= b ? a : b
        rezultat.style.color='green'

        // kraj 1. zadatka
    }




    if (zadatak === '2') {
        // početak 2. zadatka

        // kraj 2. zadatka
    }

        if (zadatak === '3') {
        // početak 3. zadatka

        // kraj 3. zadatka
    }




})
