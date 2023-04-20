import React from 'react';
import { Link } from "react-router-dom";

import { GiSinkingShip } from "react-icons/gi";

const Firstpage = () => {
    return (
        <div className='text-center first-page-container'>
            <div className='first-page-title '><p>Battleship</p></div>
                <div className="iconShip">
                    <GiSinkingShip color="gray" fontSize="15em"/>
                </div>
            {/* <img src="https://www.navyrecognition.com/images/stories/news/2018/april/FSD150-CB-MK2.jpg" className='battleboat' alt="battleboat" /> */}

            <div>
                <Link to={'/'} className='text-decoration-none'><div className='boton btn'>START</div></Link>
            </div>

        </div>
    )
}

export default Firstpage