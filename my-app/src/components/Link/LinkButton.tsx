import React from 'react';
import './LinkButton.scss';

const Link = () => {
  return (
    <div className='link-btn__container'>
      <img className='link-btn__img' src="icons/home.svg" alt="" />
      <a href="#">Home</a>
    </div>
  )
}

export default Link;