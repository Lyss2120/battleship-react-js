import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import Rows from './Rows';

const Columns = ({ position }) => {
  const { store, actions } = useContext(Context);


  return (
    <>
      {position > 0 ?
        <th scope="col">
          <span>{position}</span>
        </th>
        :
        <th scope="col">
          <span></span>
        </th>
      }
    </>
  )
}

export default Columns