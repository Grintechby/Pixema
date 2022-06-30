import React from 'react';
import './Input.scss';

const Input = () => {
    return (
        <div className='input__container'>
            <label htmlFor="text">Title</label>
            <input type="text" id='text' placeholder='Placeholder' />
        </div>

    )
}

export default Input;