import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import Columns from './Columns';
import Rows from './Rows';


const Table2 = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className=''>
            <div className='bg-secondary'>You</div>
            <table className=""> 
                <thead>
                    <tr>
                        {store.colArr.map((item, index) => {
                            setStore({ coordX: item.index})
                            return (
                                <Columns key={index}
                                    position={item.position} />
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {store.colArr.map((item, index) => {
                        setStore({ coordY: item.index})
                        return (
                            <Rows
                                key={index}
                                position={item.position} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table2