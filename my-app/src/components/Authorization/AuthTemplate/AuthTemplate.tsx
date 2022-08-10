import React from 'react';
import { Link } from 'react-router-dom';
import './AuthTemplate.scss';

interface IAuthTemp {
    children: React.ReactNode;
}

const AuthTemplate = (props:IAuthTemp) => {
    return (
        <div className='auth-temp__container'>
            <div className="auth-temp__logo">
                <Link to='/'><img src="images/logo-dark.png" alt="" /></Link>
            </div>
            {props.children}
        </div>
    )
}

export default AuthTemplate;