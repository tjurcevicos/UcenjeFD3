import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import PolaznikService from "../../services/polaznici/PolaznikService";
import { useEffect, useState } from "react";


export default function PolaznikPromjena() {

    const navigate = useNavigate()

    const params = useParams()
    const [polaznik, setPolaznik] = useState({})

    async function ucitajPolaznika(){
        await PolaznikService.getBySifra(params.sifra).then((odgovor)=>{
            setPolaznik(odgovor.data)
        })
    }

    useEffect(()=>{
        ucitajPolaznika()
    },[])

    async function promijeni(polaznik) {
        await PolaznikService.promijeni(params.sifra,polaznik).then(() => {
            navigate(RouteNames.POLAZNICI)
        })
    }

    function odradiSubmit(e) { // e je event
        e.preventDefault()
        const podaci = new FormData(e.target)
        promijeni({
            oib: podaci.get('oib'),
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime'),
            email: podaci.get('email')
        })
    }

    return (
        <>
            <h3>
                Promjena polaznika
            </h3>

            <Form onSubmit={odradiSubmit}>
                <Form.Group controlId="oib">
                    <Form.Label>OIB</Form.Label>
                    <Form.Control type="text" name="oib" required 
                    defaultValue={polaznik.oib}/>
                </Form.Group>

                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control type="text" name="ime" required 
                    defaultValue={polaznik.ime}/>
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control type="text" name="prezime" required 
                    defaultValue={polaznik.prezime}/>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" 
                    defaultValue={polaznik.email}/>
                </Form.Group>




                <Row className="mt-4">
                    <Col>
                        <Link to={RouteNames.POLAZNICI} className="btn btn-danger">
                            Odustani
                        </Link>
                    </Col>
                    <Col>
                        <Button type="submit" variant="success">
                            Promijeni polaznika
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}