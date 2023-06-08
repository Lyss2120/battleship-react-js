import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import Square from './square.jsx';
import SquareTop from './square-top.jsx';
// import '../../../styles/gameboard.css'
// , setBoard, setUser, setShipState, shipState, ships, setShips, fireTorpedo

const Board = ({ board, user }) => {
  
  const { store, actions } = useContext(Context);
  let row = store.row
  
  return (
    <>
      <div className=''>
        <span>{user}</span>
        <SquareTop row={row} clase={'flex-row  ms-2 square-top'} />
        <div className='d-flex'>
          <SquareTop row={row} clase={'flex-column  px-1 square-top'} />
          <div className='d-flex columnas game-board'>
            {row.map((col, i) => {
              return (
                <div key={i} className='filas segundoTop'>
                  {row.map((row, i) => {
                    return (
                      <Square key={i} className="square" 
                      coord={board[row][col]} 
                      row={row} 
                      col={col} 
                      board={board}
                      funcion={actions.squareClick} 
                      // squareClick={actions.hola} 
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>

        </div>
      </div>


    
    </>
  )
}

export default Board


