import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import Square from './Square.jsx';

const Rows = ({ position }) => {
  const { store, actions } = useContext(Context);
  const coords= store.rowArr.position + ',' + store.colArr.position;
  // si es 0 tiene que juntarse row con column. si es cero dejar en hidden??..css
  const coordenadas = () => {
    console.log(position)
  }
  return (
    <>
      {position > 0 &&
        <tr>
          <th >
            <span>{position}</span>
          </th>

          {store.rowArr &&
            store.colArr.map((item, index) => {
              return (
                <Square
                  key={index}
                  position={item.position}
                  coordenadas={coords}
                />
              )
            })}
        </tr>
      }
    </>

  )
}

export default Rows