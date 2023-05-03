import React from 'react'
import Square from './square.jsx';

const Board = ({ board, setBoard, player }) => {
  return (
    <div>
    <span>{player}</span>
    <div className='game-board'>
      {board.map((item, i) => {
          return (
            <Square key={i} id={i}>{item}</Square>
          )
        })}
    </div>
    </div>
  )
}

export default Board