import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import '../../../styles/third.css';
import Board from './board.jsx';

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
                  changeUser  start!!

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
                
                <div className="bg-danger m-2 p-3 d-flex justify-content-between">
                <div className="bg-warning p-1 ms-3" onDragStart={(e)=>console.log('dragging telllow', e.target)}>
                    <span> barco 1   </span>
                </div>
                <div className="bg-secondary p-2 " onDragStart={(e)=>console.log('dragging gray', e.target)}>
                <span>  barco 2 </span>
                </div>
                <div className="bg-success p-2 " onDragStart={(e)=>console.log('dragging green', e.target)}>
                    barco 3
                </div>
                <div className="bg-secondary p-3 " onDragStart={(e)=>console.log('dragging gray', e.target)}>
                <span>  barco 4 </span>
                </div>
                <div className="bg-success p-4 me-3" onDragStart={(e)=>console.log('dragging green', e.target)}>
                    barco 5
                </div>
                </div>
            </div>
        </div>
    )
}

export default Somex

