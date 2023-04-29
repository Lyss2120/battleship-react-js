import React, { useState } from 'react';

const Square = ({ value, onSquareClick}) => {
    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue('X')
    //     console.log('clicked!');
    // }

    return (
        <>
            <button
                className="square"
                onClick={onSquareClick}
            >
                {value}
            </button>

        </>
    )
}

export default Square