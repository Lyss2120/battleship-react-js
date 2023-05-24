import React from 'react'
import Square from './square.jsx';
import SquareTop from './square-top.jsx';
// import '../../../styles/gameboard.css'

const Board = ({ board, setBoard, user, setUser, setShipState, shipState, ships, setShips }) => {

  const squareClick = (i, board, row, col) => {
    let newBoard = [...board]
    let oneship = 1
    let shipLength = 4
    let total = row + shipLength
    let boardFin = 10 - total
    console.log({ row });
    if (newBoard[row][col] > 0 && newBoard[row][col] < 3) {
      console.log(newBoard[row][col], 'gggg'); //si es 1 o 2 aumentar 1, si fuera 3 quiero que ponga todo rojo... la idea es que el barco entero este ahogado y se ponga ocn ese estado dentro del objeto en ships
      // shipState in shipLength === 3 shipState drown

      newBoard[row][col]++
      setBoard(newBoard)
    } else {
      if (boardFin > 0 || boardFin === 0) {
        for (let i = row; i < total; i++) {
          // console.log('1r', row, 'total', total, 'boardFin', boardFin)
          newBoard[row][col] = oneship
          row += 1
          // console.log('2r', row)
      //total suma la posicion de row mas el largo del barco y eso se resta de la cantidad de squares en cada linea (10), si no hay mas espacio dara 0 y no puede pasar de eso
    }
    setBoard(newBoard)


    //setea board con los cambios realizados arriba
  }}}




  let row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (

    <>
      <div className=''>
        <span>{user}</span>
        <SquareTop row={row} clase={'flex-row  ms-2 square-top'} />
        <div className='d-flex'>
          <SquareTop row={row} clase={'flex-column  px-1 square-top'} />
          <div className='d-flex columnas game-board'>
            {row.map((col, i) => {
              return (
                <div key={i} className='filas segundoTop'>
                  {row.map((row, i) => {
                    return (
                      <Square key={i} className="square " lol={board[row][col]} row={row} col={col} squareClick={() => squareClick(i, board, row, col)} />
                    )
                  })}
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* 
      <div className=''>
        <span>{user}</span>
        <SquareTop row={row} clase={'flex-row  ms-2 square-top'} />
        <div className='d-flex'>
          <SquareTop row={row} clase={'flex-column  px-1 square-top'} />
          <div className='d-flex columnas game-board'>
           {board.map((col, i) => {
              return (
                <div key={i} className='filas segundoTop columnas'>
                  <Square key={i} className="square " lol={board[i]} row={row} col={col} squareClick={() => squareClick(i, board, row, col)} />
                </div>
              )
            })}  
   {board.map((item, i) => {
              console.log(item, board[i][i], 'item')
            })} 
          </div>

        </div>
      </div>  */}
    </>
  )
}

export default Board



{/* <div className='game-board'>
        {board.map((item, i) => {
          return (
            <Square key={i} id={i} item={item} squareClick={() => squareClick(i, board)} />
          )
        })}
      </div> 
      //   const squareClick = (i, board, row, col) => {
    console.log('squareClick', i, row, col);
    let newBoard = board.slice();
    let x= Math.floor(Math.random() * 11)// 1-100
    let y= Math.floor(Math.random() * 11)// 1-100
    const randomPosition = [x,y];
    // console.log(newBoard[i],'hhhhh');
    // const shipp = ships.map((ship, i) => {
    //   console.log(ship, 'ship');
    //   return (
    //     ship.map((item, i) => {

    //     })
    //   )
    // })
    // console.log(shipp);
    // newBoard[row].splice([col], 1, randomPosition);//eliminando el lugar
    // let xx=newBoard[row][col];//reemplazando el contenido
    // newBoard[0].splice(7, 1, 'yt')
    // setBoard(newBoard)
    // xx.splice([0], 1, 'hello');
    // xx=[8,9,7,65,9]
    // newBoard = newBoard.filter(item => item == xx )

    // console.log(xx, 'xx');
    // console.log(newBoard, 'newBoard');

    // setBoard([...newBoard, xx])//agregando con los dmas

    // console.log(newBoard);
    // barco.length.map((parte, i) => {
    //   console.log(parte, i, 'barco');
    //   return(
    //     <span bg-danger>{i}</span>
    //   )
    // }) ship 
    //cuadrados segun el length del barco

  }
*/}