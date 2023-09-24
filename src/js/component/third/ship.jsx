import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import '../../../styles/third.css';
import { GiIronHulledWarship, GiLog } from 'react-icons/gi';



const Ship = (ship) => {
    const { store, actions } = useContext(Context);
    let align2 
    if(store.selfAlign.shipName === ship.name ){
        align2 = store.selfAlign.align
        if (store.shipsPlayer.length === 4){          
            align2 = 'horizontal' 
          }
    }

    return (
        <div className={`m-auto mx-3 botones ship d-flex justify-content-between rounded bg-warning`}/*bg-warning*/// // onClick={() => { actions.selectedShip(ship) }}
        >
            <span className={`${ship.name} bg-warning ship-${ship.length} btn align-${align2}`}
                draggable='true'
                onClick={()=>{actions.flipShips(ship)}}//cambiar el align que por defecto en flip es horizontal
                onDragStart={(e) => {actions.setSelectedShip(e, ship)}}//barco seleccionado
            >
                <span className={``}>
                    {ship.length}
                </span>
            </span>
            <span className=' pe-3'>{ship.name}</span>
        </div>
    )
}

export default Ship

{/* <GiIronHulledWarship className='icon ' size={`${ship.length}em`}/> */ }
{/* <RiShip2Line className='ship-icon'/>  px-${ship.length}*/ }
{/* <span className='store.flip p-3 bg-danger' */ }
