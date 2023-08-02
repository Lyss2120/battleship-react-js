import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

const Square = ({ shipp, coord, i, row, col, board }) => {
  const { store, actions } = useContext(Context)
//   let shipfinder = store.ships.find((ship) =>  ship.coords === [row, col] )
// console.log({shipfinder}); //da muchos undefined
  return (
    <>
     <div key={i} className={`square tile bg-${coord === 4 ? 'light bg-opacity-50' : board === store.PcBoard && coord != 0 ? store.enemyShipsClass : board === store.PlayerBoard && coord === 1 ? 'info' : coord === 2 ? 'warning' : coord === 3 ? 'danger' : 'null'}`}
          onClick={() => actions.handleClick(board, row, col)}  // style={{ backgroundColor: coord}}  // onClick={() => console.log('coord ' + row + ',' + col)}
        >
          {
            board === store.PcBoard ?
              ''
              :
              coord === 0 ?
                ''
                : coord


          }
        </div>
      {/* {coord !== 0 ? 
          store.ships.map((item, i)=>{
            <div key={i} className={"square tile bg-danger"}>
            {item.name}
            </div>
           })
      :       
        <div key={i} className={`square tile bg-${coord === 4 ? 'light bg-opacity-50' : board === store.PcBoard && coord != 0 ? store.enemyShipsClass : board === store.PlayerBoard && coord === 1 ? 'info' : coord === 2 ? 'warning' : coord === 3 ? 'danger' : 'null'}`}
          onClick={() => actions.handleClick(board, row, col)}  // style={{ backgroundColor: coord}}  // onClick={() => console.log('coord ' + row + ',' + col)}
        >
          {
            board === store.PcBoard ?
              ''
              :
              coord === 0 ?
                ''
                : coord


          }
        </div>
      } */}
      {/* en el click rescatar el target value para las coordenadas.  */}

    </>
  )
}

export default Square
//  item={item}