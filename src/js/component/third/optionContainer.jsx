import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import Ship from './ship.jsx';

const OptionContainer = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="pt-5 mt-5 ">
      {/* {console.log(store.ships, 'ships desde <optionContainer/>')} */}
      <button className='btn botones start-button row m-3 fs-5' >
        Place your ships
      </button>
      {
        store.ships?.map((ship, index) => {
          // console.log('selfalign', store.selfAlign, ship.name, '<optionContainer/>')
          return (
            <Ship
              key={index}
              name={ship.name}
              color={ship.color}
              taken={ship.taken}
              length={ship.length}
              coords={ship.coords}
              align={store.flip}
              shipState={ship.shipState}
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