import React, { useEffect } from 'react';
import './SettingsPage.scss'
import Input from '../Input/Input';
import MainTemplate from '../MainTemplate/MainTemplate';
import Switch from '../Switch/Switch';
import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setTheme } from '../../store/reducers/theme';

const SettingsPage = () => {

    const theme = useTypedSelector(store => store.theme.theme)

    const dispatch = useActions();

    useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);

    const changeTheme = () => {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark' ))
    }

    return (
        <div>
            <MainTemplate>
                <div className="settings">
                    <div className="profile__container">
                        <h2>Profile</h2>
                        <div className="profile__box">
                            <div className="profile__box_name">
                                <h4>Name</h4>
                                <Input placeholder='Your Name' />
                            </div>
                            <div className="profile__box_email">
                                <h4>Email</h4>
                                <Input placeholder='Your Email' />
                            </div>
                        </div>
                    </div>

                    <div className="pass__container">
                        <h2>Password</h2>
                        <div className="pass__box">
                            <div className="pass__box_current-pass">
                                <h4>Password</h4>
                                <Input placeholder='Your password' />
                            </div>
                            <div className="pass__box_new-pass">
                                <div className="new-pass">
                                    <h4>New password</h4>
                                    <Input placeholder='New password' />
                                </div>
                                <div className="confirm-pass">
                                    <h4>Confirm password</h4>
                                    <Input placeholder='Confirm password' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="color-mode__container">
                        <h2>Color mode</h2>
                        <div className="color-mode__box">
                            <div className="color-mode__box_current-theme">
                                <h4>Dark</h4>
                                <p className='theme-description'>Use dark theme</p>
                            </div>
                            <Switch theme={theme} changeTheme={changeTheme} />
                        </div>
                    </div>

                    <div className="settings__bttns">
                        <ButtonSecondary buttonName='Cancel' />
                        <ButtonPrimary buttonName='Save' />
                    </div>

                </div>

            </MainTemplate>
        </div>
    )
}

export default SettingsPage;