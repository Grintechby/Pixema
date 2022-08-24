import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from './api/api';
import './App.css';
import AboutUser from './components/UI/AboutUser/AboutUser';
import SignIn from './components/Authorization/Login/SignIn';
import NewPass from './components/Authorization/NewPass/NewPass';
import SignUp from './components/Authorization/Registration/SignUp';
import ResetPass from './components/Authorization/ResetPass/ResetPass';
import CardsList from './components/UI/CardsList/CardsList';
import FilterPage from './components/UI/Filters/FilterPage/FilterPage';
import HomePage from './components/HomePage/HomePage';
import { SettingLink } from './components/UI/Link/LinkButtons';
import MainTemplate from './components/UI/MainTemplate/MainTemplate';
import MoviePage from './components/MoviePage/MoviePage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import Sidebar from './components/UI/Sidebar/Sidebar';




function App() {
  const params = useParams();
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='login' element={<SignIn />} />
        <Route path='registration' element={<SignUp />} />
        <Route path='reset-pass' element={<ResetPass />} />
        <Route path='new-pass' element={<NewPass />} />
        <Route path='movie/'>
          <Route path=':id' element={<MoviePage />} />
        </Route>
        <Route path='filter' element={<FilterPage />} />
      </Routes>
    </>
  );
}

export default App;
