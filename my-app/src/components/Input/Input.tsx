import React from 'react';
import './Input.scss';

interface inputProps {
    placeholder: string;
    text: string;
    onChange: (e: any) => void;
}

const Input = ({ placeholder, text, onChange }: inputProps) => {
    return (
        <div className='input__container'>
            <input type="text" id='text' placeholder={placeholder} value={text} onChange={onChange} />
        </div>

    )
}

export default Input;