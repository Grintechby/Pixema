import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActivateEmailMutation, useResendActivateEmailMutation } from '../../../api/auth';
import ButtonPrimary from '../../UI/Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../UI/Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';
import './ConfirmRegistartion.scss';

const ConfirmRegistartion = () => {

  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  const changeUid = (uid: string) => {
    setUid(uid);
  };

  const changeToken = (token: string) => {
    setToken(token);
  };

  const futureUser = JSON.parse(
    localStorage.getItem('futureUser') || '{"email": ""}'
  );

  const [activateEmail] = useActivateEmailMutation();

  const handlerActivateEmail = () => {
    activateEmail({ uid, token })
      .unwrap()
      .then((data) => data && navigate('/login', { replace: true }));
  };

  const [resendActivateEmail] = useResendActivateEmailMutation();
  const resendActivation = () => {
    resendActivateEmail(futureUser.email);
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

  return (
    <AuthTemplate>
      <div className="confirm-reg__box">
        <h2>Подтверждение регистрации</h2>
        <div className="confirm-reg__box_inputs">
          <div className="inputs">
            <p>Идентификатор Uid</p>
            <Input
              name='uid'
              placeholder='Ваш Uid'
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
          <ButtonPrimary onClick={handlerActivateEmail}>Активация</ButtonPrimary>
        </div>
        <p style={{ color: '#fff' }}>
          Отправить ключ заново?
          {timer !== 0 ? (
            <span>{timer} сек</span>
          ) : (
            <span onClick={resendActivation}>Отправить</span>
          )
          }
        </p>
      </div>
    </AuthTemplate>
  )
}

export default ConfirmRegistartion;