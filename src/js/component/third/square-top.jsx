import React from 'react'

const SquareTop = ({ row, clase }) => {
    return (
        <>
         <div 
         className={`${clase}`}
         >
            {new Array(10).fill(0).map((_, i) => {
                return (
                    <span key={i}>{i}</span>
                )
            })
            }
         </div>
        </>
    )
}

export default SquareTop
// className={`${clase}`}