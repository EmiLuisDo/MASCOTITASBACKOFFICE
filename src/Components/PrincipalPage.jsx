import React, {useState, useEffect} from 'react';
import {Button, Col, Row, Container} from 'react-bootstrap/';
import AltaMascotaModal from "./AltaMascotaModal"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { tryGetTiposMascotas, getTiposMascotas, tryGetMascotasByRefugio, getUsuario, getMascotas} from "../Redux/Store"
import TarjetaMascota from "./TarjetaMascota"


const PrincipalPage = (props) => {

    const correo = useSelector(getUsuario)
    console.log("CORRERO EN PAGE")
    console.log(correo)
    const dispatch = useDispatch()
    const dispatchGetTiposMascotas = () => dispatch(tryGetTiposMascotas())
    const dispatchGetMascotasByRefugio = (correo) => dispatch(tryGetMascotasByRefugio(correo))

    
    const [showModal, setShowModal] = useState(false)
    
    const handleClick = () => setShowModal(true); 
    
    useEffect (()=>{
        dispatchGetTiposMascotas()
    }, [])
    useEffect (()=>{
        if (correo !== "")   dispatchGetMascotasByRefugio(correo)
    }, [correo])
    
    const tiposMascotas = useSelector(getTiposMascotas)
    const mascotas = useSelector(getMascotas)
    const data = {
        tiposMascotas: tiposMascotas
    }
    return (
        <div>
            <Container>
            <Row xs={1} md={4} className="g-4">
            {Array.from({ length: mascotas.length }).map((_, idx) => (
                
                <Col key={idx}>
                    <TarjetaMascota mascota={mascotas[idx]}></TarjetaMascota>
                </Col>
            ))}
            </Row>

            {showModal && <AltaMascotaModal data = {data} showModal={showModal} setShowModal={setShowModal}/>}
            </Container>
            <Button variant="success" onClick = {() => handleClick()} >Agregar Mascota</Button>{' '}
        </div>
    )
}   
export default PrincipalPage
