import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";
import Ship from './ship.jsx';
import { BiShuffle } from 'react-icons/bi';



const OptionContainer = () => {

  const { store, actions } = useContext(Context);
  const { user, ships, PlayerBoard } = store;


  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>

        <div className={`ship-box m-3 fs-5 `}>
          Place your ships!
        </div>

        <div className='option-container d-flex '>
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
        </div>

        <div className={` btn botones btn-dark ship-box m-3 fs-5 `}
          onClick={() => { actions.start(PlayerBoard) }}>
          shuffle <span className='giLog-icon'>< BiShuffle /></span>
        </div>

      </div>
    </>
  )
}

export default OptionContainer
{/* {board[i][j] === 0 ?
                      <Square className="rowss square" 
                              key={j} 
                              coord={board[i][j]} 
                              row={i} col={j} 
                              item={item} 
                              board={board}  
                              funct={actions.squareClick}
                        />
                        : 
                        <Square className="rowss square" 
                              key={j} 
                              coord={board[i][j]} 
                              row={i} col={j} 
                              item={item} 
                              board={board}  
                              funct={actions.squareClick}
                        />
                        } */}



