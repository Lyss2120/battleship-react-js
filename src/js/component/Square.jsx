import React from 'react'

const Square = ({ position }) => {
    return (
        <td>
            {position < 10 &&
                <div className='bg-secondary square'>
                    {/* {position} */}
                </div>
            }
        </td>
    )
}

export default Square