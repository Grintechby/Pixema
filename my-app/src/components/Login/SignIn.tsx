import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../Input/Input';
import './SignIn.scss';

const SignIn = () => {
    return (
        <div className='sign-in__container'>
            <div className="sign-in__logo">
                <img src="images/logo-dark.png" alt="" />
            </div>
            <div className="sign-in__box">
                <h2>Sign In</h2>
                <div className="sign-in__box_inputs">
                    <div className="inputs__email">
                        <p>Email</p>
                        <Input />
                    </div>
                    <div className="inputs__pass">
                        <p>Password</p>
                        <Input />
                    </div>
                    <span className='reset-pass'>Forgot password?</span>
                </div> 
                <ButtonPrimary />
                <p className='sign-up'>Don't have an account? <a href="">Sign Up</a></p>
            </div>
        </div>
    )
}

export default SignIn;