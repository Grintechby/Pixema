import cn from 'classnames';
import React, { useState } from 'react';
import { ISelect } from '../../types/ISelect';
import './Select.scss';



const Select = ({ selectPlaceholder }: ISelect) => {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <div className='select__container'>
      <button className='select__toggle' onClick={() => { setOpenOptions(!openOptions) }} >{selectPlaceholder}</button>
      <ul className={cn('select__options', !openOptions ? 'hidden' : '')}>
        <li className='select__options_option'>USA</li>
        <li className='select__options_option'>France</li>
      </ul>
    </div>
  )
}

export default Select;