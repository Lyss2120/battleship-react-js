import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

const Square = ({ i, j, coord, row, col, board, item, funct }) => {
  const { store, actions } = useContext(Context)
  const {shipsPlayer}= store;
  let sobrevolado=store.lightSquare.coords.includes(coord)
  // sobrevolado && console.log({sobrevolado});
  // onhover con el barco iluminar la posible posicion, se ilumina todo el tablero, solo las posiciones negativas se tienen que iluminar// setear selected ship al click y sacar el align para pasarselo a onclicksetShips con su align  mas row y col que va a capturar con onDragOver y llamar a la funcion onclicksetShips ahi o con onDrop
  const ship = store.selectedShip
  // console.log({shipsPlayer});


  return (
    <>
      <div key={i} className={`square tile  bg-${coord === 4 ? 'light bg-opacity-50' : board === store.PcBoard && coord != 0 ? store.enemyShipsClass : board === store.PlayerBoard && coord != 0 ? store.ShipsClass : coord === 2 ? 'warning' : coord === 3 ? 'danger' : null }`}
        onDragOver={(e) => { actions.handleOver(e, ship, row, col) }}//permite arrastrar el barco hacia el tablero
        onDrop={(e) => { actions.handleDrop(e, ship, row, col)}}//solo playerboard tiene que tener esta posibilidad
        onClick={() => actions.handleClick(board, row, col)}// solo pcBoard puede tener esta posibilidad de disparar al tablero  // style={{ backgroundColor: coord}}  // onClick={() => console.log('coord ' + row + ',' + col)}
      >
       {board === store.PcBoard ? 
        coord === 'miss' ? 'sea' : coord.length // GiWaterSplash // GiArmorPunch // GiBlast vertical // GiBlaster horizontal
        :
        coord === 0 ? '' : coord.length
        } 
        {/* 
          //si hay coord mostrar una pate del barco// alargar el svg encima del componente segun el largo del ship//aqui el barco o svg con el largo del barco// componente o parecido con css especial en el principio y final last first child..y que cambie de color
      */}  
      </div>

    </>
  )
}

export default Square
//  item={item}