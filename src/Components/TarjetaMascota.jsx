import {Card, Button, ListGroup, ListGroupItem, Popover, OverlayTrigger} from 'react-bootstrap/';


const TarjetaMascota = (props) => {
    console.log("PROPS")
    console.log(props)

    const {mascota} = props
    
    const getBorder = () => mascota.idEstado===1 ? "dark": "success" 


    const popover = () => (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{`${mascota.idPersonaNavigation.nombre} ${mascota.idPersonaNavigation.apellido}`}</Popover.Header>
                <ListGroupItem>Email: {mascota.idPersonaNavigation.correoElectronico}</ListGroupItem>
                <ListGroupItem>Telofono: {mascota.idPersonaNavigation.telefono}</ListGroupItem>
        </Popover>
      );


    return (
        <Card border={getBorder()} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={mascota.mascotaFotos[0].imagen} />
            <Card.Body>
                <Card.Title>{mascota.nombre}</Card.Title>
                <Card.Text>{mascota.descripcion}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Anio de Nacimiento: {mascota.anioNacimiento}</ListGroupItem>
                <ListGroupItem>Estado: {mascota.idEstado===1 ? "Disponible":"Adoptado"}</ListGroupItem>
            </ListGroup>
                {mascota.idEstado===2 && (<>
            <Card.Body className="text-center">
                    <OverlayTrigger trigger="click" placement='top' overlay={popover()}>
                        <Button variant="primary">Ver adoptante</Button>
                    </OverlayTrigger>
            </Card.Body>
                </>
                ) }
        </Card>
    )
}


export default TarjetaMascota