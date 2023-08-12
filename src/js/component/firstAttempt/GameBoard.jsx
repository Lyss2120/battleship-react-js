// import { useEffect } from 'react'
import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext";

// import { Context } from "../store/appContext";
import { v1 as uuidv1 } from 'uuid';
import "../../styles/gameboard.css";

const ships = [{ 'ship1': '1 div' }, { 'ship2': '2 div' }, { 'ship3': '3 div' }, { 'ship4': '4 div' }]
// el enemigo tiene que tene la misma gameboard con barcos ubicados en posicion random, tiene que tener lo mismo q el nuestro pero random.
// cuando yo dispare pc tiene que disparar a una coord  de dos numeros random. if cond == true setstate
const GameBoard = () => {
  const { store, actions } = useContext(Context);
  // const [boat, setBoat] = useState(false)// marca como que es un bote
  // const [inventory, setInventory] = useState(ships)//cuantos botes hay y que tamaño en divs tienen para ubicarlos en coordenadas
  const [bg, setBg] = useState(false) //cambia segun shipState puede tener animaciones y color vibrar para atacado agrandar achicar para hundido y algo mas para fallaste
  // const [shipState, setShipState]={empty:0, atacado:1, hundido:2, fallaste:3}//sera un classname para cambiar su aspecto ??
  const [board, setBoard] = ([])
  const horizontal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const vertical = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 

console.log(store.demo2.square);
  // let board = []
  //   for (let i = 0; i < vertical.length; i++) {
  //     for (let j = 0; j < horizontal.length; j++) {
  //       let coordX = vertical[i]
  //       let coordY = horizontal[j]
  //       let coords = coordX + ',' + coordY
  //       // let randId = uuidv1();
  // setBoard([coords])
  //       // board.push(<span className={bg ? 'tile bg-danger boat' : 'tile'} onClick={() => coords == coordX + ',' + coordY && setBg(true)}>{coords}</span>)
  //     }
  //   }
  //   console.log(board)
  

  return (
    <div>
      GameBoard
      <div className=''>
        <div className='gameboard'
        >{board}</div>
      </div>
    </div>
  )
}

export default GameBoard