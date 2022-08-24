import React from 'react';
import './Switch.scss';

interface ISwitch {
    changeTheme: () => void;
    theme: string;
}

const Switch = ({ changeTheme, theme }: ISwitch) => {
    return (
        <div className="switch__container">
            <input checked={theme === 'dark'} onChange={changeTheme} type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
        </div>


    )
}

export default Switch;