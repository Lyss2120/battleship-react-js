import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import Ship from './ship.jsx';

const ButtonsContainer = () => {
  const { store, actions } = useContext(Context);
  const { user, PcBoard, PlayerBoard } = store;


  return (
    <div className='buttons-container '>
    <button className='btn botones start-button row m-3 fs-5' onClick={() => { actions.start(PcBoard) }}> 
        start
    </button>
    <button  className='btn botones start-button row m-3 fs-5' onClick={() => actions.reset()}>
      Reset
    </button>

    <button className='btn botones start-button row m-3 fs-5' onClick={() => { actions.fastwinner() }}> 
    {/* //setear user en la func firetorpedo */}
        fastwinner
    </button>
    <button className='btn botones start-button row m-3 fs-5' onClick={() => { actions.inicio() }}> 
    {/* //setear user y pedir poner los barcos */}
        Inicioo
    </button>
    <button className='btn botones showShips-button row m-3 fs-5' onClick={() => actions.showEnemyShips()} >
        show enemy ships
    </button>
</div>

  )
}

export default ButtonsContainer





{/* <button className='btn btn-secondary flip-button'
                    onClick={() => setFlip(!flip)}> show enemy ships
                </button> */}

                {/* 
       <div className='option-container'>
          {ships?.map((item, i) => { 
            return (
              <div key={i} className={`${flip ? 'fliped' : null} ${item.name}-preview ${item.name}`}
                onClick={() => { shipToAdd(item, i), shipToBoard(shipToAdd) }}>
              </div>
              )
            })
      } </div> */}