import React from 'react';
import { Link } from "react-router-dom";
import { GiSinkingShip } from "react-icons/gi";



const Firstpage = () => {
    return (
        <div className='text-center first-page-container'>
            <div className='first-page-title '><p>Battleship</p></div>
                <div className="iconShip">
                    <GiSinkingShip 
                    // color="red" 
                    // fontSize="300px"
                    />
                </div>
            {/* <img src="https://www.navyrecognition.com/images/stories/news/2018/april/FSD150-CB-MK2.jpg" className='battleboat' alt="battleboat" /> */}

            <div>
                <Link to={'/first'} className='text-decoration-none'>
                    <div className='boton btn'>start</div>
                </Link>
            </div>

        </div>
    )
}

export default Firstpage