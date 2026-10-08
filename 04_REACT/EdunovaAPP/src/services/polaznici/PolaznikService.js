import { DATA_SOURCE } from "../../constants"
import PolaznikServiceLocalStorage from "./PolaznikServiceLocalStorage"
import PolaznikServiceMemorija from "./PolaznikServiceMemorija"


let Servis = null

switch (DATA_SOURCE) {
    case 'memorija':
        Servis = PolaznikServiceMemorija
        break
    case 'localStorage':
        Servis = PolaznikServiceLocalStorage
        break
    default:
        Servis = null
}

const PrazanServis = {
    get: async () => ({ data: [] }),
    dodaj: async (smjer) => { console.log('Servis nije implementiran') },
    getBySifra: async (sifra) => ({ data: {} }),
    promijeni: async (sifra, smjer) => { console.error('Servis nije implementiran') },
    obrisi: async (sifra) => { console.error('Servis nije implementiran') },
}

const AktivniServis = Servis || PrazanServis


export default {
    get: () => AktivniServis.get(),
    dodaj: (smjer) => AktivniServis.dodaj(smjer),
    getBySifra: (sifra) => AktivniServis.getBySifra(sifra),
    promijeni: (sifra, smjer) => AktivniServis.promijeni(sifra,smjer),
    obrisi: (sifra) => AktivniServis.obrisi(sifra)
}