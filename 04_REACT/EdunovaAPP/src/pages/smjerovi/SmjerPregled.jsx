import { useEffect, useState } from "react"
import SmjerService from "../../services/smjerovi/SmjerService"
import { Button, Card, Container, Table } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"
import useBreakpoint from "../../hooks/useBreakpoint"
import SmjerPregledGrid from "./SmjerPregledGrid"
import SmjerPregledTablica from "./SmjerPregledTablica"
import GrupaService from "../../services/grupe/GrupaService"


export default function SmjerPregled() {

    const [smjerovi, setSmjerovi] = useState([])
    const navigate = useNavigate()
    const sirina = useBreakpoint();

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

    async function obrisi(sifra) {
        if (!confirm('Sigurno obrisati?')) return;

        // Provjeri da li je smjer korišten u grupama
        const grupeRezultat = await GrupaService.get();
        const grupeKojeKoristeSmjer = grupeRezultat.data.filter(grupa => grupa.smjer === parseInt(sifra));

        if (grupeKojeKoristeSmjer.length > 0) {
            alert(`Ne možete obrisati ovaj smjer jer je postavljen na ${grupeKojeKoristeSmjer.length} grupa/e. Prvo obrišite ili promijenite smjer u tim grupama.`);
            return;
        }


        await SmjerService.obrisi(sifra);
        await SmjerService.get().then((odgovor) => {
            setSmjerovi(odgovor.data)
        })
    }


    return (
        <>

            <Container className="visinaProgran">
                <Card className="shadow-sm" style={{ padding: '2rem' }}>

                    <Link to={RouteNames.SMJEROVI_NOVI}
                        className="btn btn-success w-100 my-3">
                        Dodavanje novog smjera
                    </Link>
                    {/* tableti prema manje */}
                    {['xs', 'sm', 'md'].includes(sirina) ? (
                        <SmjerPregledGrid
                            smjerovi={smjerovi}
                            navigate={navigate}
                            obrisi={obrisi}
                        />
                    ) : (
                        <SmjerPregledTablica
                            smjerovi={smjerovi}
                            navigate={navigate}
                            obrisi={obrisi}
                        />
                    )}
                </Card>
            </Container>

        </>
    )
}