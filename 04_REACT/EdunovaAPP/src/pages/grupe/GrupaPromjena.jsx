import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import GrupaService from "../../services/grupe/GrupaService";
import { useEffect, useState } from "react";
import SmjerService from "../../services/smjerovi/SmjerService";


export default function GrupaPromjena() {

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

    const params = useParams()
    const [grupa, setGrupa] = useState({})

    async function ucitajGrupe(){
        await GrupaService.getBySifra(params.sifra).then((odgovor)=>{
            setGrupa(odgovor.data)
        })
    }

    useEffect(()=>{
        ucitajGrupe()
    },[])

    async function promijeni(grupa) {
        await GrupaService.promijeni(params.sifra,grupa).then(() => {
            navigate(RouteNames.GRUPE)
        })
    }

    function odradiSubmit(e) { // e je event
        e.preventDefault()
        const podaci = new FormData(e.target)
        promijeni({
             naziv: podaci.get('naziv'),
            smjer: parseInt(podaci.get('smjer'))
        })
    }

    return (
        <>
            <h3>
                Promjena grupaa
            </h3>

            <Form onSubmit={odradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required 
                    defaultValue={grupa.naziv}/>
                </Form.Group>

                <Form.Group controlId="smjer">
                    <Form.Label>Smjer</Form.Label>
                    <Form.Select name="smjer" required
                    value={grupa.smjer}
                    onChange={(e)=>{setGrupa({...grupa, smjer: parseInt(e.target.value)})}}>
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
                            Promijeni grupu
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}