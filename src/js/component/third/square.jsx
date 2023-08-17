import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

const Square = ({ i, j, coord, row, col, board, item, funct }) => {
  const { store, actions } = useContext(Context)

  // setear selected ship al click y sacar el align para pasarselo a onclicksetShips con su align  mas row y col que va a capturar con onDragOver y llamar a la funcion onclicksetShips ahi o con onDrop

  return (
    <>
      <div key={i} className={`square tile bg-${coord === 4 ? 'light bg-opacity-50' : board === store.PcBoard && coord != 0 ? store.enemyShipsClass : board === store.PlayerBoard && coord != 0 ? store.ShipsClass : coord === 2 ? 'warning' : coord === 3 ? 'danger' : 'null'}`}
        onDragOver={(e) => { e.preventDefault(), console.log('draggOveer ship',e.target, row, col) }}//permite arrastrar el barco hacia el tablero
        onDrop={(e) =>  actions.handleDrop(ship, row, col)}//solo playerboard tiene que tener esta posibilidad
        onClick={() => actions.handleClick(board, row, col)}// solo pcBoard puede tener esta posibilidad de disparar al tablero  // style={{ backgroundColor: coord}}  // onClick={() => console.log('coord ' + row + ',' + col)}
      >
        {store.ships.map((ship, i) => {
          if (ship.coords === [row, col]) console.log('ship encontrado', ship)
          // else console.log(ship.name, row, col, 'square');//repite muchas veces todo

          // return ship
        })}
        {board === store.PcBoard ?
          // ''
          coord.name

          :
          coord === 0 ?
            ''
            : coord.name
          // : store.ships.map((ship, i) => {
          //   ship.coords === [row, col] ? console.log(i,'ship encontrado', ship):console.log('no');
          // })
          //si hay coord mostrar una pate del barco// alargar el svg encima del componente segun el largo del ship//aqui el barco o svg con el largo del barco// componente o parecido con css especial en el principio y final last first child..y que cambie de color
        }
      </div>
      {/* {coord !== 0 ? 
          store.ships.map((item, i)=>{
            <div key={i} className={"square tile bg-danger"}>
            {item.name}
            </div>
           })
      :       
        <div key={i} className={`square tile bg-${coord === 4 ? 'light bg-opacity-50' : board === store.PcBoard && coord != 0 ? store.enemyShipsClass : board === store.PlayerBoard && coord === 1 ? 'info' : coord === 2 ? 'warning' : coord === 3 ? 'danger' : 'null'}`}
          onClick={() => actions.handleClick(board, row, col)}  // style={{ backgroundColor: coord}}  // onClick={() => console.log('coord ' + row + ',' + col)}
        >
          {
            board === store.PcBoard ?
              ''
              :
              coord === 0 ?
                ''
                : coord


          }
        </div>
      } */}
      {/* en el click rescatar el target value para las coordenadas.  */}

    </>
  )
}

export default Square
//  item={item}