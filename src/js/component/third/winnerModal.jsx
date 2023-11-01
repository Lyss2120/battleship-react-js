import React, { useContext } from 'react';
import { Context } from "../../store/appContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const WinnerModal = () => {

  const { store, actions } = useContext(Context);
  const { selfAlign, shipsPc } = store;//ponerle confetti y que paresca un modal sobre el juego....se marca solo cuando se cambia el align se tiene que marcar al drop
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>there is a winner!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, the winner is :
            <div className="d-flex justify-content-center text-danger fs-1 py-3">
                {store.winner}!
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => actions.reset()}>
                play again
            </Button>
        </Modal.Footer>
    </Modal>
</>
)
}

export default WinnerModal

// UN MODAL EXPLICANDO COMO SE JUEGA ENCIMA DEL JUEGO
// PAGINA PRINCIPAL CON START AL CLICKEAR START ENTRA A LA PAG CON UN MODAL ENCIMA AL ACEPTAR HAYE ¿¿¿ ALGO QUE INVITE AL JUGADSOR
// A PONER LOS BARCOS