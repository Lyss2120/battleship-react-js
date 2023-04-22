import React from 'react'

let rows= [1, 2, 3]
// let squareValue=[] aqui el for anidado para sacar las coordenadas... a cada square le toca una..

const Board = ({ squares }) => {
  return (
    <div>

{rows.map((row, i)=>{
  return(
    <div key={i} className="bg-danger p-2">{row}</div>
  )
})

}


    </div>
  )
}

export default Board