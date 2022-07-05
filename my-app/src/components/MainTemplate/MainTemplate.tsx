import React from 'react';
import CardsList from '../CardsList/CardsList';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './MainTemplate.scss';

const MainTemplate = (props: any) => {
  return (
    <div className='template__container'>
      <div className="template__aside">
        <div className="sidebar__logo"><img src="images/logo-dark.png" alt="" /></div>
        <Sidebar />
      </div>
      <div className="template__main">
        <Header />
        {props.children}
      </div>
    </div>
  )
}

export default MainTemplate;