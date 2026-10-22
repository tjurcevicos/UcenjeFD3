import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import GrupaService from "../../services/grupe/GrupaService";
import SmjerService from "../../services/smjerovi/SmjerService";
import { useEffect, useState } from "react";


export default function GrupaNovi() {

    const [smjerovi, setSmjerovi] = useState([])

    useEffect(()=>{
        ucitajSmjerove()
    },[])

    async function ucitajSmjerove(){
        await SmjerService.get().then((odgovor)=>{
            setSmjerovi(odgovor.data)
        })
    } 

    const navigate = useNavigate()

    async function dodaj(grupa) {
        await GrupaService.dodaj(grupa).then(() => {
            navigate(RouteNames.GRUPE)
        })
    }

    function odradiSubmit(e) { // e je event
        e.preventDefault()
        const podaci = new FormData(e.target)
        dodaj({
            naziv: podaci.get('naziv'),
            smjer: parseInt(podaci.get('smjer'))
        })
    }

    return (
        <>
            <h3>
                Unos novog grupaa
            </h3>

            <Form onSubmit={odradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required />
                </Form.Group>

                <Form.Group controlId="smjer">
                    <Form.Label>Smjer</Form.Label>
                    <Form.Select name="smjer" required>
                        <option value="">Odaberite smjer</option>
                        {smjerovi && smjerovi.map((smjer)=>(
                            <option value={smjer.sifra} key={smjer.sifra}>
                                {smjer.naziv}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

               




                <Row className="mt-4">
                    <Col>
                        <Link to={RouteNames.GRUPE} className="btn btn-danger">
                            Odustani
                        </Link>
                    </Col>
                    <Col>
                        <Button type="submit" variant="success">
                            Dodaj novog grupaa
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}