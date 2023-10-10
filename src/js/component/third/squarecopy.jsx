import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import Ship from './ship.jsx'
import { GiIronHulledWarship } from "react-icons/gi"
import { IconContext } from "react-icons";
import rigoBaby from "../../../img/rigo-baby.jpg"
import target from "../../../img/target.png"
import fire from "../../../img/fire.png"
import how from "../../../img/warship-silhouette-14.png"
import warShip2 from "../../../img/textura barcos.png"
import warShip from "../../../img/ship-color-texture.png"


const Square = ({ i, j, coordenada, row, col, board, item, funct }) => {
  const { store, actions } = useContext(Context)
  const { shipsPlayer, PcBoard } = store;
  // let sobrevolado = store.lightSquare.coords.includes(coordenadaPc)// sobrevolado && console.log({sobrevolado});// onhover con el barcoPc iluminar la posible posicion, se ilumina todo el tablero, solo las posiciones negativas se tienen que iluminar// setear selected ship al click y sacar el align para pasarselo a onclicksetShips con su align  mas row y col que va a capturar con onDragOver y llamar a la funcion onclicksetShips ahi o con onDrop
  
  const ship = store.selectedShip //esto es cuando se toma el barcoPc para dejarlo en el tablero, no sirve para el juego en si, tiene que ser el contenido de board[row][col]
  
  let user, coordPc, coordPlayer, startPc, startPlayer, coordenadaPc, coordenadaPlayer, PcShipCoords, PlayerShipCoords, barcoPc, barcoPlayer, marPc, marPlayer, missPc, missPlayer, sunkShipPc, sunkShipPlayer;
  //sacar la ultima coordenadaPc para en esa posicion mostrar <Ship />

  console.log('llllll',coordenada)
  
  board === PcBoard ?( coordenadaPc = coordenada, user = 'Pc', console.log(coordenada,{coordenadaPc}) ):( coordenadaPlayer = coordenada, user = 'Player' )  //dividir las variables para pc y player
  
  let firedPc = coordenadaPc?.fire?.includes(row + ',' + col)//hit
  let firedPlayer = coordenadaPlayer?.fire?.includes(row + ',' + col)//hit
 
  // = store.coordsArrayPlayer.includes(row + ',' + col)seria sunken 

  coordenadaPc === 0 ? marPc = coordenadaPc : coordenadaPc === 'miss' ? missPc = coordenadaPc : coordenadaPc?.shipState >= 2 ? sunkShipPc = coordenadaPc : barcoPc = coordenadaPc
  // sunkShip? console.log({sunkShip},'mar', mar) : console.log(coordenadaPc.shipState, 'mar',mar)
  // if (coordenadaPc == barcoPc ){console.log('pcFiredPc coords', store.pcFiredPc,row, col,barcoPc.coords[0].filter(item=> item === coord) ,barcoPc.coords, board[row][col])}
  if (coordenadaPc === barcoPc) {
console.log(barcoPc)
    PcShipCoords = barcoPc.coords
    
    barcoPc.align === 'diagonal' ?
      (barcoPc.length === 4 ? startPc = PcShipCoords[1]
        : barcoPc.length === 5 ? startPc = PcShipCoords[2]
          : barcoPc.length === 3 ? startPc = PcShipCoords[1] : null) // : startPc = PcShipCoords[PcShipCoords.length -3]//la última posición
      :
      barcoPc.align === 'vertical' ?
        (barcoPc.length === 4 ? startPc = PcShipCoords[1]
          : barcoPc.length === 5 ? startPc = PcShipCoords[2]
            : barcoPc.length === 3 ? startPc = PcShipCoords[1] : null)
        :
        barcoPc.align === 'horizontal' ?
          (barcoPc.length === 4 ? startPc = PcShipCoords[2] // mas margin-left 50px
            : barcoPc.length === 5 ? startPc = PcShipCoords[2]
              : barcoPc.length === 3 ? startPc = PcShipCoords[1] : null)
          : console.log('linea if (coordenadaPc === barcoPc) no funciona..x ??');

    coordPc = [startPc[0], startPc[1]] //revisar el nombre de la variable para quwe sea mas facil de entender.representativo
    console.log(barcoPc.name + 'PcShipCoords startPc', { PcShipCoords }, { startPc })

    // if (coord2 ) {
    //   console.log('encontro la posicion!!', row,col, PcShipCoords[0],barcoPc.coords)(ship 3 tiene q empezar en 1 posicion - ship  4 diagonal en posicion 0 sin margen left, ship diagonal 5 tiene que estar en la segunda posicion  )
    // } si es horizontal 50px si es diagonal 60px
  }

  if (coordenadaPlayer === barcoPlayer) {
console.log(barcoPlayer)
    PlayerShipCoords = barcoPlayer.coords
    
    barcoPlayer.align === 'diagonal' ?
      (barcoPlayer.length === 4 ? startPlayer = PlayerShipCoords[1]
        : barcoPlayer.length === 5 ? startPlayer = PlayerShipCoords[2]
          : barcoPlayer.length === 3 ? startPlayer = PlayerShipCoords[1] : null) // : startPlayer = PlayerShipCoords[PlayerShipCoords.length -3]//la última posición
      :
      barcoPlayer.align === 'vertical' ?
        (barcoPlayer.length === 4 ? startPlayer = PlayerShipCoords[1]
          : barcoPlayer.length === 5 ? startPlayer = PlayerShipCoords[2]
            : barcoPlayer.length === 3 ? startPlayer = PlayerShipCoords[1] : null)
        :
        barcoPlayer.align === 'horizontal' ?
          (barcoPlayer.length === 4 ? startPlayer = PlayerShipCoords[2] // mas margin-left 50px
            : barcoPlayer.length === 5 ? startPlayer = PlayerShipCoords[2]
              : barcoPlayer.length === 3 ? startPlayer = PlayerShipCoords[1] : null)
          : console.log('linea if (coordenadaPc === barcoPlayer) no funciona..x ??');

    coordPlayer = [startPlayer[0], startPlayer[1]] //revisar el nombre de la variable para quwe sea mas facil de entender.representativo
    console.log(barcoPlayer.name + 'PlayerShipCoords startPc', { PlayerShipCoords }, { startPlayer })

    // if (coord2 ) {
    //   console.log('encontro la posicion!!', row,col, PcShipCoords[0],barcoPc.coords)(ship 3 tiene q empezar en 1 posicion - ship  4 diagonal en posicion 0 sin margen left, ship diagonal 5 tiene que estar en la segunda posicion  )
    // } si es horizontal 50px si es diagonal 60px
  }

  // `if (coordenada${user} === barco${user}) {

  //   ${user}ShipCoords = barco${user}.coords
    
  //   barco${user}.align === 'diagonal' ?
  //     (barco${user}.length === 4 ? start${user} = ${user}ShipCoords[1]
  //       : barco${user}.length === 5 ? start${user} = ${user}ShipCoords[2]
  //         : barco${user}.length === 3 ? start${user} = ${user}ShipCoords[1] : null) la segunda posición
  //     :
  //     barcoPc.align === 'vertical' ?
  //       (barco${user}.length === 4 ? start${user} = ${user}ShipCoords[1]
  //         : barco${user}.length === 5 ? start${user} = ${user}ShipCoords[2]
  //           : barco${user}.length === 3 ? start${user} = ${user}ShipCoords[1] : null)
  //       :
  //       barcoPc.align === 'horizontal' ?
  //         (barco${user}.length === 4 ? start${user} = ${user}ShipCoords[2] // mas margin-left 50px
  //           : barco${user}.length === 5 ? start${user} = ${user}ShipCoords[2]
  //             : barco${user}.length === 3 ? start${user} = ${user}ShipCoords[1] : null)
  //         : console.log('linea if (coordenadaPc === barcoPc) no funciona..x ??');

  //   coord${user} = [start${user}[0], start${user}[1]] //revisar el nombre de la variable para quwe sea mas facil de entender.representativo
  //   console.log(barcoPc.name + ' ' +{user}+'ShipCoords start'+{user}, ${user}ShipCoords, start${user})

  //   // if (coord2 ) {
  //   //   console.log('encontro la posicion!!', row,col, PcShipCoords[0],barcoPc.coords)(ship 3 tiene q empezar en 1 posicion - ship  4 diagonal en posicion 0 sin margen left, ship diagonal 5 tiene que estar en la segunda posicion  )
  //   // } si es horizontal 50px si es diagonal 60px
  // }`

  return (
    <>
      {board === PcBoard ?
        <div 
        key={i} //en pc board no se deben ver los barcos pero si los  miss y los disparos... los barcos con un border solamente cuando se necesita
        className='square tile'
          // `square tile bg-${firedPc ? 'danger' : missPc ? 'primary bg-opacity-50' : sunkShipPc ? 'light' : barcoPc && store.enemyShipsClass ? 'warning bg-opacity-25 border border-warning' : null}`}
        onDragOver={(e) => { actions.handleOver(e, ship, row, col) }}//permite arrastrar el barcoPc hacia el tablero
        onDragEnter={(e) => console.log('dragenter', e)}
        onClick={() => { actions.handleClick(board, row, col) }}// solo pcBoard puede tener esta posibilidad de disparar al tablero  // style={{ backgroundColor: coordenadaPc}}  // onClick={() => console.log('coord ' + row + ',' + col)}
        >
          {
            coordenadaPc === 'miss' ? 'miss'
              :
              barcoPc ?
                (row === coordPc[0] && col === coordPc[1] ?
                  (barcoPc.name === 'submarine' ?
                    <img src={warShip} className={`PcShipBorder Player ${barcoPc.name} ship-${barcoPc.length} align-${barcoPc.align} `} alt="barcoPc" />
                    :
                    <img src={warShip2} className={`PcShipBorder Player ${barcoPc.name} ship-${barcoPc.length} align-${barcoPc.align} `} alt="barcoPc" />
                  )
                  :
                  null)
                : null

            //GiWaterSplash // GiArmorPunch // GiBlast vertical // GiBlaster horizontal//si el barcoPc-4 es horizontal margen mas 50 top si es diagonal 50 top 50 left
          }
        </div>

        : /*PlayerBoard*/

        <div 
        key={i} 
        className={`square tile  bg-${barcoPlayer ? null : coordenadaPlayer === 'miss' ? 'primary bg-opacity-75' : board === store.PlayerBoard && coordenadaPlayer != 0 ? store.ShipsClass : null}`}
        onDragOver={(e) => { actions.handleOver(e, ship, row, col) }}//permite arrastrar el PlayerShip hacia el tablero
        onDragEnter={(e) => console.log('dragenter', e)}
        onDrop={(e) => { actions.handleDrop(e, ship, row, col)}}//solo playerboard tiene que tener esta posibilidad de dejar los PlayerShips        
      >
          {
            coordenadaPlayer === 'miss' ? 'miss'
              :
              barcoPlayer ? (row === coordPlayer[0] && col === coordPlayer[1] ?
                                    (barcoPlayer.name === 'submarine' ?
                                      <img src={warShip} className={`rigoBaby ${barcoPlayer.name} ship-${barcoPlayer.length} align-${barcoPlayer.align} `} alt="barcoPlayer" />
                                      :
                                      <img src={warShip2} className={`rigoBaby ${barcoPlayer.name} ship-${barcoPlayer.length} align-${barcoPlayer.align} `} alt="barcoPlayer" />
                                    )
                            :null)
              : null

            //GiWaterSplash // GiArmorPunch // GiBlast vertical // GiBlaster horizontal//si el barcoPc-4 es horizontal margen mas 50 top si es diagonal 50 top 50 left
          }
        </div>
      }
    </>
  )
}

export default Square

//  item={item}
  // {coordenadaPc === 'miss' ? 'miss' : sunkShip ? 'ups' : barcoPc ?
  //           <Ship
  //             name={ship.name}
  //             taken={ship.taken}
  //             length={1}
  //             coords={ship.coords}
  //             shipState={ship.shipState}
  //           //padding 20px , poner el ship solo en el primer o último square
  //           />
  //           : null
  //         } 


