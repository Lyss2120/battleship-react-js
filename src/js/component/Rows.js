import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import Square from './Square.jsx';

const Rows = ({ position }) => {
  const { store, actions } = useContext(Context);
  // si es 0 tiene que juntarse row con column. si es cero dejar en hidden??..css

  return (
    <>
      {position > 0 &&
        <tr>
          <th scope="row">
            <span>{position}</span>
          </th>

          {store.colArr.map((item, index) => {
              return (
                <Square
                  key={index}
                  position={item.position}
                />
              )
            })}
        </tr>
      }
    </>

  )
}

export default Rows