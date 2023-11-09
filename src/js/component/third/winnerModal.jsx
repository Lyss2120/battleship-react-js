import React, { useContext, useState } from 'react';
import { Context } from "../../store/appContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ship3 o submarine se mezcla con los shipss de pc. ver pq

const WinnerModal = () => {

  const { store, actions } = useContext(Context);
  //ponerle confetti y que parezca un modal sobre el juego....se marca solo cuando se cambia el align se tiene que marcar al drop
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  
  return (
    <>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='winnerModal' >
            <Modal.Title>Woohoo, the winner is :</Modal.Title>
        </Modal.Header>
        <Modal.Body className='winnerModal' >
            <div className="d-flex justify-content-center text-danger fs-1 py-3">
                {store.winner}!
            </div>
        </Modal.Body>
        <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
                Close
            </Button> */}
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