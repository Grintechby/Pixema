import React from 'react';
import { IButton } from '../../../types/IButtons';
import './ButtonPrimary.scss'



const ButtonPrimary = ({ buttonName }: IButton) => {
  return (
    <button className='prim-btn'>{buttonName}</button>
  )
}

export default ButtonPrimary;