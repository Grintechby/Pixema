import React from 'react';
import { IButton } from '../../../types/IButtons';
import './ButtonPrimary.scss'



const ButtonPrimary = ({ children, onClick }: IButton) => {
  return (
    <button className='prim-btn' onClick={onClick}>{children}</button>
  )
}

export default ButtonPrimary;