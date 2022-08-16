import React from 'react';
import AboutUser from '../AboutUser/AboutUser';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Search from '../Search/Search';
import './Header.scss';

const Header = () => {
  const theme = useTypedSelector(store => store.theme.theme)
  return (
    <div className='header__container'>
        <Search theme={theme} />
        <AboutUser theme={theme} />
    </div>
  )
}

export default Header;