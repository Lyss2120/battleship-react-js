import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import Square from './square.jsx';
import SquareTop from './square-top.jsx';
// import '../../../styles/gameboard.css'
// , setBoard, setUser, setShipState, shipState, ships, setShips, fireTorpedo iconos para disparos:  BsFillRecordFill - BsFillRecord2Fill o BiBrightness con color bco y rojo , o impacto bala: GiScreenImpact - GiGooeyImpact- SiFireship cdo se hunde          
{/* <a href="https://www.flaticon.com/free-animated-icons/fire" title="fire animated icons">Fire animated icons created by Freepik - Flaticon</a> */ }

const Board = ({ board, user }) => {

  const { store, actions } = useContext(Context);
  const { selfAlign} = store;//se marca solo cuando se cambia el align se tiene que marcar al drop
  console.log(selfAlign);
  let row = store.row
  // let ship = board === store.PcBoard ? store.takenShipPC.map((item, i) => { item }) : store.takenShipPlayer.map((item, i) => { item })
  // console.log('llamado desde board component',{ship});///como capturar ship... si no se actualiza el array de store.ships..
console.log(store.flip, store.selfAlign);
  return (
    <>
      <div className='' >
        <div className='fs-4 turn-display'>{user}</div>
        <SquareTop row={row} clase={'flex-row  ms-2 square-top'} />
        <div className='d-flex'>
          <SquareTop row={row} clase={'flex-column  px-1 square-top'} />
          <div className='d-flex tablero sea  game-board' >
            {new Array(10).fill(0).map((_, i) => {
              return (
                <div key={i} className='d-flex justify-content-around'
                >
                  {board[i].map((item, j) => {
                    // console.log(board[i][j], board );
                    return (

                      <Square className="rowss square"
                        key={j}
                        coord={board[i][j]}
                        row={i} col={j}
                        item={item}
                        board={board}
                        funct={actions.squareClick}
                      />

                    )
                  })}
                </div>
              )
            })}
          </div>

        </div>
      </div>



    </>
  )
}

export default Board
{/* {board[i][j] === 0 ?
                      <Square className="rowss square" 
                              key={j} 
                              coord={board[i][j]} 
                              row={i} col={j} 
                              item={item} 
                              board={board}  
                              funct={actions.squareClick}
                        />
                        : 
                        <Square className="rowss square" 
                              key={j} 
                              coord={board[i][j]} 
                              row={i} col={j} 
                              item={item} 
                              board={board}  
                              funct={actions.squareClick}
                        />
                        } */}



