import React from 'react';
import './Input.scss';

interface inputProps {
    placeholder: string;
}

const Input = ({ placeholder }: inputProps) => {
    return (
        <div className='input__container'>
            <input type="text" id='text' placeholder={placeholder} />
        </div>

    )
}

export default Input;