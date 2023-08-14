import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import Ship from './ship.jsx';

const ButtonsContainer = () => {
  const { store, actions } = useContext(Context);
                
  return (
    <div className='pt-5 mt-5 buttons d-flex flex-column'>
    <button className='btn botones start-button row m-3 fs-5' onClick={() => { actions.inicio() }}> 
    {/* //setear user y pedir poner los barcos */}
        Inicioo
    </button>
    <button className='btn botones start-button row m-3 fs-5' onClick={() => { actions.changeUser(user) }}> 
    {/* //setear user en la func firetorpedo */}
        Change turn
    </button>
    <button className='btn botones start-button row m-3 fs-5' onClick={() => { actions.start(PlayerBoard) }}>
        {/* // onClick={() => { actions.changeUser(user)}} //setear user en la func firetorpedo */}
        start!!
    </button>
    <button className='btn botones fire-button row m-3 fs-5' onClick={actions.fireTorpedoPrompt} >
        fire!!
    </button>
    <button className='btn botones showShips-button row m-3 fs-5' onClick={actions.showEnemyShips} >
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