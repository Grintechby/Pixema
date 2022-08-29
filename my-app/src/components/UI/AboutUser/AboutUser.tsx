import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUser.scss';
import cn from 'classnames';
import { ITheme } from '../../../types/ILinks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { authSlice } from '../../../store/reducers/auth';
import { useGetUserInfoMutation, useRefreshTokenMutation } from '../../../api/auth';
import { getCookie } from '../../helpers/getCookie';

const AboutUser = ({ theme }: ITheme) => {

    const [openMenu, setOpenMenu] = useState(false);
    const { currentUser, isAuth } = useTypedSelector(state => state.auth)
    const [getUserInfo, { data, error }] = useGetUserInfoMutation();
    const [refreshToken, { data: refresh }] = useRefreshTokenMutation();
    const dispatch = useActions();
    const { logout, setUser } = authSlice.actions;
    const accessCookie = getCookie("access");
    const refreshCookie = getCookie("refresh");

    const handleLogOut = () => {
        dispatch(logout());
        document.cookie = "access=;";
        document.cookie = "refresh=;";
    }

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



    if (isAuth) {
        return (
            <div className='about-user__container'>
                <div style={theme === 'light' ? { backgroundColor: '#fff'}: {}} className="about-user__box">
                    <div className="about-user__box_avatar">{currentUser.username[0].toUpperCase()}</div>
                    <span style={theme === 'light' ? {color: '#000'} : {}} className="about-user__box_text">{currentUser.username}</span>
                    <div className="about-user__box_arrow" onClick={() => setOpenMenu(!openMenu)}></div>
                </div>
                <div style={theme === 'light' ? { backgroundColor: '#f0f0f0'}: {}} className={cn("about-user__menu", !openMenu && 'hidden')}>
                    <Link className={cn(theme === 'light' ? 'link_light': 'link_dark' )} to='/settings'>Настройки</Link>
                    <div className="dividing-h_line"></div>
                    <Link className={cn(theme === 'light' ? 'link_light': 'link_dark' )} to='/'><span onClick={handleLogOut}>Выйти</span></Link>
                </div>
            </div>
        )
    }
    return (
        <div className='no-user__container'>
            <div style={theme === 'light' ? { backgroundColor: '#fff'}: {}} className="about-user__box" onClick={() => setOpenMenu(!openMenu)}>
                <div className="no-user__box_avatar"><img src="/icons/user.svg" alt="" /></div>
                <span style={theme === 'light' ? {color: '#000'} : {}} className="about-user__box_text">Вход</span>
                <div className="no-user__box_arrow"onClick={() => setOpenMenu(!openMenu)}></div>
            </div>
            <div style={theme === 'light' ? { backgroundColor: '#f0f0f0'}: {}} className={cn("about-user__menu", !openMenu && 'hidden')}>
                <Link className={cn(theme === 'light' ? 'link_light': 'link_dark' )} to='/login'>Вход</Link>
            </div>
        </div>
    )
}

export default AboutUser;