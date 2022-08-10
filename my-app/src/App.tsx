import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUser from './components/AboutUser/AboutUser';
import SignIn from './components/Authorization/Login/SignIn';
import NewPass from './components/Authorization/NewPass/NewPass';
import SignUp from './components/Authorization/Registration/SignUp';
import ResetPass from './components/Authorization/ResetPass/ResetPass';
import CardsList from './components/CardsList/CardsList';
import HomePage from './components/HomePage/HomePage';
import { SettingLink } from './components/Link/LinkButtons';
import MainTemplate from './components/MainTemplate/MainTemplate';
import MoviePage from './components/MoviePage/MoviePage';
import SelectedMoviePage from './components/MoviePage/SelectedMoviePage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import Sidebar from './components/Sidebar/Sidebar';
import { data } from './data/data';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cards={data} />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='login' element={<SignIn />} />
        <Route path='registration' element={<SignUp />} />
        <Route path='reset-pass' element={<ResetPass />} />
        <Route path='new-pass' element={<NewPass />} />
        <Route path='movies/*' element={<SelectedMoviePage movieArr={data} />} />
      </Routes>
    </>
  );
}

export default App;
