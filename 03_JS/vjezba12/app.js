

const zadaci = {
  z1: (a, b) => {
    // 1. Ispiši apsolutnu vrijednost razlike brojeva A i B.
    console.log('Zadatak 1');
    // početak 1
    if(!a.trim()){
      rezultat.innerHTML = 'prazno polje a'
      return
    }
     if(!b.trim()){
      rezultat.innerHTML = 'prazno polje b'
      return
    }

    const broja = Number (a)
    const brojb = Number (b)
    if (!broja){
      rezultat.innerHTML='a nije broj'
      return
    }
     if (!brojb){
      rezultat.innerHTML='b nije broj'
      return
    }
    const razlika = broja-brojb
    // if(razlika<0){
    //   rezultat.innerHTML= razlika * -1
    // }else{
    //   rezultat.innerHTML= razlika
    // }
  
    // console.log(razlika)
    
    rezultat.innerHTML=math.abs(broja-brojb)


    // kraj 1
  },
  z2: (a, b) => {
    console.log('Zadatak 2');
    // početak 2
    rezultat.innerHTML = ''
    if (!a.trim()) {
      rezultat.innerHTML = 'prazno polje a'
    }
        if (!b.trim()) {
      rezultat.innerHTML = 'prazno polje b'
    }

    // vrijednosti su unesene
    const broja = Number(a)
    const brojb = Number(b)
    console.log(broja, brojb)
    if(!broja){
      rezultat.innerHTML = 'Nisi unio broj a'
      return
    }
      if(!brojb){
      rezultat.innerHTML = 'Nisi unio broj b'
      return
    }
    if (broja>brojab){
      rezultat.innerHTML = broja
    }else{
      rezultat.innerHTML = brojb
    }

    // kraj 2
  },
  z3: (a, b) => {
    console.log('Zadatak 3');
    // početak 3 
    if (a.trim() === '' || b.trim() === '') {
      rezultat.innerHTML = 'Unesite vrijednost'
      return
    }


    const brojA = Number(a)
    if (!brojA) {
      rezultat.innerHTML = ' A nije broj'
      return
    }

    if (brojA <1 || brojA > 100) {
       rezultat.innerHTML = 'Broj ne smije biti negativan i veci od 100'
       return
    }

    let divovi = ''
    for (let i = 0; i < brojA; i++){
      if (i % 2 === 0) {
        divovi += `
        <div style="background-color : ${b}">&nbsp;</div>
        `
      } else {
        divovi += '<div>&nbsp;</div>'
      }

    }
     





    // kraj 3
  },
  z4: (a, b) => {
    console.log('Zadatak 4');
    // početak 4

    // kraj 4
  },
  z5: (a, b) => {
    console.log('Zadatak 5');
    // početak 5

    // kraj 5
  }
  // ovdje dodajemo nove zadatke
}


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
