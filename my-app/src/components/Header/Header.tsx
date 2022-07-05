import React from 'react';
import AboutUser from '../AboutUser/AboutUser';
import Search from '../Search/Search';
import './Header.scss';

const Header = () => {
  return (
    <div className='header__container'>
      {/* <div className="sidebar__logo"><img src="images/logo-dark.png" alt="" /></div> */}
        <Search />
        <AboutUser />
    </div>
  )
}

export default Header;