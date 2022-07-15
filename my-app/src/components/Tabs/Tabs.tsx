import React, { useState } from 'react';
import './Tabs.scss';
const Tabs = () => {
  const [isSelect, setIsSelect] = useState(false)

  function handleClick () {
    setIsSelect(!isSelect);
  }
  return (
    <div className='tabs__container'>
        <button onClick={handleClick} disabled={!isSelect} className='tabs__button left'>Text 1</button>
        <button onClick={handleClick} disabled={isSelect} className='tabs__button right'>Text 2</button>
    </div>
  )
}

export default Tabs;