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
                onClick={actions.placeShips}
                > 
                  changeUser  start!!

                </button>
                <button 
                className='btn btn-secondary fire-button row m-1'
                onClick={actions.fireTorpedo} >
                    
                    fire!!

                </button>
                <button className='btn btn-secondary showShips-button row m-1'
                onClick={actions.showEnemyShips} 
                >
                    show enemy ships
                </button>
            </div>
        </div>
    )
}

export default Somex

    // const shipToAdd = (itemtoadd, i, position, board) => {
    //     ships[i] === itemtoadd &&
    //         setShipToAdding(itemtoadd)//compara el objeto a ver si coincide con la posicion que se clickeó dentro del estado que contiene todos los objetos/ships 
    //     // const shipToAddCp= shipToAdding.slice();
    //     // console.log(shipToAddCp);
    //     // const newBoard= PcBoard.slice();
    //     // shipToAddCp = newBoard[i]


    // }