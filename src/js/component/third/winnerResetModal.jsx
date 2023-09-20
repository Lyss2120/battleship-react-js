import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext";

const WinnerResetModal = () => {
    const { store, actions } = useContext(Context);
    const { user, PcBoard, PlayerBoard, winner } = store;

    return (
        <div className='justify-content-center'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           GANO : {winner} !!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=> actions.reset()}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
/*         <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>WINNER IS : {winner}.</p>
                        <p>para empezar denuevo presiona reset</p>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Reset</button>
                    </div>
                </div>
            </div>
        </div>
 */    )
}

export default WinnerResetModal