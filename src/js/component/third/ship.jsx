import React, {useContext} from 'react';
import { Context } from '../../store/appContext';

const Ship = (ship, key, name, color, taken, length, coords, shipState,) => {
    const { store, actions } = useContext(Context);
    
    return (
    <div className={`m-3 py-3 px-${ship.length}`} 
        style={{ backgroundColor: ship.color}}
        onDragStart={(e)=>console.log('dragging telllow', e.target)}
        onClick={()=>{actions.selectedShip(ship)}}
      >
        
        <span> {ship.name}  </span>
    </div>  
    )
}

export default Ship