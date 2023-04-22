import React, { useContext } from 'react';
import { Context } from "../store/appContext";
// import Square from './Square.jsx';

const horizontal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const vertical = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Table3 = () => {
    const { store, actions } = useContext(Context);

    let board = []
    //en board tiene que haber un estado para dar turno a player o pc [player1, setPlayer1]=useState(true) empieza player1, puede ser un switch onclick setState(!player1) podria evaluar player1 ? <span> turno player1 </span> : <span> turno pc </span>;  player1 ? funcionDisparo : funcionRandomDisparo
    //Tambien un valor de barco en algunos squares y estado de atack(parte del barco) sink(todo el barco) miss(donde no hay barco) segun si hay o no barco
    //este array sirve para tener un valor que asignarle al componente square. que se puede crear a mano o con un map.(newArray(100).fill(null) llenar con null o '0' o lo que sea para que se pueda mapear) que crea otro array de nulls para cambiar ese null con una funcion onclick (en el square y en un boton) por (ship; ship atacado, ship hundido), o fallaste el tiro
    //componente square: cada square recibira el valor de su coordenada y el valor de barco si lo hubiera con su respectivo estado que cambiara al click o al activar la funcion de disparo. (si no hay barco tmb tiene que haber una variable) attacked, sink, estado miss en donde no hay barco, 
    //al clickear uno o mas squares tmb se activa la funcion disparo?  o sino se posicionan los barcos.
    //<Square key={index} position={coords}/>
    // <span className='tile' >{vertical[i]},{horizontal[j]}</span>
    for (let i = 0; i < vertical.length; i++) {
        for (let j = 0; j < horizontal.length; j++) {
            let coordX = vertical[i]
            let coordY = horizontal[j]
            let coords = coordX + ',' + coordY
            board.push(<span className='tile' >{vertical[i]},{horizontal[j]}</span>)
        }
    }
    console.log(board)
    return (
        <div className=''>
            <div className='gameboard'>{board}</div>

        </div>
    )
}

export default Table3