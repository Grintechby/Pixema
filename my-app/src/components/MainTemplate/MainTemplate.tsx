import React from 'react';
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

  const dispatch = useActions();
  const theme = useTypedSelector(store => store.theme.isDarkTheme)

  const changeTheme = () => {
    dispatch()
  }

  return (
    <div style={{ backgroundColor: theme ? 'white' : 'black' }} className='template__container'>
      <div className="template__aside">
        <div onClick={changeTheme} className="sidebar__logo"><img src="images/logo-dark.png" alt="" /></div>
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