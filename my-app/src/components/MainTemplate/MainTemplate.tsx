import React from 'react';
import { Link } from 'react-router-dom';
import CardsList from '../CardsList/CardsList';
import Header from '../Header/Header';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Sidebar from '../Sidebar/Sidebar';
import './MainTemplate.scss';

interface IMainTemplate {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: IMainTemplate) => {

  const theme = useTypedSelector(store => store.theme.theme)

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : 'black' }} className='template__container'>
      <div className="template__aside">
        <div className="sidebar__logo"><Link to='/'><img src="/images/logo-dark.png" alt="" /></Link></div>
        <Sidebar />
      </div>
      <div className="template__main">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default MainTemplate;