import React from 'react'
import '../../../../styles/gameboard.css'


let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let row = [1, 2, 3]//en cada row 3 col
// let squareValue=[] aqui el for anidado para sacar las coordenadas... a cada square le toca una..

const Board = ({ squares }) => {
  return (
      <div className='d-flex columnas'>
        {row.map((col, i) => {
          return (
            <div key={i} className='p-2 filas '>
              {row.map((row, i) => {
                return (
                  <div key={i} className="square tile"
                    onClick={() => console.log('coord ' + row + ',' + col)}>
                    {row},{col}
                  </div>
                )
              })
              }
            </div>
          )
        })}</div>
  )
}

export default Board