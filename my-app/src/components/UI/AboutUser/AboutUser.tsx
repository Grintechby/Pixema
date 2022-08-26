import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUser.scss';
import cn from 'classnames';
import { ITheme } from '../../../types/ILinks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { authSlice } from '../../../store/reducers/auth';
import { useGetUserInfoMutation, useRefreshTokenMutation } from '../../../api/auth';

const AboutUser = ({ theme }: ITheme) => {

    const getCookie = (name: string) => {
        let matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, "\\$1") + "=([^;]*)"
            )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

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
                <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : 'black' }} className="about-user__box">
                    <div className="about-user__box_avatar">{currentUser.username[0].toUpperCase()}</div>
                    <span className="about-user__box_text">{currentUser.username}</span>
                    <div className="about-user__box_arrow" onClick={() => setOpenMenu(!openMenu)}></div>
                </div>
                <div className={cn("about-user__menu", !openMenu && 'hidden')}>
                    <Link to='/settings'>Настройки</Link>
                    <div className="dividing-h_line"></div>
                    <Link to='/'><span onClick={handleLogOut}>Выйти</span></Link>
                </div>
            </div>
        )
    }
    return (
        <div style={{ backgroundColor: theme ? '#f0f0f0' : 'black' }} className='no-user__container'>
            <div className="about-user__box" onClick={() => setOpenMenu(!openMenu)}>
                <div className="no-user__box_avatar"><img src="icons/user.svg" alt="" /></div>
                <span className="about-user__box_text">Вход</span>
                <div className="no-user__box_arrow"onClick={() => setOpenMenu(!openMenu)}></div>
            </div>
            <div className={cn("about-user__menu", !openMenu && 'hidden')}>
                <Link to='login'>Вход</Link>
                {/* <a href='#' className={cn('about-user__menu_sign-in', !openMenu && 'hidden')}>Sign In</a> */}
            </div>
        </div>
    )
}

export default AboutUser;