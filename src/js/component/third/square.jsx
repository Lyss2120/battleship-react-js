import React from 'react'

const Square = ({ lol, i, row, col, squareClick, board, setBoard }) => {

  return (
    <>
      <div key={i} className={`square tile bg-${lol === 1 ? 'info' : lol === 2 ? 'warning' : lol === 3 ? 'danger' : 'null'}`}
        // onClick={() => console.log('coord ' + row + ',' + col)}
        onClick={() => squareClick(i, board, row, setBoard)}
      >
        {/* {row},{col}   */}
        {lol}
      </div>
    </>
  )
}

export default Square
//  item={item}