import React, { useState } from 'react'
import Board from './Board.jsx'

const MyTicTacToe = () => {
const [player, setPlayer] = useState('player1')
const [squares, setSquares] = useState(Array(9).fill(null))
const [score, setScore] = useState({X:0, O:0})
console.log();


  return (
    <div>
        <span>App</span>
        <Board />
    </div>
  )
}

export default MyTicTacToe



    //las piezas empiezan con un valor null, al clickearlas en tictactoe se les asigna un valor.. si hago lo mismo en la etapa de posicionar los barcos serian squares null y squares ship, si le logro dar a todos los squares de un [ship] se hunde o cambia su state a sink. en la funcion onclick al clickear por segunda vez en el square cambia a atacado. son dos funciones distintas: shipPositon(esta ubica 5 barcos y ocupa una cantidad especifica de squares cdo se acaban los [ships] deja de hacer efecto la funcion) y fireTorpedo
    //en board tiene que haber un estado para dar turno a player o pc [player1, setPlayer1]=useState(true) empieza player1, puede ser un switch onclick setState(!player1) podria evaluar player1 ? <span> turno player1 </span> : <span> turno pc </span>;  player1 ? funcionDisparo : funcionRandomDisparo
    //Tambien un valor de barco en algunos squares y estado de atack(parte del barco) sink(todo el barco) miss(donde no hay barco) segun si hay o no barco
    //este array sirve para tener un valor que asignarle al componente square. que se puede crear a mano o con un map.(newArray(100).fill(null) llenar con null o '0' o lo que sea para que se pueda mapear) que crea un array de nulls para cambiar ese null con una funcion onclick (en el square y en un boton) por (ship; ship atacado, ship hundido), o fallaste el tiro
    
    //componente square: cada square recibira el valor de su coordenada y el valor de barco si lo hubiera con su respectivo estado que cambiara al click o al activar la funcion de disparo. (si no hay barco tmb tiene que haber una variable) attacked, sink, estado miss en donde no hay barco, 
    //al clickear uno o mas squares tmb se activa la funcion disparo?  o sino se posicionan los barcos.
    //usar horizontal y vertical como divs arriba y al lado para ubicar ahi las coorddss? ya estan en el array que el for crea...
