import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import ReactCanvasConfetti from 'react-canvas-confetti';



const WinnerModal = () => {

  const { store, actions } = useContext(Context);
  const { selfAlign, shipsPc } = store;//ponerle confetti y que paresca un modal sobre el juego....se marca solo cuando se cambia el align se tiene que marcar al drop



  return (
    <>
    <div className='text-light fs-1'>winner</div>
  <ReactCanvasConfetti
    angle={90}
    className="canvas"
    colors={[
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ]}
    decay={0.8}
    drift={0}
    gravity={1}
    origin={{
      x: 0.5,
      y: 0.5
    }}
    particleCount={500}
    resize
    scalar={1}
    shapes={[
      'circle',
      'square'
    ]}
    spread={360}
    startVelocity={45}
    ticks={600}
    useWorker
    zIndex={-1}
  />




      <div className="modal" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">there is a winner!!!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{store.winner}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
              <button type="button" className="btn btn-primary"
                onClick={() => { actions.reset() }}>
                reset
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WinnerModal

// UN MODAL EXPLICANDO COMO SE JUEGA ENCIMA DEL JUEGO
// PAGINA PRINCIPAL CON START AL CLICKEAR START ENTRA A LA PAG CON UN MODAL ENCIMA AL ACEPTAR HAYE ¿¿¿ ALGO QUE INVITE AL JUGADSOR
// A PONER LOS BARCOS