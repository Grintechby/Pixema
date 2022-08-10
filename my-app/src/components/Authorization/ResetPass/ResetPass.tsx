import React from 'react';
import ButtonPrimary from '../../Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';
import './ResetPass.scss';

const ResetPass = () => {
  return (
    <AuthTemplate>
      <div className='reset-pass__box'>
        <h2>Reset password</h2>
        <div className="reset-pass__box_inputs">
          <div className="inputs__email">
            <p>Email</p>
            <Input placeholder='Your Email' />
          </div>
        </div>
        <ButtonPrimary buttonName='Reset' />
      </div>
    </AuthTemplate>
  )
}

export default ResetPass;