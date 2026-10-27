import { useEffect, useState } from "react"
import GrupaService from "../../services/grupe/GrupaService"
import SmjerService from "../../services/smjerovi/SmjerService"
import { Button, Table } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"


export default function GrupaPregled() {

    const [grupe, setGrupe] = useState([])
    const [smjerovi, setSmjerovi] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        ucitajSmjerove()
        ucitajGrupe()
    }, [])

    async function ucitajGrupe() {
        await GrupaService.get().then((odgovor) => {
           // console.log(JSON.stringify(odgovor.data))
            setGrupe(odgovor.data)
        })
    }

    async function ucitajSmjerove() {
        await SmjerService.get().then((odgovor) => {
           // console.log(JSON.stringify(odgovor.data))
            setSmjerovi(odgovor.data)
        })
    }

    async function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return
        }
        await GrupaService.obrisi(sifra)
        ucitajGrupe()
    }

    function dohvatiNazivSmjera(sifraSmjera){
        const smjer = smjerovi.find(s => s.sifra === sifraSmjera)
        return smjer.naziv
    }


    return (
        <>
            <Link to={RouteNames.GRUPE_NOVI}
            className="btn btn-success w-100 my-3">
                Dodavanje nove grupe
            </Link>
            <Table hover striped bordered>
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Smjer</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {grupe && grupe.map((grupa) => (
                        <tr key={grupa.sifra}>
                            <td>{grupa.naziv} <span title="Broj polaznika">({grupa.polaznici.length})</span></td>
                            <td>{dohvatiNazivSmjera(grupa.smjer)}</td> 
                            <td>
                                <Button onClick={()=>{navigate(`/grupe/${grupa.sifra}`)}}>
                                    Promjeni
                                </Button>
                                &nbsp;&nbsp;
                                <Button variant="danger" onClick={()=>obrisi(grupa.sifra)}>
                                    Obriši
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}