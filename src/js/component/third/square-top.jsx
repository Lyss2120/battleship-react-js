import React from 'react'

const SquareTop = ({ row, clase }) => {
    return (
        <>
         <div className={`${clase}`}>
            {row.map((row, i) => {
                return (
                    <span key={i} >{row}</span>
                )
            })
            }
         </div>
        </>
    )
}

export default SquareTop
// className={`${clase}`}