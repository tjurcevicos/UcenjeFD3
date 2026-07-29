const rezultat = document.getElementById("rezultat");
document.getElementById("izvedi").addEventListener("click", () => {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const zadatak = document.getElementById("zadatak").value;

  switch (zadatak) {
    case "1":
      // rješavanje 1. zadatak
      //1. Za uneseni cijeli broj u polje A veći od 2 i manji od 10M ispiši da li je prim (prosti) broj ili ne.

      console.time("prim");

      const broj = parseInt(a);

      if (!broj) {
        rezultat.innerHTML = "Nije unesen broj!";
        return;
      }

      if (broj < 2 || broj > 10000000) {
        rezultat.innerHTML = "Broj nije u rasponu 2 do 10M";
        return;
      }

      let prim = true; // moja pretpostavka je takva da je dani broj prim
      // moj kod će ići u smjeru da dokažem kako nije prim
      // moj dokaz je taj da kada nažem prvi broj koji je cjelobrojno djeljiv (ostatak 0) prekidam izvođenje

      for (let i = 2; i < broj; i++) {
        console.log("Obrađujem", i, "/", broj);
        if (broj % i === 0) {
          prim = false;
          break;
        }
      }

      if (prim) {
        rezultat.innerHTML = "PRIM";
      } else {
        rezultat.innerHTML = "NIJE prim";
      }

      console.timeEnd("prim");

      /*

      6 % 2 = 0
      6 % 3 = 0
      6 % 4 = 2
      6 % 5 = 1

      6 nije prim broj

      7 % 2 = 1
      7 % 3 = 1
      7 % 4 = 3
      7 % 5 = 2
      7 % 6 = 1

      7 je prim broj

      */

      // kraj rješavanje 1. zadatak
      break;
    case "2":
      
      // rješavanje 2. zadatak

      // Za uneseni cijeli broj u polje B veći od 2 i manji od 1000 ispiši da li je savršen broj ili ne.

      /*

      6 % 1 = 0 + 1
      6 % 2 = 0 + 2
      6 % 3 = 0 + 3
      6 % 4 = 2
      6 % 5 = 1
      1 + 2 + 3 = 6 -zato je 6 savršen broj

      5 % 1 = 0 + 1
      5 % 2 = 1
      5 % 3 = 2
      5 % 4 = 1
      1 != 5 -zato 5 nije savršen broj

      */

      // kraj rješavanje 2. zadatak
      break;
    case "3":
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
      break;
    case "4":
      // rješavanje 4. zadatak
      // rješavanje 4. zadatak
      // 4. Za unesenu riječ u polje A provjerite da li je palindrom ili ne
      // Ružan Edo ode na žur
      // ružanedoodenažur


      let p = ''
// prvo čistim razmake i sve svodim na mala slova
      for(let i=0; i< a.length; i++){
        if(p[i] !== ' '){
           p += a[i].toLowerCase()
        }
      }

      let palindrom = true

      for(let i = 0; i<p.length / 2; i++){
        if(p[i] !== p[p.length - 1 - i ]){
          palindrom = false
          break
        }
      }

      rezultat.innerHTML = palindrom ? 'JE palindrom' : 'NIJE palindrom'



      // kraj rješavanje 4. zadatak
      break;
    case "5":
      // rješavanje 5. zadatak

      // kraj rješavanje 5. zadatak
      break;
    case "6":
      // rješavanje 6. zadatak

      // kraj rješavanje 6. zadatak
      break;
    case "7":
      // rješavanje 7. zadatak

      // kraj rješavanje 7. zadatak
      break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }
});
const poveznica = document.getElementById("poveznica");
poveznica.href = "https://enciklopedija.hr/clanak/primbrojevi";
document.getElementById("zadatak").addEventListener("change", (event) => {
  switch (event.target.value) {
    case "1":
      poveznica.href = "https://enciklopedija.hr/clanak/primbrojevi";
      break;
    case "2":
      poveznica.href = "https://www.enciklopedija.hr/clanak/savrseni-broj";
      break;
    case "3":
      poveznica.href =
        "https://hafura.wordpress.com/2017/09/13/armstrongov-broj-ispitni-zadatak/";
      break;
    case "4":
      poveznica.href = "https://www.enciklopedija.hr/clanak/palindrom";
      break;
    case "5":
      poveznica.href = "https://www.coursera.org/articles/what-are-stop-words";
      break;
    case "6":
      poveznica.href = "https://enciklopedija.hr/clanak/samoglasnik";
      break;
    case "7":
      poveznica.href =
        "https://hjp.znanje.hr/index.php?show=search_by_id&id=d1ZlWhU%3D";
      break;
    default:
      poveznica.href = "#";
  }
});

const stopRijeci = [
  "a",
  "ako",
  "ali",
  "bi",
  "bih",
  "bila",
  "bili",
  "bilo",
  "bio",
  "bismo",
  "biste",
  "biti",
  "bumo",
  "da",
  "do",
  "duž",
  "ga",
  "hoće",
  "hoćemo",
  "hoćete",
  "hoćeš",
  "hoću",
  "i",
  "iako",
  "idemo",
  "ideš",
  "ide",
  "iz",
  "iza",
  "iznad",
  "ja",
  "jako",
  "jer",
  "jesmo",
  "jeste",
  "jesu",
  "je",
  "kad",
  "kada",
  "kao",
  "kroz",
  "li",
  "me",
  "mene",
  "meni",
  "mi",
  "mimo",
  "mene",
  "moj",
  "moja",
  "moje",
  "mu",
  "na",
  "nad",
  "nakon",
  "nam",
  "nama",
  "nas",
  "naš",
  "naša",
  "naše",
  "našu",
  "ne",
  "nego",
  "neka",
  "neki",
  "nekog",
  "neko",
  "nema",
  "netko",
  "neće",
  "nećemo",
  "nećete",
  "nećeš",
  "neću",
  "ni",
  "nije",
  "nijedan",
  "nikad",
  "nismo",
  "niste",
  "nisu",
  "njega",
  "njegov",
  "njegova",
  "njegovo",
  "njemu",
  "njen",
  "njena",
  "njeno",
  "njih",
  "njihov",
  "njihova",
  "njihovo",
  "njim",
  "njima",
  "njoj",
  "nju",
  "o",
  "od",
  "odmah",
  "on",
  "ona",
  "onaj",
  "onam",
  "onamo",
  "one",
  "oni",
  "ono",
  "onolika",
  "onoliko",
  "onoliki",
  "onoliku",
  "ova",
  "ovaj",
  "ovdje",
  "ove",
  "ovi",
  "ovo",
  "ovuda",
  "pa",
  "pak",
  "po",
  "pod",
  "pored",
  "poslije",
  "povrh",
  "preko",
  "pri",
  "pred",
  "prema",
  "sa",
  "sam",
  "samo",
  "se",
  "sebe",
  "sebi",
  "si",
  "smo",
  "ste",
  "su",
  "sve",
  "svi",
  "svog",
  "svoj",
  "svoja",
  "svoje",
  "ta",
  "taj",
  "tako",
  "tamo",
  "te",
  "tebe",
  "tebi",
  "ti",
  "to",
  "točno",
  "u",
  "uz",
  "vam",
  "vama",
  "vas",
  "vaš",
  "vaša",
  "vaše",
  "već",
  "vi",
  "vrlo",
  "za",
  "zar",
  "će",
  "ćemo",
  "ćete",
  "ćeš",
  "ću",
  "što",
  "the",
  "and",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "but",
  "if",
  "or",
  "because",
  "as",
  "until",
  "while",
  "of",
  "at",
  "by",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
];
