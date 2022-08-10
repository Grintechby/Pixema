import React from 'react';
import './Switch.scss';

interface ISwitch {
    changeTheme: () => void;
}

const Switch = ({ changeTheme }: ISwitch) => {
    return (
        <div className="switch__container">
            <input onChange={changeTheme} type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
        </div>


    )
}

export default Switch;