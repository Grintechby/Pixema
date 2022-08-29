import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FavoritesLink, HomeLink, SettingLink, TrendsLink } from '../Link/LinkButtons';
import './Sidebar.scss';



const Sidebar = () => {
  const theme = useTypedSelector(store => store.theme.theme)
  return (
    <div className='sidebar__container'>
      <HomeLink theme={theme} />
      {/* <FavoritesLink theme={theme} /> */}
      <SettingLink theme={theme} />
    </div>
  )
}

export default Sidebar;