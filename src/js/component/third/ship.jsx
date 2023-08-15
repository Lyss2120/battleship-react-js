import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import '../../../styles/third.css';
import { GiIronHulledWarship } from 'react-icons/gi';



const Ship = (ship, key, name, color, taken, length, coords, shipState, align) => {
    const { store, actions } = useContext(Context);

    // console.log('sera?', store.selfAlign.shipName); modificar align correctamente!
 
    return (
        <div className={`m-3 align-${align} botones d-flex justify-content-between rounded`}/*bg-warning*/// // onClick={() => { actions.selectedShip(ship) }}
        >
            <span className={`${ship.name} ship-${ship.length} btn align-${align}`}
                draggable='true'
                onClick={()=>{actions.flipShips(ship)}}//cambiar el align que por defecto en flip es horizontal, aqui cambia flip para setear selfalign segun flip vaya girando. selfalign guarda el align y el barco al que corresponde
                onDragStart={(e) => {actions.setSelectedShip(e, ship)}}//set selectedShip a ship// permite levantar el barco para llevarlo al tablero// onClick={() => actions.flipShips(ship)}// onClick={(e) => console.log('ship', e.target)}
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
