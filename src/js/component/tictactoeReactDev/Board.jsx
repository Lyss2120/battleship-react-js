import React, { useState } from 'react'
import Square from './Square.jsx';

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        // console.log('i', i);
        if (squares[i] || calculateWinner(squares)) {
            return;
        }// si el square en la posicion enviada o la func calculatewinner retorna algo que es distinto de null return, osea si se cumple la condicion no sigue adelante y retorna nada.
        const nextSquares = squares.slice();
        xIsNext ? nextSquares[i]= 'X': nextSquares[i]= 'O';//asigna el valor que se mostrara en square segun el estado que empieza en true, si es true asigna X sino asigna O
        setSquares(nextSquares); //guarda el valor para el estado squares array que guarda el valor de cada square
        setXIsNext(!xIsNext);//Switch cambia de true a false para asignar un valor distinto a square cada vez...
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];//se crean 3 variables con destructuring en los items que vienen con 3 elementos tmb
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { //si el primer elemento es distinto de null se compara con los demas, ej si square[3] es distinto de null square[4] y square[5] tienen a x en su contenido; gana x
            return squares[a];//el jugador que gane x / o
          }
        }
        return null;// si no coincide retorna null lo que permite seguir jugando
      }

      const winner = calculateWinner(squares);//lo que retorne calculateWinner o null
      let status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O"); // si winner es distinto de null se nombra sino continua la partida y se nombra quien siguE
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={()=> handleClick(0)} /> {/* pasandole valor al prop de handleclick */}
                <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
                <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
                <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
                <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
                <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
                <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
            </div>
        </>
    )
}

export default Board