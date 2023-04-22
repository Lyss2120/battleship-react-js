import { useState } from 'react';
import React from 'react';
import "../../../styles/Game.css";



function Square({ value, onSquareClick }) {
  return (
    <button className="square p-2" onClick={onSquareClick}>
      {value}
    </button>
  );
}// 1°

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    } console.log(i);
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row"> //fila 1
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />// columna 1
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />// columna 2
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />// columna 3
      </div>
      <div className="board-row">//fila 2
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />// columna 1
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />// columna 2
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />// columna 3
      </div>
      <div className="board-row">//fila 3
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />// columna 1
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />// columna 2
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />// columna 3
      </div>
    </>
  );
}// se le da valor a cada square en vez de generar un square desde el array anidado.. para las coordenadas tendria que asignarle valor a la columna


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  console.log(history);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
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
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(squares[a]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
