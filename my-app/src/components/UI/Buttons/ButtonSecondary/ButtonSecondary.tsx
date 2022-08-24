import React from 'react';
import { IButton } from '../../../../types/IButtons';
import './ButtonSecondary.scss';

const ButtonSecondary = ({children, onClick}: IButton) => {
  return (
    <button className='second-btn' onClick={onClick}>{children}</button>
  )
}

export default ButtonSecondary;