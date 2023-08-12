import React, {useContext} from 'react';
import { Context } from '../../store/appContext';
import '../../../styles/third.css';
import { GiIronHulledWarship } from 'react-icons/gi';



const Ship = (ship, key, name, color, taken, length, coords, shipState,) => {
    const { store, actions } = useContext(Context);
    
    return (
    <div className='m-3 b py-1 px-3' 
        onDragStart={(e)=>console.log('dragging telllow', e.target)}
        onClick={()=>{actions.selectedShip(ship)}}
    >
        <span className='d-grid place-items-center btn align-content-center'>
        {/* <RiShip2Line className='ship-icon'/> */}
        <span className='flip p-3 bg-danger'
         onClick={() => actions.flipShips()}
        >
            {/* <GiIronHulledWarship className='icon ' size={`${ship.length}em`}/> */}
            </span>
           {ship.name }  {ship.length}
        </span>
    </div>  
    )
}

export default Ship