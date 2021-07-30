import AltaMascotaForm from "./AltaMascotaForm";
import {Modal} from 'react-bootstrap/';


const AltaMascotaModal = (props) => {
  const {showModal, setShowModal, data} = props


    return (
        <>
        <Modal
            size="lg"
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Alta Mascota
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AltaMascotaForm data={data} setShowModal={setShowModal}/>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default AltaMascotaModal