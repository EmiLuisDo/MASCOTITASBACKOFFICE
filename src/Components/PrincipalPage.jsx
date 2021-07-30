import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap/';
import AltaMascotaModal from "./AltaMascotaModal"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { tryGetTiposMascotas, getTiposMascotas} from "../Redux/Store"


const PrincipalPage = (props) => {
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
            {showModal && <AltaMascotaModal data = {data} showModal={showModal} setShowModal={setShowModal}/>}
            <Button variant="success" onClick = {() => handleClick()} >Agregar Mascota</Button>{' '}
        </div>
    )
}

export default PrincipalPage
