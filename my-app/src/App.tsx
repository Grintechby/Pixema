import React, { useMemo, useEffect } from 'react';
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
import ConfirmRegistartion from './components/Authorization/ConfirmRegistartion/ConfirmRegistartion';
import { getUserInfo, useGetUserInfoMutation, useRefreshTokenMutation } from './api/auth';
import { useActions } from './components/hooks/useActions';
import { authSlice } from './store/reducers/auth';
import { getCookie } from './components/helpers/getCookie';




function App() {

  const dispatch = useActions();
  const { setUser } = authSlice.actions;

  const accessCookie = getCookie("access");
  const refreshCookie = getCookie("refresh");
  const [getUserInfo, { data, error }] = useGetUserInfoMutation();
  const [refreshToken, { data: refresh }] = useRefreshTokenMutation();

  useMemo(() => {
    accessCookie && getUserInfo(`${accessCookie}`).unwrap();
    if (error && refreshCookie) {
      refreshToken(`${refreshCookie}`).unwrap();
      document.cookie = `access=${refresh?.access}`;
    }
  }, [
    getUserInfo,
    refreshToken,
    refresh?.access,
    accessCookie,
    refreshCookie,
    error,
  ]);

  useEffect(() => {
    data && dispatch(setUser(data));
  }, [data, dispatch, setUser]);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='login' element={<SignIn />} />
        <Route path='registration' element={<SignUp />} />
        <Route path='confirm_registration' element={<ConfirmRegistartion />} />
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
