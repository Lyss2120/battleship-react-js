import React from 'react'


const Somex = () => {

    let ships = [destroyer, submarine, cruiser, battleship, carrier]


    return (
        <div>
            Somex
            <div className='game-info'>
                <p> turn-display: <span className='turn-display'></span></p>
                <p> info: <span className='info'></span></p>
            </div>

            <div className='gamesBoard-container'>
                player
                <div>gameboard
                    <div>board</div>
                </div>

            </div>
            <div className='option-container'>
                {ships.map((item, i) => {
                    return (
                        <div className='p-2 ${item}-preview ${item}'>{item}</div>
                    )
                })
                }                
            </div>
            <div>buttons
                <button>flip</button>
                <button>start</button>
            </div>


        </div>
    )
}

export default Somex