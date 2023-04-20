import React from 'react'
import Table2 from './Table2'
import TablePc from './TablePc'

const Pantalla = () => {
  return (
    <div className=''>
      <div className='first-title '><p>Battleship</p></div>

      <div>
        <div className='boton btn'
        onClick={()=>{prompt('coordenadas?')}}>fire onclick</div>
        <div className='boton btn'>show ships onclick</div>
      </div>

      <div className='d-flex justify-content-around p-4 flex-wrap'>
        <Table2 />
        <TablePc />
      </div>

      <div className='ship-container d-flex flex-wrap'>
        <span>Choose your Ships</span>
        {/* rotarlos al click mostrar un tooltip para eso */}
        <div>
          <div className='' draggable="true">
            <div className='ship one-preview one'> </div>
          </div>
          <div className='ship two-preview two' draggable="true">
            {/* <div className='two'> 2</div> */}
          </div>
          <div className='ship three-preview three' draggable="true">
            {/* <div className='three'> 3</div> */}
          </div>
          <div className='ship four-preview four' draggable="true">
            {/* <div className='four'> 4</div> */}
          </div>
          <div className='ship five-preview five' draggable="true">
            {/* <div className='three.2'>  3</div> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pantalla