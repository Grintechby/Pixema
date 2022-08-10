import React from 'react';
import { IButton } from '../../../types/IButtons';
import './ButtonSecondary.scss';

const ButtonSecondary = ({buttonName}: IButton) => {
  return (
    <button className='second-btn'>{buttonName}</button>
  )
}

export default ButtonSecondary;