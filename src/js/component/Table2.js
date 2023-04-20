import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import Columns from './Columns';
import Rows from './Rows';


const Table2 = () => {
    const { store, actions } = useContext(Context);
    console.log(store.getCoord, 'getCoord');
    return (
        <div className=''>
            <div className='bg-secondary'>You</div>
            <table className="">
                <thead>
                    <tr>
                        {store.colArr.map((item, index) => {
                            return (
                                <Columns
                                    key={index}
                                    position={item.position}
                                    getCoord={actions.getCoord(item.position)} />
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {store.colArr.map((item, index) => {
                        return (
                            <Rows
                                key={index}
                                position={item.position}
                                getCoord={actions.getCoord(item.position)} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table2