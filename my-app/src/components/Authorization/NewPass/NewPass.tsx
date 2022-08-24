import React from 'react';
import './NewPass.scss';
import ButtonPrimary from '../../UI/Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../UI/Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';

const NewPass = () => {
    return (
        <AuthTemplate>
            <div className='new-pass__box'>
                <h2>New password</h2>
                <div className="new-pass__box_inputs">
                    <div className="inputs__pass">
                        <p>Password</p>
                        <Input placeholder='Your Password' />
                    </div>
                    <div className="inputs__confirm-pass">
                        <p>Confirm password</p>
                        <Input placeholder='Confirm your Password' />
                    </div>
                </div>
                <ButtonPrimary buttonName='Set Password' />
            </div>
        </AuthTemplate>
    )
}

export default NewPass;