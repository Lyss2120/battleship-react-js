import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import texturaBarcos from "../../../img/textura barcos.png"

const Square = ({ i, j, coordenada, row, col, board, item, funct }) => {
  const { store, actions } = useContext(Context)
  const { PcBoard, PlayerBoard } = store;
  let sobrevolado = store.lightSquare.coords.includes(coordenada)
  // sobrevolado && console.log({sobrevolado});
  // onhover con el barco iluminar la posible posicion, se ilumina todo el tablero, solo las posiciones negativas se tienen que iluminar// setear selected ship al click y sacar el align para pasarselo a onclicksetShips con su align  mas row y col que va a capturar con onDragOver y llamar a la funcion onclicksetShips ahi o con onDrop
  const ship = store.selectedShip //esto es cuando se toma el barco para dejarlo en el tablero, no sirve para el juego en si, tiene que ser el contenido de board[row][col]
  let colorfire = store.coordsArrayPc.includes(row + ',' + col)
  let colorfire2 = store.coordsArrayPlayer.includes(row + ',' + col)
  colorfire && console.log({ colorfire }, { colorfire2 }, row + ',' + col, store.coordsArrayPc)

  let goodBoard, user, coordenadaPc, pcShip, pcSea, pcMiss, pcShipCoords, midCoordPc, startPc, pcSunkShip, coordenadaPlayer, playerShip, playerSea, playerMiss, playerShipCoords, midCoordPlayer, startPlayer, playerSunkShip

  board === PcBoard ? (user = 'pc', goodBoard = 'PcBoard', coordenadaPc = coordenada) : (user = 'player', goodBoard = 'PlayerBoard', coordenadaPlayer = coordenada)

  coordenadaPc === 0 ? pcSea = coordenadaPc : coordenadaPc === 'miss' ? pcMiss = coordenadaPc : coordenadaPc?.shipState >= 2 ? pcSunkShip = coordenadaPc : pcShip = coordenadaPc
  coordenadaPlayer === 0 ? playerSea = coordenadaPlayer : coordenadaPlayer === 'miss' ? playerMiss = coordenadaPlayer : coordenadaPlayer?.shipState >= 2 ? playerSunkShip = coordenadaPlayer : playerShip = coordenadaPlayer

  if (board === PcBoard) {
    if (coordenadaPc === pcShip) {
      pcShipCoords = pcShip?.coords
      pcShip.align === 'diagonal' || pcShip.align === 'vertical' ?
        (pcShipCoords.length === 4 ? midCoordPc = pcShipCoords[1] // la parte central del barco se va a ubicar en esta posición 
          : pcShipCoords.length === 5 ? midCoordPc = pcShipCoords[2]
            : midCoordPc = pcShipCoords[1])
        :
        pcShip.align === 'horizontal' ? (pcShipCoords.length === 4 ? midCoordPc = pcShipCoords[2] // mas margin-left 50px
          : pcShipCoords.length === 5 ? midCoordPc = pcShipCoords[2]
            : midCoordPc = pcShipCoords[1])
          :
          console.log('linea if (coordenadaPc === pcShip) no funciona..x ??')// si no cae en ninguna las tres opciones de alineacion
      // console.log({ pcShip }, 'pcShip.align', pcShip.align);
    }
  }
  if (board === PlayerBoard) {
    if (coordenadaPlayer === playerShip) {
      playerShipCoords = playerShip.coords
      // console.log('playerShip name', playerShip.name, playerShipCoords, playerShip.coords);

      playerShip.align === 'diagonal' || playerShip.align === 'vertical' ?
        (playerShipCoords.length === 4 ? midCoordPlayer = playerShipCoords[1] // la parte central del barco se va a ubicar en esta posición 
          : playerShipCoords.length === 5 ? midCoordPlayer = playerShipCoords[2]
            : midCoordPlayer = playerShipCoords[1])
        :
        playerShip.align === 'horizontal' ?
          (playerShipCoords.length === 4 ? midCoordPlayer = playerShipCoords[2] // mas margin-left 50px
            : playerShipCoords.length === 5 ? midCoordPlayer = playerShipCoords[2]
              : midCoordPlayer = playerShipCoords[1])
          :
          console.log('linea if (coordenadaPlayer === playerShip) no funciona..x ??', playerShip)// si no cae en ninguna las tres opciones de alineacion
      // console.log({ playerShip }, playerShipCoords);
    }
  }
// COLOREA EN ROJO DONDE HAY MAR, Y DICE QUE YA SE DISPARO EN UN LUGAR QUE NO HE DISPARADO, PROBABLEMENTE ES EN EL TABLERO PLAYER QUE YA S DISPARO ASEGURAR LOS DOS ARRAYS SEAN DISTINTOS Y LAS ROW Y COL TMB SE DIFERENCIEN


  return (
    <>
      {board === store.PcBoard ?
        <div key={i} 
        className={`square tile  bg-${pcShip ? null : coordenadaPc === 'miss' ? 'primary bg-opacity-75' : board === store.PcBoard && coordenadaPc != 0 ? store.ShipsClass : null}`}
          onDragOver={(e) => { actions.handleOver(e, ship, row, col) }}//permite arrastrar el barco hacia el tablero
          onClick={() => actions.handleClick(board, row, col)}// solo pcBoard puede tener esta posibilidad de disparar al tablero  // style={{ backgroundColor: coordenada}}  // onClick={() => console.log('coord ' + row + ',' + col)}
        >
          {
            coordenada === 'miss' ? 'miss' // si un tiro dio en mar
              // : coordenada !=0  ? '-' //si hay barco
              : pcShip ? ( // solo mostrar esto si la variable es true-> enemyships? div PcShipBorder : null
                row === midCoordPc[0] && col === midCoordPc[1] &&
                <div className={`rigoBaby PcShipBorder ${pcShip.name} ship-${pcShip.length} align-${pcShip.align} `}>{pcShip.name}</div>//si hay barco
              )
                : null
            //sino sería mar // GiWaterSplash // GiArmorPunch // GiBlast vertical // GiBlaster horizontal
          }
        </div>
        : /*PlayerBoard*/ //que barcos le esta enviando a firetorpedo cada tablero solo hay que enviar los de player cdo pc dispara y los de pc cdo player dispara
        <div key={i} 
        className={`square tile  bg-${playerShip ? null : coordenadaPlayer === 'miss' ? 'primary bg-opacity-75' : board === store.PlayerBoard && coordenadaPlayer != 0 ? store.ShipsClass : null}`}
          onDragOver={(e) => { actions.handleOver(e, ship, row, col) }}//permite arrastrar el barco hacia el tablero
          onDrop={(e) => { actions.handleDrop(e, ship, row, col), console.log('drop'); }}//solo loguea dragend//solo playerboard tiene que tener esta posibilidad
        >
          {/* {
            coordenada === 'miss' ? 'miss' : coordenada != 0 ? coordenada.length : null // GiWaterSplash // GiArmorPunch // GiBlast vertical // GiBlaster horizontal
          } */}
          {
            coordenada === 'miss' ? 'miss' // si un tiro dio en mar
              // : coordenada !=0  ? '-' //si hay barco
              : playerShip ? ( // solo mostrar esto si la variable es true-> enemyships? div PlayerShipBorder : null
                row === midCoordPlayer[0] && col === midCoordPlayer[1] &&
                <img src={texturaBarcos} alt="barco" className={`rigoBaby ${playerShip.name} ship-${playerShip.length} align-${playerShip.align} `} />
              )
                : null
            //sino sería mar // GiWaterSplash // GiArmorPunch // GiBlast vertical // GiBlaster horizontal
          }

        </div>
      }
    </>
  )
}

export default Square
//  item={item}