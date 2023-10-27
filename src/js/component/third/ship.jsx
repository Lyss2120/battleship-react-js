import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import '../../../styles/third.css';
import { GiIronHulledWarship, GiLog } from 'react-icons/gi';
import { BiRotateRight } from "react-icons/bi";


const Ship = (ship) => {
    const { store, actions } = useContext(Context);

    let align2, setShip

    if (store.selfAlign.shipName === ship.name) {
        align2 = store.selfAlign.align
        if (store.shipsPlayer.length === 4) {
            align2 = 'horizontal'
        }
    }
    store.shipsPlayer.map((item, i)=>{
        if (item.name === ship.name ) {setShip = ship.name}
         console.log({setShip},ship, store.shipsPlayer)
     })


    return (
        <div draggable='true' className={`m-auto py-4 mx-3 botones ship d-flex justify-content-between `}/*bg-warning*/// // onClick={() => { actions.selectedShip(ship) }}
        >
            <span className={`${ship.name} bg-${setShip? 'dark' : 'light'} opacity-75 ship-${ship.length} ship-box btn align-${align2} justify-content-center`}
                draggable='true'
                onClick={() => { actions.flipShips(ship) }}//cambiar el align que por defecto en flip es horizontal
                onDragStart={(e) => { actions.setSelectedShip(e, ship) }}//barco seleccionado
                // onDrag={e=>console.log('drag')}
                onDragEnd={() => console.log('DRAGEND')}
                onDrop={() => console.log('onDrop')}
            >
                <span>
                    <BiRotateRight />
                </span>
                {/* <div className='m-auto  mx-3 botones'> */}


                {/* </div> */}

            </span>
            {/* <span className=' pe-3'>{ship.name}</span> */}
        </div>
    )
}

export default Ship

{/* <GiIronHulledWarship className='icon ' size={`${ship.length}em`}/> */ }
{/* <RiShip2Line className='ship-icon'/>  px-${ship.length}*/ }
{/* <span className='store.flip p-3 bg-danger' */ }
