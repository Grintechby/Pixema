import React from 'react';
import './LinkButtons.scss';

export const HomeLink = () => {
  return (
    <div className='link-btn__container'>
      <div className="link-btn__img_home"></div>
      <a href="#">Home</a>
    </div>
  )
}

export const TrendsLink = () => {
  return (
    <div className='link-btn__container'>
      <div className="link-btn__img_trends"></div>
      <a href="#">Trends</a>
    </div>
  )
}

export const FavoritesLink = () => {
  return (
    <div className='link-btn__container'>
      <div className="link-btn__img_fav"></div>
      <a href="#">Favorites</a>
    </div>
  )
}

export const SettingLink = () => {
  return (
    <div className='link-btn__container'>
      <div className="link-btn__img_set"></div>
      <a href="#">Settings</a>
    </div>
  )
}
