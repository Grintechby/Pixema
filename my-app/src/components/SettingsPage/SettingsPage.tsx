import React, { useEffect, useState } from 'react';
import './SettingsPage.scss'
import Input from '../UI/Input/Input';
import MainTemplate from '../UI/MainTemplate/MainTemplate';
import Switch from '../UI/Switch/Switch';
import ButtonSecondary from '../UI/Buttons/ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../UI/Buttons/ButtonPrimary/ButtonPrimary';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setTheme } from '../../store/reducers/theme';
import { authSlice } from '../../store/reducers/auth';
import { usePatchPasswordMutation, usePatchUserNameMutation } from '../../api/auth';
import { getCookie } from '../helpers/getCookie';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

const SettingsPage = () => {

    const navigate = useNavigate()

    const { setUser } = authSlice.actions;
    const [patchPassword] = usePatchPasswordMutation();
    const [patchUserName] = usePatchUserNameMutation();

    const { currentUser, isAuth } = useTypedSelector(state => state.auth);
    const accessCookie = getCookie('access');
    const { theme } = useTypedSelector(state => state.theme)
    const dispatch = useActions();

    const [name, setName] = useState('');
    const [oldPass, setOldPass] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    useEffect(() => {
        localStorage.setItem("theme", theme);
        setName(currentUser?.username)
    }, [theme, currentUser, setName]);

    const changeTheme = () => {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
    }

    const changeName = (name: string) => {
        setName(name)
    };

    const changePassword = (password: string) => {
        setPassword(password)
    };

    const changeOldPass = (oldPass: string) => {
        setOldPass(oldPass)
    };

    const changeConfirmPass = (confirmPass: string) => {
        setConfirmPass(confirmPass)
    };

    const handleSave = () => {
        dispatch(
            setUser({
                username: name,
                id: currentUser?.id,
                email: currentUser?.email
            })
        );
        name !== currentUser.username &&
            patchUserName({
                username: name,
                id: currentUser?.id,
                token: accessCookie
            })
                .unwrap()
                .then((username) => console.log("username", username));
        oldPass &&
            confirmPass &&
            password &&
            patchPassword({
                token: accessCookie,
                new_password: password,
                old_password: oldPass
            })
                .unwrap()
                .then((newPassword) => console.log("newPassword", newPassword));
    };

    const handleCancel = () => {
        navigate('/')
    };

    return (
        <MainTemplate>
            <div style={theme === 'light' ? { color: '#000' } : {}} className="settings">
                {isAuth &&
                    <>
                        <div className='profile__container'>
                            <h2>Профиль</h2>
                            <div className={cn(theme === 'light' ? 'profile__box box_light' : 'profile__box')}>
                                <div className="profile__box_name">
                                    <h4>Имя</h4>
                                    <Input
                                        placeholder='Ваше Имя'
                                        name='name'
                                        type='text'
                                        value={name}
                                        autoComplete='new-password'
                                        onChange={changeName}
                                    />
                                </div>
                                <div className="profile__box_email">
                                    <h4>Email</h4>
                                    <Input
                                        placeholder='Ваш Email'
                                        name='email'
                                        type='email'
                                        value={currentUser.email}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pass__container">
                            <h2>Пароль</h2>
                            <div className={cn(theme === 'light' ? 'pass__box box_light' : 'pass__box')}>
                                <div className="pass__box_current-pass">
                                    <h4>Пароль</h4>
                                    <Input
                                        placeholder='Ваш пароль'
                                        name='password'
                                        type='password'
                                        value={oldPass}
                                        autoComplete='new-password'
                                        onChange={changeOldPass}
                                    />
                                </div>
                                <div className="pass__box_new-pass">
                                    <div className="new-pass">
                                        <h4>Новый пароль</h4>
                                        <Input
                                            placeholder='Новый пароль'
                                            name='password'
                                            type='password'
                                            value={password}
                                            autoComplete='new-password'
                                            onChange={changePassword}
                                        />
                                    </div>
                                    <div className="confirm-pass">
                                        <h4>Подтверждение пароля</h4>
                                        <Input
                                            placeholder='Повторите новый пароль'
                                            name='password'
                                            type='password'
                                            value={confirmPass}
                                            autoComplete='new-password'
                                            onChange={changeConfirmPass}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }

                <div className="color-mode__container">
                    <h2>Тема</h2>
                    <div className={cn(theme === 'light' ? 'color-mode__box box_light' : 'color-mode__box')}>
                        <div className="color-mode__box_current-theme">
                            <h4>
                                {
                                    theme === 'light' ?
                                        'Светлая тема' :
                                        'Темная тема'
                                }
                            </h4>
                            <p className='theme-description'>
                                {
                                    theme === 'light' ?
                                        'Используется светлая тема' :
                                        'Используется темная тема'
                                }
                            </p>
                        </div>
                        <Switch theme={theme} changeTheme={changeTheme} />
                    </div>
                </div>
                {isAuth && (
                    <div className="settings__bttns">
                        <ButtonSecondary onClick={handleCancel}>Закрыть</ButtonSecondary>
                        <ButtonPrimary onClick={handleSave}>Сохранить</ButtonPrimary>
                    </div>
                )}

            </div>

        </MainTemplate>
    )
}

export default SettingsPage;