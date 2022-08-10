import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../Buttons/ButtonPrimary/ButtonPrimary';
import Input from '../../Input/Input';
import AuthTemplate from '../AuthTemplate/AuthTemplate';

import './SignUp.scss';

const SignUp = () => {
    return (
        <AuthTemplate>
            <div className="sign-up__box">
                <h2>Sign Up</h2>
                <div className="sign-up__box_inputs">
                    <div className="inputs__name">
                        <p>Name</p>
                        <Input placeholder='Your Name' />
                    </div>
                    <div className="inputs__email">
                        <p>Email</p>
                        <Input placeholder='Your Email' />
                    </div>
                    <div className="inputs__pass">
                        <p>Password</p>
                        <Input placeholder='Your Password' />
                    </div>
                    <div className="inputs__confirm-pass">
                        <p>Confirm Password</p>
                        <Input placeholder='Confirm Password' />
                    </div>
                </div>
                <ButtonPrimary buttonName='Sign Up' />
                <p className='sign-in'>Already have an account? <Link to='/login'>Sign In</Link></p>
            </div>
        </AuthTemplate>
    )
}

export default SignUp;