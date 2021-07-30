import {Form, Container, Button, FloatingLabel, Row} from 'react-bootstrap/';
import React from 'react';
import {useForm} from "react-hook-form"
import { getUsuario, upMascota } from "../Redux/Store"
import { useDispatch, useSelector } from 'react-redux'



function AltaMascotaForm(props) {
  const {tiposMascotas} = props.data
  const {setShowModal} = props

  const useremail = useSelector(getUsuario)
  
  const dispatch = useDispatch()
  
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    dispatch(upMascota(data, useremail))
    setShowModal(false)
  }


    return (
      <div>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control size="lg" type="Text" placeholder="Ingrese el nombre" {...register("Nombre")}/>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicAnioNacimiento">
                  <Form.Label>Anio de Nacimiento</Form.Label>
                  <Form.Control size="lg" type="date" placeholder="Ingrese el anio de nacimiento" {...register("AnioNacimiento")}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTipoMascota">
                  <Form.Label>Tipo de Mascota</Form.Label>
                  <Form.Select 
                    size="lg" 
                    {...register("IdTipoMascota")}
                    >
                    <option hidden>Seleccione el Tipo de Mascota</option>
                    {tiposMascotas.map((tipoMascota)=> (
                      <option key={tipoMascota.id} value = {tipoMascota.id}>{tipoMascota.descripcion}</option>)
                    )}
                  </Form.Select>
              </Form.Group>
            </Row>

            <FloatingLabel controlId="formBasicDescripcion" label="Ingrese una descripcion para la mascota, resalte sus mejores cualidades">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                {...register("Descripcion")}
              />
            </FloatingLabel>

            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Ingrese una foto de la mascota</Form.Label>
              <Form.Control type="file" size="lg" {...register("FotoMascota")}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
          </Form>


        </Container>
      </div>
    );
  }
  
export default AltaMascotaForm