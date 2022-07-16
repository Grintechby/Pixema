import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../Input/Input';
import './SignUp.scss';

const SignUp = () => {
    return (
        <div className='sign-up__container'>
            <div className="sign-up__logo">
                <img src="images/logo-dark.png" alt="" />
            </div>
            <div className="sign-up__box">
                <h2>Sign Up</h2>
                <div className="sign-up__box_inputs">
                    <div className="inputs__name">
                        <p>Name</p>
                        <Input />
                    </div>
                    <div className="inputs__email">
                        <p>Email</p>
                        <Input />
                    </div>
                    <div className="inputs__pass">
                        <p>Password</p>
                        <Input />
                    </div>
                    <div className="inputs__confirm-pass">
                        <p>Confirm Password</p>
                        <Input />
                    </div>
                </div>
                <ButtonPrimary />
                <p className='sign-in'>Already have an account? <a href="">Sign In</a></p>
            </div>
        </div>
    )
}

export default SignUp;