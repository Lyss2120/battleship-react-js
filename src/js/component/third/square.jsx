import React from 'react'

const Square = ({ i, item }) => {
  return (
    <div className='square' key={i} id={i}>{item}</div>
    )
}

export default Square