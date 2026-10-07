import { useEffect, useState } from "react"
import SmjerService from "../../services/smjerovi/SmjerService"
import { Button, Table } from "react-bootstrap"
import { GrValidate } from "react-icons/gr"
import { FcApproval, FcDisapprove } from "react-icons/fc"
import { NumericFormat } from "react-number-format"
import FormatDatuma from "../../components/FormatDatuma"
import { Link, useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"


export default function SmjerPregled() {

    const [smjerovi, setSmjerovi] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        //console.log('Došao na pregled smjerova')
        ucitajSmjerove()
    }, [])

    async function ucitajSmjerove() {
        await SmjerService.get().then((odgovor) => {
            //console.table(odgovor.data)
            setSmjerovi(odgovor.data)
        })
    }

    async function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return
        }
        await SmjerService.obrisi(sifra)
        ucitajSmjerove()
    }


    return (
        <>
            <Link to={RouteNames.SMJEROVI_NOVI}
            className="btn btn-success w-100 my-3">
                Dodavanje novog smjera
            </Link>
            <Table hover striped bordered>
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Trajanje</th>
                        <th>Cijena</th>
                        <th>Datum pokretanja</th>
                        <th>Aktivan</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {smjerovi && smjerovi.map((smjer) => (
                        <tr key={smjer.sifra}>
                            <td className="lead">{smjer.naziv}</td>
                            <td className="text-end">{smjer.trajanje /* text-end dolazi iz bootstrap */}</td> 
                            <td className="desno">  {/* desno dolazi iz mog CSS-a */}
                                <NumericFormat
                                    value={smjer.cijena}
                                    displayType={'text'}
                                    thousandSeparator='.'
                                    decimalSeparator=','
                                    decimalScale={2}
                                    fixedDecimalScale
                                    suffix=' €'
                                    prefix='='
                                />
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                <FormatDatuma datum={smjer.datumPokretanja} />
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                {/* {smjer.aktivan ? 'DA' : 'NE'} */}
                                {/* Primjer jedne ikone s različitom bojom u osnosu na boolean svojstvo */}
                                <GrValidate
                                    color={smjer.aktivan ? 'green' : 'red'}
                                    size={25}
                                />

                                {/* Primjer različitih ikona u osnosu na boolean svojstvo */}
                                {/*smjer.aktivan ? (
                                    <FcApproval size={25} />
                                ) : (
                                    <FcDisapprove size={25} />
                                )*/}

                            </td>
                            <td>
                                <Button onClick={()=>{navigate(`/smjerovi/${smjer.sifra}`)}}>
                                    Promjeni
                                </Button>
                                &nbsp;&nbsp;
                                <Button variant="danger" onClick={()=>obrisi(smjer.sifra)}>
                                    Obriši
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* <pre>
                {JSON.stringify(smjerovi,null,2)}
            </pre> */}

        </>
    )
}