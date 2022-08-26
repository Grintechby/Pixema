import React, { useState } from 'react';
import './NewPass.scss';
import ButtonPrimary from '../../UI/Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../UI/Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordConfirmMutation, useResetPasswordMutation } from '../../../api/auth';

const NewPass = () => {

    const navigate = useNavigate();
    const [uid, setUid] = useState('');
    const [token, setToken] = useState('');
    const [timer, setTimer] = useState(0);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [resetPassword] = useResetPasswordMutation();
    const [resetPassConfirm] = useResetPasswordConfirmMutation();

    const futureResetPassword = JSON.parse(
        localStorage.getItem('futureResetPassword') || '{"email": ""}'
    );

    const changeUid = (uid: string) => {
        setUid(uid);
    };

    const changeToken = (token: string) => {
        setToken(token);
    };

    const inputPassword = (password: string) => {
        setPassword(password);
    };

    const inputConfirmPass = (confirmPass: string) => {
        setConfirmPass(confirmPass);
    };

    const resendActivation = () => {
        resetPassword(futureResetPassword.email);
        let count = 60;
        setTimer(count);
        let timerId = setInterval(() => {
            count = count - 1;
            setTimer(count);
        }, 1000);
        setTimeout(() => {
            clearInterval(timerId);
        }, 60000);
    };

    const handleChangePass = () => {
        resetPassConfirm({ password, token, uid });
        navigate('/login', { replace: true });
    };

    return (
        <AuthTemplate>
            <div className='new-pass__box'>
                <h2>Новый пароль</h2>
                <div className="new-pass__box_inputs">
                    <div className="inputs__pass">
                        <p>Идентификатор Uid</p>
                        <Input
                            placeholder='Введите uid'
                            name='uid'
                            type='text'
                            value={uid}
                            onChange={changeUid}
                        />
                    </div>
                    <div className="inputs__pass">
                        <p>Токен</p>
                        <Input 
                            placeholder='Ваш токен' 
                            name='token'
                            type='text'
                            value={token}
                            onChange={changeToken}
                        />
                    </div>
                    <div className="inputs__pass">
                        <p>Пароль</p>
                        <Input
                            placeholder='Your Password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={inputPassword}
                        />
                    </div>
                    <div className="inputs__confirm-pass">
                        <p>Подтверждение пароля</p>
                        <Input
                            placeholder='Confirm your Password'
                            name='password'
                            type='password'
                            value={confirmPass}
                            onChange={inputConfirmPass}
                        />
                    </div>
                    <p style={{color: '#fff'}}>
                        Отправить ключ заново?
                        {timer !== 0 ? (
                            <span>{timer} сек</span>
                        ) : (
                            <span onClick={resendActivation}>Отправить</span>
                        )
                    }
                    </p>
                </div>
                <ButtonPrimary onClick={handleChangePass}>Изменить пароль</ButtonPrimary>
            </div>
        </AuthTemplate>
    )
}

export default NewPass;