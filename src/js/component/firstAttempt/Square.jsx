import React from 'react'

const Square = ({ position, coordenadas}) => {
    return (
        <td>
            {position < 10 &&
                <div className='rowss '
                onClick={()=>{console.log(position)}}>
                    {coordenadas}
                </div>
            }
        </td>
    )
}

export default Square