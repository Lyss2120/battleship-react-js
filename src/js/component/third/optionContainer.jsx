import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import Ship from './ship.jsx';

const OptionContainer = () => {
  const { store, actions } = useContext(Context);
  let alignx
// console.log(store.shipsPlayer, 'lll', store.shipsPc);
  return (
    <div className="pt-5 fs-5 mt-2 d-flex flex-column option-container">
      {/* <div className=" mt-5 backgr"> */}
      <span className='btn botones lala  start-button row m-3 fs-4' >
        Place your ships
      </span>
      {
        store.ships?.map((ship, index) => {         
          return (
            <Ship
              key={index}
              color={ship.color}
              name={ship.name}
              taken={ship.taken}
              length={ship.length}
              coords={ship.coords}
              shipState={ship.shipState}
            />
          )
        })
      }
{/* </div> */}
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