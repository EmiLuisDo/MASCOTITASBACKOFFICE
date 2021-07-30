import React, {useState, useEffect} from 'react';
import {Button, Col, Row, Container} from 'react-bootstrap/';
import AltaMascotaModal from "./AltaMascotaModal"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { tryGetTiposMascotas, getTiposMascotas} from "../Redux/Store"
import TarjetaMascota from "./TarjetaMascota"


const PrincipalPage = (props) => {
    //hardcode
    const mascotas = [
        {
            "id": 4,
            "nombre": "Ran Tan Plan",
            "anioNacimiento": 2020,
            "descripcion": "No te dejas de reir con este cachorron",
            "idRefugio": 3,
            "idTipoMascota": 1,
            "idEstado": 1,
            "idPersona": null,
            "idEstadoNavigation": null,
            "idPersonaNavigation": null,
            "idRefugioNavigation": null,
            "idTipoMascotaNavigation": null,
            "donacions": [],
            "mascotaFotos": [
                {
                    "id": 10,
                    "imagen": "https://images.dog.ceo/breeds/husky/20180901_150234.jpg",
                    "idMascota": 4
                },
                {
                    "id": 11,
                    "imagen": "https://images.dog.ceo/breeds/husky/20180904_185604.jpg",
                    "idMascota": 4
                },
                {
                    "id": 12,
                    "imagen": "https://images.dog.ceo/breeds/husky/20180924_193829.jpg",
                    "idMascota": 4
                }
            ]
        },
        {
            "id": 5,
            "nombre": "Lali",
            "anioNacimiento": 2020,
            "descripcion": "Una perrita cariniosa",
            "idRefugio": 3,
            "idTipoMascota": 1,
            "idEstado": 2,
            "idPersona": 1,
            "idEstadoNavigation": null,
            "idPersonaNavigation": {
                "id": 1,
                "nombre": "Emiliano",
                "apellido": "Dominguez",
                "dni": 0.0,
                "correoElectronico": "emiluisdo@hotmail.com.ar",
                "direccion": "Alvear sn",
                "telefono": 3764734497.0,
                "fechaNacimiento": "1995-06-12T00:00:00",
                "donacions": [],
                "mascota": []
            },
            "idRefugioNavigation": null,
            "idTipoMascotaNavigation": null,
            "donacions": [],
            "mascotaFotos": [
                {
                    "id": 12,
                    "imagen": "https://images.dog.ceo/breeds/husky/20180924_193829.jpg",
                    "idMascota": 4
                }
            ]
        }
    ]
    //hardcode

    const dispatch = useDispatch()
    const dispatchGetTiposMascotas = () => dispatch(tryGetTiposMascotas())

    useEffect (()=>{
        dispatchGetTiposMascotas()
    }, [])
    
    const tiposMascotas = useSelector(getTiposMascotas)

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => setShowModal(true); 

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

            {/* {mascotas.map((mascota) => <TarjetaMascota mascota={mascota}></TarjetaMascota>)} */}
            {showModal && <AltaMascotaModal data = {data} showModal={showModal} setShowModal={setShowModal}/>}
            </Container>
            <Button variant="success" onClick = {() => handleClick()} >Agregar Mascota</Button>{' '}
        </div>
    )
}   
export default PrincipalPage
