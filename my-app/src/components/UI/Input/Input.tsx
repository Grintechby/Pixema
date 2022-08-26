import React from 'react';
import './Input.scss';

interface inputProps {
    placeholder: string;
    value: string;
    onChange?: (name: string) => void;
    name: string;
    autoComplete?: string;
    type: string;
}

const Input = ({ placeholder, value, onChange, name, autoComplete, type }: inputProps) => {
    return (
        <div className='input__container'>
            <input 
                name= {name}
                type={type}  
                placeholder={placeholder} 
                value={value} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)} 
                autoComplete={autoComplete}
            />
        </div>

    )
}

export default Input;