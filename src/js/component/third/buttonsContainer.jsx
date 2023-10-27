import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import Ship from './ship.jsx';

const ButtonsContainer = () => {
  const { store, actions } = useContext(Context);
  const { user, PcBoard, PlayerBoard } = store;


  return (
    <div className='buttons-container '>

    <button  className='btn btn-dark light-shadow botones start-button row m-3 fs-5' onClick={() => actions.reset()}>
      Reset
    </button>

    <button className='btn btn-dark botones light-shadow start-button row m-3 fs-5' onClick={() => { actions.fastwinner() }}> 
        fastwinner
    </button>
   
    <button className='btn btn-dark botones justify-content-center light-shadow showShips-button row m-3 fs-5' onClick={() => actions.showEnemyShips()} >
        show ships
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