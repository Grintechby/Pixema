import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../UI/Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../UI/Input/Input';
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
                        <Input placeholder='Your Email' />
                    </div>
                    <div className="inputs__pass">
                        <p>Password</p>
                        <Input placeholder='Your Password' />
                    </div>
                    <span className='reset-pass'><Link to='/reset-pass'>Forgot password?</Link></span>
                </form>
                <ButtonPrimary buttonName='Sign In' />
                <p className='sign-up'>Don't have an account? <Link to='/registration'>Sign Up</Link></p>
            </div>
        </AuthTemplate>
    )
}

export default SignIn;