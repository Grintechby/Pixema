import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePostSignUpMutation } from '../../../api/auth';
import ButtonPrimary from '../../UI/Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../UI/Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';

import './SignUp.scss';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();

    const inputName = (name: string) => {
        setName(name);
    };

    const inputEmail = (email: string) => {
        setEmail(email);
    };

    const inputPassword = (password: string) => {
        setPassword(password);
    };

    const inputConfirmPass = (confirmPass: string) => {
        setConfirmPass(confirmPass);
    };

    const [postSignUp] = usePostSignUpMutation();

    const registerUser = () => {
        postSignUp({
            email: email,
            username: name,
            password: password
        })
            .unwrap()
            .then((data) => {
                if (data) {
                    navigate('/confirm_registration', { replace: true });
                    localStorage.setItem(
                        "futureUser",
                        JSON.stringify({ email: data.email })
                    );
                }
            });
    };

    return (
        <AuthTemplate>
            <div className="sign-up__box">
                <h2>Регистрация</h2>
                <div className="sign-up__box_inputs">
                    <div className="inputs__name">
                        <p>Логин</p>
                        <Input
                            placeholder='Введите логин'
                            name='name'
                            onChange={inputName}
                            value={name}
                            autoComplete="new-password"
                            type='text'
                        />
                    </div>
                    <div className="inputs__email">
                        <p>Email</p>
                        <Input
                            placeholder='Ваш Email'
                            name='email'
                            onChange={inputEmail}
                            value={email}
                            type='email'
                        />
                    </div>
                    <div className="inputs__pass">
                        <p>Пароль</p>
                        <Input
                            placeholder='Введите пароль'
                            name='password'
                            onChange={inputPassword}
                            value={password}
                            type='password'
                            autoComplete='new-password'
                        />
                    </div>
                    <div className="inputs__confirm-pass">
                        <p>Подтверждение пароля</p>
                        <Input
                            placeholder='Введите пароль'
                            name='password'
                            onChange={inputConfirmPass}
                            value={confirmPass}
                            type={password}
                            autoComplete='new-password'
                        />
                    </div>
                </div>
                <ButtonPrimary onClick={registerUser} >Регистрация</ButtonPrimary>
                <p className='sign-in'>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>
            </div>
        </AuthTemplate>
    )
}

export default SignUp;