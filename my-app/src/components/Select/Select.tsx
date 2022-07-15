import cn from 'classnames';
import React, { useState } from 'react';
import './Select.scss';


const Select = () => {
    const [openOptions, setOpenOptions] = useState(false);
  return (
    <div className='select__container'>
        <button className='select__toggle' onClick={()=> {setOpenOptions(!openOptions)}} >Placeholder</button>
        <ul className={cn('select__options', !openOptions? 'hidden': '')}>
            <li className='select__options_option'>Item 1</li>
            <li className='select__options_option'>Item 2</li>
        </ul>
    </div>
  )
}

export default Select;