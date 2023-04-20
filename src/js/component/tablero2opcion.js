import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import Square from './Square';

const horizontal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const vertical = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Table3 = () => {
    const { store, actions } = useContext(Context);
    let randId = () => {
    }
    let board = []
    //<Square key={index} position={coords}/>
    // <span className='tile' >{vertical[i]},{horizontal[j]}</span>
    for (let i = 0; i < vertical.length; i++) {
        for (let j = 0; j < horizontal.length; j++) {
            let coordX = vertical[i]
            let coordY = horizontal[j]
            let coords = coordX + ',' + coordY
            board.push(<span className='tile' >{vertical[i]},{horizontal[j]}</span>)
        }
    }
    console.log(board)
    return (
        <div className=''>
            <div className='gameboard'>{board}</div>

        </div>
    )
}

export default Table3