import React from 'react';
import { FavoritesLink, HomeLink, SettingLink, TrendsLink } from '../Link/LinkButtons';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
      <HomeLink />
      <TrendsLink />
      <FavoritesLink />
      <SettingLink />
    </div>
  )
}

export default Sidebar;