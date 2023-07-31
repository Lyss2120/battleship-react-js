import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import '../../../styles/third.css';
import Board from './board.jsx';
import Ship from './ship.jsx';

// SQUARECLIK= SI ESTA EN 0 TIENE QUE LLAMAR A PLACESHIPS, SI ESTA EN 1 TIENE QUE LLAMAR A FIRETORPEDO, SI ESTA TODO EL BARCO EN 3 TIENE QUE AGREGARSE A UN ARRAY CON BARCOS ATACADOS O CAMBIAR EL ESTADO DE LOS BARCOS DEL JUGADOR, CUANDO TODOS SUS BARCOS ESTAN EN 3 DEBE LLAMAR A WIN

const Somex = () => {

    const { store, actions } = useContext(Context);
    const { user, PcBoard, PlayerBoard } = store;

   
    return (
        <div className='wrapper'>
            <div className='game-info pt-5 '>
                <p> turn  : <span className='turn-display mx-2'>{user}</span></p>
                {/* <p> info: <span className='info'></span></p>  se muestra si hay ganador*/}
            </div>
            <div className='gamesBoard-container'>
                <Board 
                // ships={ships} 
                // setShips={setShips} 
                // shipState={shipState} 
                // setShipState={setShipState} 
                // fireTorpedo={actions.fireTorpedo} 
                // setBoard={setPcBoard} 
                // setUser={setUser}
                board={PcBoard} 
                user={'pc'} 
                 />

                <Board 
                // ships={ships} 
                // setShips={setShips} 
                // shipState={shipState} 
                // setShipState={setShipState} 
                // fireTorpedo={actions.fireTorpedo} 
                // setBoard={setPlayerBoard} 
                // setUser={setUser} 
                user={'player'} 
                board={PlayerBoard}
                /> 
            </div>
            <div className='buttons row'>
                <button 
                className='btn btn-secondary start-button row m-1'
                // onClick={() => { actions.changeUser(user)}} //setear user en la func firetorpedo
                onClick={actions.start}
                > 
                  start!!

                </button>
                <button 
                className='btn btn-secondary fire-button row m-1'
                onClick={actions.fireTorpedoPrompt} >
                    
                    fire!!

                </button>
                <button className='btn btn-secondary showShips-button row m-1'
                onClick={actions.showEnemyShips} 
                >
                    show enemy ships
                </button>
                
                <div className="bg-secondary m-2 p-3 d-flex justify-content-between">
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

                </div>
            </div>
        </div>
    )
}

export default Somex

