import React, { useState } from 'react';
import '../../../styles/third.css';
// import Square from './square.jsx';
import Board from './board.jsx';

let shipsArr = [
    { name: 'destroyer', id: 1, lenght: 2 },
    { name: 'submarine', id: 2, lenght: 3 },
    { name: 'cruiser', id: 3, lenght: 4 },
    { name: 'battleship', id: 4, lenght: 5 },
    { name: 'carrier', id: 5, lenght: 5 }
]

const Somex = () => {
    const [flip, setFlip] = useState(false);
    const [board, setBoard] = useState(Array(100).fill(0))
    const [ships, setShips] = useState(shipsArr)

    console.log(ships);

    // player podria ser un estado con objetos para llamar a player.board player.name etc 

    return (
        <div className='wrapper'>
            <div className='game-info'>
                <p> turn-display: <span className='turn-display'></span></p>
                <p> info: <span className='info'></span></p>
            </div>
            <div className='gamesBoard-container'>
                <Board board={board} setBoard={setBoard} player={'pc'} />
                <Board board={board} setBoard={setBoard} player={'player'} />
            </div>
            <div className='option-container'>
                {ships?.map((item, i) => {
                    return (
                        <div key={i} className={`${flip ? 'fliped' : null} ${item.name}-preview ${item.name}`}></div>
                    )
                })
                }
            </div>
            <div className='buttons'>
                <button className='btn btn-secondary flip-button'
                    onClick={() => { setFlip(!flip) }}>flip</button>
                <button className='btn btn-secondary start-button'>start</button>
            </div>
        </div>
    )
}

export default Somex