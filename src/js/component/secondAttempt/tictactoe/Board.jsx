import React from 'react'
import '../../../../styles/gameboard.css'
import Square from './square.jsx'


let row = [1, 2, 3]//en cada row 3 col// el primer map genera 3 columnas y el segundo 3 filas dentro de esas columnas
// let squareValue=[] aqui el for anidado para sacar las coordenadas... a cada square le toca una..


// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot
let gameBoard = [
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const Board = ({ squares }) => {
  return (
    <div className='gameboard'>

      <div className='d-flex columnas'>
        {row.map(col => {
          return (
            <div className='filas'>
              <div className=''>
                <span>{col}</span>
                {row.map((row, i) => {
                  return (
                    <>
                      <Square row={row} col={col} i={i} />
                    </>
                  )
                })
                }
              </div>
            </div>
          )
        })}</div>
    </div>
  )
}

export default Board