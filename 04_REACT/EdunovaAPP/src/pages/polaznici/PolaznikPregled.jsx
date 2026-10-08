import { useEffect, useState } from "react"
import PolaznikService from "../../services/polaznici/PolaznikService"
import { Button, Table } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"


export default function PolaznikPregled() {

    const [polaznici, setPolaznici] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        //console.log('Došao na pregled polaznikova')
        ucitajPolaznike()
    }, [])

    async function ucitajPolaznike() {
        await PolaznikService.get().then((odgovor) => {
           // console.log(JSON.stringify(odgovor.data))
            setPolaznici(odgovor.data)
        })
    }

    async function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return
        }
        await PolaznikService.obrisi(sifra)
        ucitajPolaznike()
    }


    return (
        <>
            <Link to={RouteNames.POLAZNICI_NOVI}
            className="btn btn-success w-100 my-3">
                Dodavanje novog polaznika
            </Link>
            <Table hover striped bordered>
                <thead>
                    <tr>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>OIB</th>
                        <th>Email</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {polaznici && polaznici.map((polaznik) => (
                        <tr key={polaznik.sifra}>
                            <td>{polaznik.ime}</td>
                            <td>{polaznik.prezime}</td> 
                            <td>
                                {polaznik.oib} 
                            </td>
                            <td>
                                {polaznik.email} 
                            </td>
                            <td>
                                <Button onClick={()=>{navigate(`/polaznici/${polaznik.sifra}`)}}>
                                    Promjeni
                                </Button>
                                &nbsp;&nbsp;
                                <Button variant="danger" onClick={()=>obrisi(polaznik.sifra)}>
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