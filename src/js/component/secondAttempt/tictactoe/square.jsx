import React from 'react'
import '../../../../styles/gameboard.css'

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


const Square = ({ row, col, i }) => {

    const shipPositions = (row, col) => {
        let newShip = gameBoard.filter(square => square[row][col] !== square[row][col])
        //buscar que hay en gameBoard[fila][columna] para posicionar un barco y despues para ver si el disparo llego o no 
        console.log(row, col);
        // let newBoard = [...gameBoard, newShip]
        // setBoard(newBoard)
    }
    const fireTorpedo = (row, col) => {

    }



    return (
        <div onClick={() => shipPositions(row,col)} className='d-flex'>
            {col == 1 &&
                <span className='px-2  m-0 m-auto'>{row}</span>
            }
            <div key={i} className="tile "
                onClick={() => fireTorpedo(row, col)}>
                <span className=''>{row},{col}</span>

            </div>

        </div>
    )
}

export default Square