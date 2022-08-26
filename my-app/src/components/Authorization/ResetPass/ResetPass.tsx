import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordMutation } from '../../../api/auth';
import ButtonPrimary from '../../UI/Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../UI/Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';
import './ResetPass.scss';

const ResetPass = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [resetPassword] = useResetPasswordMutation();

  const inputEmail = (email: string) => {
    setEmail(email);
  };

  const resetPass = () => {
    resetPassword(email);
    navigate('/new-pass', { replace: true });
    localStorage.setItem(
      'futureResetPassword',
      JSON.stringify({ email: email })
    );
  };

  return (
    <AuthTemplate>
      <div className='reset-pass__box'>
        <h2>Восстановление пароля</h2>
        <div className="reset-pass__box_inputs">
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
        </div>
        <ButtonPrimary onClick={resetPass}>Восстановить</ButtonPrimary>
      </div>
    </AuthTemplate>
  )
}

export default ResetPass;