import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import '../../../styles/third.css';
import { GiIronHulledWarship } from 'react-icons/gi';



const Ship = (ship, key, name, color, taken, length, coords, shipState, align) => {
    const { store, actions } = useContext(Context);

console.log('sera?', store.selfAlign.shipName);

    return (
        <div className={`m-3 align-${align} botones d-flex justify-content-between `}/*bg-warning*/
        
            onDragStart={(e) => console.log('dragging ship', e.target)}
            onClick={() => { actions.selectedShip(ship) }}
        >
            <span className={`${ship.name} ship-${ship.length} btn `} > {/*bg-danger*/} 
                <span className={` align-${align}`}onClick={() => actions.flipShips(ship)}>{ship.length}</span>
            </span>
            <span className=''>{ship.name}</span>

        </div>
    )
}

export default Ship

                    {/* <GiIronHulledWarship className='icon ' size={`${ship.length}em`}/> */}
                {/* <RiShip2Line className='ship-icon'/>  px-${ship.length}*/}
                {/* <span className='store.flip p-3 bg-danger' */}
