import React from 'react';
import ButtonPrimary from '../../Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';

import './SignIn.scss';

const SignIn = () => {
    return (
        <AuthTemplate>
            <div className="sign-in__box" >
                <h2>Sign In</h2>
                <form className="sign-in__box_inputs">
                    <div className="inputs__email">
                        <p>Email</p>
                        <Input />
                    </div>
                    <div className="inputs__pass">
                        <p>Password</p>
                        <Input />
                    </div>
                    <span className='reset-pass'>Forgot password?</span>
                </form>
                <ButtonPrimary />
                <p className='sign-up'>Don't have an account? <a href="">Sign Up</a></p>
            </div>
        </AuthTemplate>
    )
}

export default SignIn;