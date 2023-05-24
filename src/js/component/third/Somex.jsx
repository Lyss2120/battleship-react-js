import React, { useState } from 'react';
import '../../../styles/third.css';
// import Square from './square.jsx';
import Board from './board.jsx';
import Square from './square.jsx';
   // 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot
let gameBoard = [
    [1,1,1,2,2,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,3,3,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0]
];


const Somex = () => {
    // const [flip, setFlip] = useState(false);

    const [PlayerBoard, setPlayerBoard] = useState(gameBoard)
    // const [PlayerBoard, setPlayerBoard] = useState(Array(10).fill(Array(10).fill(1)));
//    console.log(PlayerBoard[0][0], 'Array(10)'); 
    const [PcBoard, setPcBoard] = useState(Array(100).fill(0))
    // console.log('PlayerBoard' ,PlayerBoard, 'PcBoard', PcBoard)
    // console.log('PlayerBoard [9][6]' ,PlayerBoard[9][6], 'PcBoard [86]', PcBoard[86])
 

    const [user, setUser] = useState('Player')
    // console.log(PlayerBoard);
    const [shipState, setShipState] = useState(1)
    const [ships, setShips] = useState([
        { name: 'submarine', length: 3, taken: false, shipState: shipState }, // coords: [[1,1],[1,2]], maxpos es 10 - el ancho del barco si es horizontal si el barco mide 5 =maxpos => 5
        { name: 'cruiser', length: 4, taken: false, shipState: shipState },// si es vertical 100 - el ancho del barco * 10 =maxpos => 50
        { name: 'battleship', length: 5, taken: false, shipState: shipState },// diagonal 100 - el ancho del barco * 11 =maxpos => 45 
        { name: 'carrier', length: 5, taken: false, shipState: shipState }
    ])

    const placeShips= (board)=>{
        console.log(PlayerBoard);
    // board va a quedar con lo que tenia y reemplaza las posiciones de los barcos en sus maxpos y ocupa los squares correspondientes a su medida
        const randomAlign = Math.floor(Math.random() * 3) // random number entre 0 y 2
        const align = randomAlign === 0 ? 'horizontal' : 1 ? 'vertical' : 'diagonal'// si no es 0 ni 1 es 2 cada nro tiene su alineación
        const maxpos = align === 'horizontal' ? 10 - ships.length : align === 'vertical' ? 100 - (ships.length * 10) :  100 - (ships.length * 11)// resta el largo del barco de la linea en la que va posicionado para que no se salga del tablero
        const randX = Math.floor(Math.random() * maxpos) + 1 // posición random entre 0 y maxpos incluida ej barco horizontal medida 6 seria entre 0 y 4
        // const randomY= Math.floor(Math.random() * maxpos) + 1
        //cambiar tablero para cualquiera de los dos players 
        const newTablero= board.slice;
        newTablero = ships[0].length //la medida seria ej 5, y la posicion ej 4 en horizontal(align) y en la fila 3, osea x=3,y=4
    // let coordship= ships[0].coords[0]
        // let newPlayerBoard= PlayerBoard.slice();
        // newPlayerBoard.splice((0[7]), 1, 'yt')
        // setPlayerBoard(newPlayerBoard)
    }

    const fireTorpedo = ()=>{
        // fireTorpedo funciona con un prompt en donde se ponen las coords o clickeando en el cuadrado a disparar
        const row = prompt('coordenadas x')
        const col = prompt('coordenadas y')
        console.log(row, col);
        const newPlayerBoard = [...PlayerBoard];
        newPlayerBoard[row][col] ++
        console.log(newPlayerBoard[row][col]);
        setPlayerBoard(newPlayerBoard)
        // setShipState(shipState+1)
      }

   
    return (
        <div className='wrapper'>
            <div className='game-info pt-5 '>
                <p> turn  : <span className='turn-display mx-2'>{user}</span></p>
                {/* <p> info: <span className='info'></span></p>  se muestra si hay ganador*/}
            </div>
            <div className='gamesBoard-container'>
                <Board ships={ships} setShips={setShips} shipState={shipState} setShipState={setShipState} board={PcBoard} setBoard={setPcBoard} user={'pc'} setUser={setUser} />
                <Board ships={ships} setShips={setShips} shipState={shipState} setShipState={setShipState} board={PlayerBoard} setBoard={setPlayerBoard} user={'player'} setUser={setUser} />
            </div>
            <div className='buttons row'>
                <button className='btn btn-secondary start-button row m-1'
                    onClick={() => { user === 'Player' ? setUser('Pc') : setUser('Player') }} //setear user en la func firetorpedo
                >start
                </button>
                <button className='btn btn-secondary fire-button row m-1'
                onClick={() => {fireTorpedo()}} >
                    
                    fire!!
                </button>
                <button className='btn btn-secondary showShips-button row m-1'>
                    show enemy ships
                </button>
            </div>
        </div>
    )
}

export default Somex

    // const shipToAdd = (itemtoadd, i, position, board) => {
    //     ships[i] === itemtoadd &&
    //         setShipToAdding(itemtoadd)//compara el objeto a ver si coincide con la posicion que se clickeó dentro del estado que contiene todos los objetos/ships 
    //     // const shipToAddCp= shipToAdding.slice();
    //     // console.log(shipToAddCp);
    //     // const newBoard= PcBoard.slice();
    //     // shipToAddCp = newBoard[i]


    // }