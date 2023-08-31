import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../store/appContext";
import '../../../styles/third.css';
import Board from './board.jsx';
import OptionContainer from './optionContainer.jsx';
import ButtonsContainer from './buttonsContainer.jsx';
// import Ship from './ship.jsx';

// SQUARECLIK= SI ESTA EN 0 TIENE QUE LLAMAR A PLACESHIPS, SI ESTA EN 1 TIENE QUE LLAMAR A FIRETORPEDO, SI ESTA TODO EL BARCO EN 3 TIENE QUE AGREGARSE A UN ARRAY CON BARCOS ATACADOS O CAMBIAR EL ESTADO DE LOS BARCOS DEL JUGADOR, CUANDO TODOS SUS BARCOS ESTAN EN 3 DEBE LLAMAR A WIN

const Somex = () => {

    const { store, actions } = useContext(Context);
    const { user, PcBoard, PlayerBoard } = store;
    useEffect(() => {
        actions.start(PcBoard)
    }, [])


    return (<div className='b d-flex option-container pb-5'>
        <ButtonsContainer />

        <div className='' >
            <div className='turn-display mt-2 fs-3 p-3 '>
                <p> turn  : <span className='mx-2'>{user}</span></p>
                {/* <p> info: <span className='info'></span></p>  se muestra si hay ganador*/}
            </div>
            
            <div className=' gamesBoard-container'>
                <Board board={PcBoard} user={'pc'} />
                <Board board={PlayerBoard} user={'player'} />
            </div>
            
        </div>

        <OptionContainer />

        </div>
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