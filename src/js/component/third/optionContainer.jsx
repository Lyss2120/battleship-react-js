import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import Ship from './ship.jsx';

const OptionContainer = () => {
  const { store, actions } = useContext(Context);


  return (
    <div className="bg-secondary m-2 p-3 d-flex justify-content-between">
      {console.log(store.ships)}
      {
        store.ships?.map((item, index) => {
          return (
            <Ship
              key={index}
              name={item.name}
              color={item.color}
              taken={item.taken}
              length={item.length}
              coords={item.coords}
              shipState={item.shipState}
            />
          );
        })
      }
    </div>
                
   
  )
}

export default OptionContainer





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