import React, { useState } from 'react';
import { ITabs } from '../../../types/ITabs';

import './Tabs.scss';


const Tabs = ({ firstTab, secondTab, frstDisabled, scndDisabled, frstFunc, scndFunc, frstValue, scndValue, name }: ITabs) => {
  const [isSelect, setIsSelect] = useState(false)

  function handleClick() {
    setIsSelect(!isSelect);
  }

  return (
    <div className='tabs__container'>
      <button
        onClick={frstFunc}
        disabled={frstDisabled}
        className='tabs__button left'
        value={frstValue}
        name={name}>
        {firstTab}
      </button>

      <button
        onClick={scndFunc}
        disabled={scndDisabled}
        className='tabs__button right'
        value={scndValue}
        name={name}>
        {secondTab}
      </button>
    </div>
  )
}

export default Tabs;