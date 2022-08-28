import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ITheme } from '../../../types/ILinks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './LinkButtons.scss';


export const HomeLink = ({ theme }: ITheme) => {
  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : 'black' }} className='link-btn__container'>
      <div className="link-btn__img_home"></div>
      <NavLink to='/'>Главная</NavLink>
    </div>
  )
}

export const TrendsLink = ({ theme }: ITheme) => {
  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : 'black' }} className='link-btn__container'>
      <div className="link-btn__img_trends"></div>
      <a href="#">Trends</a>
    </div>
  )
}

export const FavoritesLink = ({ theme }: ITheme) => {
  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : 'black' }} className='link-btn__container'>
      <div className="link-btn__img_fav"></div>
      <a href="#">Закладки</a>
    </div>
  )
}

export const SettingLink = ({ theme }: ITheme) => {
  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : 'black' }} className='link-btn__container'>
      <div className="link-btn__img_set"></div>
      <Link to='/settings'>Настройки</Link>
    </div>
  )
}
