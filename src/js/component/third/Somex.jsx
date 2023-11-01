import React, { useContext, useEffect } from 'react';
import { Context } from "../../store/appContext";
import '../../../styles/third.css';
import Board from './board.jsx';
import OptionContainer from './option-Container.jsx';
import ButtonsContainer from './buttonsContainer.jsx';
import WinnerModal from './winnerModal.jsx';
import ReactCanvasConfetti from 'react-canvas-confetti';
// import Ship from './ship.jsx';
import { NavTab } from '../navTab.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';




// SQUARECLIK= SI ESTA EN 0 TIENE QUE LLAMAR A PLACESHIPS, SI ESTA EN 1 TIENE QUE LLAMAR A FIRETORPEDO, SI ESTA TODO EL BARCO EN 3 TIENE QUE AGREGARSE A UN ARRAY CON BARCOS ATACADOS O CAMBIAR EL ESTADO DE LOS BARCOS DEL JUGADOR, CUANDO TODOS SUS BARCOS ESTAN EN 3 DEBE LLAMAR A WIN

const Somex = () => {

    const { store, actions } = useContext(Context);
    const { user, PcBoard, PlayerBoard, winner } = store;

    useEffect(() => {
        actions.start(PcBoard)
    }, [store.reset])


    return (
        <>
            <div className='b d-flex flex-column m-1 somex'>
                {
                    store.shipsPlayer.length < 4
                        ? <OptionContainer />
                        : winner
                            ? <WinnerModal />
                            : <ButtonsContainer />
                }
                <div className="d-flex justify-content-around my-3">
                    <div className='gameBoard-container m-2'>
                        {store.shipsPlayer.length >= 4 &&
                            <Board board={PcBoard} user={'Pc'} />}
                        <Board board={PlayerBoard} user={'Player'} />
                    </div>
                </div>
            </div >

        </>
    )
}

export default Somex

/* <div className="bg-secondary m-2 p-3 d-flex justify-content-between">
              {console.log(store.ships)}
              {
                                  store.ships?.map((item, index) => {
                                      return (
                                          <Ship
                                              key= {index}
                                              name= {item.name}
                                              color= {item.color}
                                              taken= {item.taken}
                                              length= {item.length}
                                              coords= {item.coords}
                                              shipState= {item.shipState}
                                          />
                                      );
                                  })
              }

              </div> */