import React from 'react';
import './Switch.scss';

const Switch = () => {
    return (
        <div className="switch__container">
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
        </div>


    )
}

export default Switch;