import React, { ChangeEvent } from 'react';
import './FromToInput.scss';


interface FromToProps {
    min: number;
    max: number;
    values: number[];
    onChange: (values: number[]) => void;
}

const FromToInput = ({min, max, values, onChange}:FromToProps) => {

    const sanitizeValues = (value: number) => {

		if (value > max) {
			return max;
		}

		return value;
	}

    return (
        <div className='from-to__container'>
            <input 
                type="text" 
                id='text' 
                min={min} 
                max={max} 
                value={values[0]} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const sanitazedValue = sanitizeValues(parseInt(e.target.value || String(min)));
                    onChange([sanitazedValue, values[1]])
                }} 
            />
            <input 
                type="text" 
                id='text' 
                min={min} 
                max={max} 
                value={values[1]} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const sanitazedValue = sanitizeValues(parseInt(e.target.value || String(max)));
                    onChange([values[0], sanitazedValue])
                }} 
            />
        </div>
    )
}

export default FromToInput;