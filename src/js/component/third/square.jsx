import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

const Square = ({ i, j, coordenada, row, col, board, item, funct }) => {
  const { store, actions } = useContext(Context)
  const { shipsPlayer } = store;
  let sobrevolado = store.lightSquare.coords.includes(coordenada)
  // sobrevolado && console.log({sobrevolado});
  // onhover con el barco iluminar la posible posicion, se ilumina todo el tablero, solo las posiciones negativas se tienen que iluminar// setear selected ship al click y sacar el align para pasarselo a onclicksetShips con su align  mas row y col que va a capturar con onDragOver y llamar a la funcion onclicksetShips ahi o con onDrop
  const ship = store.selectedShip //esto es cuando se toma el barco para dejarlo en el tablero, no sirve para el juego en si, tiene que ser el contenido de board[row][col]
  
  let coord = row + ',' + col
  let fired  = coordenada?.fire?.includes(row + ',' + col)//hit
  let colorfire = store.coordsArrayPc.includes(row + ',' + col)
  let colorfire2 
  // = store.coordsArrayPlayer.includes(row + ',' + col)seria sunken 
  let goodBoard = board === store.PcBoard ? 'PcBoard' : 'PlayerBoard'
  let barco,mar,miss,sunkShip; 
  coordenada === 0 ? mar=coordenada : coordenada === 'miss' ? miss = coordenada : coordenada.shipState >= 2 ? sunkShip=coordenada : barco=coordenada
  // sunkShip? console.log({sunkShip},'mar', mar) : console.log(coordenada.shipState, 'mar',mar)
  // if (coordenada == barco ){console.log('pcFired coords', store.pcFired,row, col,barco.coords[0].filter(item=> item === coord) ,barco.coords, board[row][col])}
  
  //  console.log('coordenada.fire', coordenada.fire, store.coordsArrayPc)
  
  
  return (
    <>
      {board === store.PcBoard ?
        <div key={i} className={`square tile  bg-${fired ? 'danger' : barco ? 'secondary' : miss ? 'primary bg-opacity-50' : sunkShip ? 'light' : barco && store.enemyShipsClass ? 'warning bg-opacity-25 border border-warning' : null }`}
          onDragOver={(e) => { actions.handleOver(e, ship, row, col) }}//permite arrastrar el barco hacia el tablero
          onClick={() => {actions.handleClick(board, row, col)}}// solo pcBoard puede tener esta posibilidad de disparar al tablero  // style={{ backgroundColor: coordenada}}  // onClick={() => console.log('coord ' + row + ',' + col)}
        >
          {
            coordenada === 'miss' ? 'miss' : coordenada.length ? '-': null // GiWaterSplash // GiArmorPunch // GiBlast vertical // GiBlaster horizontal
          }
          {/* 
          // pc   si hay coordenada mostrar una pate del barco// alargar el svg encima del componente segun el largo del ship//aqui el barco o svg con el largo del barco// componente o parecido con css especial en el principio y final last first child..y que cambie de color
      */}
        </div>
        : /*PlayerBoard*/
        <div key={i} className={`square tile  bg-${barco ? 'secondary bg-opacity-75' : coordenada === 'miss' ? 'primary bg-opacity-75' : sunkShip ? 'danger' : coordenada === 4 ? 'light bg-opacity-50' : board === store.PcBoard && coordenada != 0 ? store.enemyShipsClass : board === store.PlayerBoard && coordenada != 0 ? store.ShipsClass : coordenada === 2 ? 'warning' : coordenada === 3 ? 'danger' : null}`}
          onDragOver={(e) => { actions.handleOver(e, ship, row, col) }}//permite arrastrar el barco hacia el tablero
          onDrop={(e) => { actions.handleDrop(e, ship, row, col) }}//solo playerboard tiene que tener esta posibilidad
        >
          {coordenada === 'miss' ? 'miss' : sunkShip ? 'ups': coordenada.length
          }
        </div>
      }
    </>
  )
}

export default Square
//  item={item}