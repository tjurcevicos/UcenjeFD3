import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import SmjerService from "../../services/smjerovi/SmjerService";


export default function SmjerNovi() {

    const navigate = useNavigate()

    async function dodaj(smjer) {
        await SmjerService.dodaj(smjer).then(()=>{
            navigate(RouteNames.SMJEROVI)
        })
    }

    function odradiSubmit(e) { // e je event
        e.preventDefault()
        const podaci = new FormData(e.target)

        if (!podaci.get('naziv') || podaci.get('naziv').trim().length === 0) {
            alert("Naziv je obavezan i ne smije sadržavati samo razmake!")
            return 
        }

    
        if (podaci.get('naziv').trim().length < 3 || podaci.get('naziv').trim().length > 30) {
            alert("Naziv smjera mora imati najmanje 3 znaka i najviše 30!")
            return 
        }

   
      
        if (isNaN(podaci.get('trajanje')) || podaci.get('trajanje') < 1 || podaci.get('trajanje') > 500) {
            alert("Trajanje mora biti broj između 1 i 500 sati!")
            return 
        }

        if (!podaci.get('cijena') || podaci.get('cijena') === "") {
            alert("Obavezno cijena smjera!")
            return
        }

       
        if (podaci.get('cijena') < 0) {
            alert("Cijena ne može biti negativan broj!")
            return 
        }

        if (podaci.get('cijena') > 10000) {
            alert("Cijena ne može veća od 10000 €!")
            return 
        }

        if (!podaci.get('datumPokretanja') || podaci.get('datumPokretanja') === "") {
            alert("Morate odabrati datum pokretanja!")
            return
        }

        const odabraniDatum = new Date(podaci.get('datumPokretanja'))
        const danas = new Date()
        danas.setHours(0, 0, 0, 0) 

        if (odabraniDatum < danas) {
            alert("Datum pokretanja ne može biti u prošlosti!")
            return
        }

        dodaj({
            naziv: podaci.get('naziv'),
            trajanje: parseInt(podaci.get('trajanje')),
            cijena: parseFloat(podaci.get('cijena')),
            datumPokretanja: new Date(podaci.get('datumPokretanja')).toISOString(),
            aktivan: podaci.get('aktivan') === 'on'
        })
    }

    return (
        <>
            <Form onSubmit={odradiSubmit}>
                <Container className="visinaProgran">
                    <Card className="shadow-sm" style={{padding: '2rem'}}>
                        <Card.Title className="mb-4">Unos novog smjera</Card.Title>
                        <Row>
                            <Col xs={12}>
                                <Form.Group controlId="naziv">
                                    <Form.Label>Naziv</Form.Label>
                                    <Form.Control type="text" name="naziv" required />
                                </Form.Group>
                            </Col>
                            <Col xs={7}  md={6} className="mt-2">
                                <Form.Group controlId="trajanje">
                                    <Form.Label>Trajanje</Form.Label>
                                    <Form.Control type="number" 
                                     style={{textAlign: 'right'}}
                                    name="trajanje" step={1} />
                                </Form.Group>
                            </Col>
                            <Col xs={5}  md={6} className="mt-2">
                                <Form.Group controlId="cijena">
                                    <Form.Label>Cijena</Form.Label>
                                    <Form.Control type="number"
                                     style={{textAlign: 'right'}}
                                    name="cijena" step={0.01} />
                                </Form.Group>
                            </Col>
                            <Col xs={7} md={6} className="mt-2">
                                <Form.Group controlId="datumPokretanja">
                                    <Form.Label>Datum pokretanja</Form.Label>
                                    <Form.Control type="date" 
                                    onClick={(e)=>e.target.showPicker()}
                                    onFocus={(e)=>e.target.showPicker()}
                                    name="datumPokretanja" />
                                </Form.Group>
                            </Col>
                            <Col xs={5}  md={6} style={{paddingTop: '2.8rem'}}>
                                <div >
                                    <label title="" htmlFor="aktivan" style={{marginRight: '0.5rem'}}>Aktivan</label>
                                    <input id="aktivan" className="form-check-input" type="checkbox" name="aktivan" />
                                  
                               </div>
                            </Col>

                            <Col className="mt-4" xs={4}>
                                <Link to={RouteNames.SMJEROVI} className="btn btn-danger">
                                    Odustani
                                </Link>
                            </Col>
                            <Col className="mt-4" xs={8} style={{textAlign: 'right'}}>
                                <Button type="submit" variant="success">
                                    Dodaj novi smjer
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </Form>
        </>
    )
}