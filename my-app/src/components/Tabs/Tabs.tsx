import React, { useState } from 'react';
import { ITabs } from '../../types/ITabs';

import './Tabs.scss';


const Tabs = ({ firstTab, secondTab }: ITabs) => {
  const [isSelect, setIsSelect] = useState(false)

  function handleClick() {
    setIsSelect(!isSelect);
  }

  return (
    <div className='tabs__container'>
      <button onClick={handleClick} disabled={!isSelect} className='tabs__button left'>{firstTab}</button>
      <button onClick={handleClick} disabled={isSelect} className='tabs__button right'>{secondTab}</button>
    </div>
  )
}

export default Tabs;