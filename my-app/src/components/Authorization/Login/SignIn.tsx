import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateTokenMutation } from '../../../api/auth';
import ButtonPrimary from '../../UI/Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../UI/Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';

import './SignIn.scss';

const SignIn = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createToken, { data }] = useCreateTokenMutation();

    const inputEmail = (email: string) => {
        setEmail(email);
    };

    const inputPassword = (password: string) => {
        setPassword(password);
    };

    const authUser = async () => {
        await createToken({ email, password })
            .unwrap()
            .then((data) => data && navigate('/', {replace: true}));
    }

    useEffect(() => {
        document.cookie = `access=${data ? data.access : ''}`;
        document.cookie = `refresh=${data ? data.refresh : ''}`
    }, [data]);

    return (
        <AuthTemplate>
            <div className="sign-in__box" >
                <h2>Вход</h2>
                <form className="sign-in__box_inputs">
                    <div className="inputs__email">
                        <p>Email</p>
                        <Input 
                            placeholder='Ваш Email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={inputEmail}
                        />
                    </div>
                    <div className="inputs__pass">
                        <p>Пароль</p>
                        <Input 
                            placeholder='Ваш пароль'
                            name='password'
                            type='password'
                            value={password}
                            onChange={inputPassword} 
                        />
                    </div>
                    <span className='reset-pass'><Link to='/reset-pass'>Забыли пароль?</Link></span>
                </form>
                <ButtonPrimary onClick={authUser}>Войти</ButtonPrimary>
                <p className='sign-up'>Нет аккаунта? <Link to='/registration'>Регистрация</Link></p>
            </div>
        </AuthTemplate>
    )
}

export default SignIn;