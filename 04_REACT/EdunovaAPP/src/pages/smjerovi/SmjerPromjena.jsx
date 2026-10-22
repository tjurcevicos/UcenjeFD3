import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import SmjerService from "../../services/smjerovi/SmjerService";
import { useEffect, useState } from "react";


export default function SmjerPromjena() {

    const navigate = useNavigate()
    const params = useParams()
    const [smjer, setSmjer] = useState({})
    const [aktivan, setAktivan] = useState(false)

    useEffect(() => {
        ucitajSmjer()
    }, [])

    async function ucitajSmjer() {
        await SmjerService.getBySifra(params.sifra).then((odgovor) => {
            const s = odgovor.data
            s.datumPokretanja = s.datumPokretanja.substring(0, 10)
            setSmjer(s)
            setAktivan(s.aktivan)
        })
    }


    async function promijeni(smjer) {
        await SmjerService.promijeni(params.sifra, smjer).then(() => {
            navigate(RouteNames.SMJEROVI)
        })
    }

    function odradiSubmit(e) { // e je event
        e.preventDefault()
        const podaci = new FormData(e.target)
        promijeni({
            naziv: podaci.get('naziv'),
            trajanje: parseInt(podaci.get('trajanje')),
            cijena: parseFloat(podaci.get('cijena')),
            datumPokretanja: new Date(podaci.get('datumPokretanja')).toISOString(),
            aktivan: aktivan
        })
    }

    return (
        <>
            <Form onSubmit={odradiSubmit}>
                <Container className="visinaProgran">
                    <Card className="shadow-sm" style={{ padding: '2rem' }}>
                        <Card.Title className="mb-4">Promjena smjera</Card.Title>
                        <Row>
                            <Col xs={12}>
                                <Form.Group controlId="naziv">
                                    <Form.Label>Naziv</Form.Label>
                                    <Form.Control type="text" name="naziv" required
                                        defaultValue={smjer.naziv} />
                                </Form.Group>
                            </Col>
                            <Col xs={7} md={6} className="mt-2">
                                <Form.Group controlId="trajanje">
                                    <Form.Label>Trajanje</Form.Label>
                                    <Form.Control type="number" name="trajanje" step={1}
                                        defaultValue={smjer.trajanje}
                                        style={{ textAlign: 'right' }} />
                                </Form.Group>
                            </Col>
                            <Col xs={7} md={6} className="mt-2">
                                <Form.Group controlId="cijena">
                                    <Form.Label>Cijena</Form.Label>
                                    <Form.Control type="number" name="cijena" step={0.01}
                                        defaultValue={smjer.cijena}
                                        style={{ textAlign: 'right' }} />
                                </Form.Group>
                            </Col>
                            <Col xs={7} md={6} className="mt-2">
                                <Form.Group controlId="datumPokretanja">
                                    <Form.Label>Datum pokretanja</Form.Label>
                                    <Form.Control type="date" name="datumPokretanja"
                                        defaultValue={smjer.datumPokretanja} />
                                </Form.Group></Col>
                            <Col xs={7} md={6} style={{ paddingTop: '3rem' }}>
                                <Form.Group controlId="aktivan" className="mt-3">
                                    <Form.Check label="Aktivan" name="aktivan"
                                        checked={aktivan}
                                        onChange={(e) => { setAktivan(e.target.checked) }} />
                                </Form.Group>

                            </Col>
                            <Col className="mt-4">
                                <Link to={RouteNames.SMJEROVI} className="btn btn-danger">
                                    Odustani
                                </Link>
                            </Col>
                            <Col className="mt-4" style={{ textAlign: 'right' }}>
                                <Button type="submit" variant="success">
                                    promjeni smjer
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Container>


            </Form>
        </>
    )
}