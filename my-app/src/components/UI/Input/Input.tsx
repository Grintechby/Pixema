import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
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

    const {theme} = useTypedSelector(state => state.theme);
    return (
        <div className='input__container'>
            <input 
                style={theme === 'light' ? {backgroundColor: '#fff', color: '#80858B'} : {}}
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