import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

const Square = ({ coord, i, row, col, board }) => {
  const { store, actions } = useContext(Context)

  return (
    <>
      <div key={i} className={`square tile bg-${  coord === 4 ? 'light bg-opacity-50' : board === store.PcBoard && coord != 0 ? store.enemyShipsClass : board === store.PlayerBoard && coord === 1 ? 'info' : coord === 2 ? 'warning' : coord === 3 ? 'danger' :  'null'}`}
        // onClick={() => console.log('coord ' + row + ',' + col)}
        onClick={() => actions.squareClick(board, row, col)}
      >
        {
          board === store.PcBoard ?
            ''
            // : 
              // coord === 0 ?
              // ''
              : coord
        }
      </div>





    </>
  )
}

export default Square
//  item={item}