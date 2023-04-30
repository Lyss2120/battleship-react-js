import React, { useState } from 'react';
import '../../../styles/third.css';

const Somex = () => {
    const [flip, setFlip] = useState(false);

    let ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier']
    const flipIt= ()=>{
        setFlip(!flip)
    }

    return (
        <div className='wrapper'>
          
            <div className='game-info'>
                <p> turn-display: <span className='turn-display'></span></p>
                <p> info: <span className='info'></span></p>
            </div>

            <div className='gamesBoard-container'>
                <div className='gameboard'>
                    
                </div>
            </div>

            <div className='option-container bg-warning'>
                {ships?.map((item, i) => {
                    return (
                        <div key={i} className={`${flip ? 'fliped' : null} ${item}-preview ${item}`}></div>
                    )
                })
                }                
            </div>
            <div className='buttons'>
                <button className='btn btn-light flip-button' 
                onClick={()=>{setFlip(!flip)}}>flip</button>
                <button className='btn btn-light start-button'>start</button>
            </div>


        </div>
    )
}

export default Somex