import React from 'react';
import './AuthTemplate.scss';

interface IAuthTemp {
    children: React.ReactNode;
}

const AuthTemplate = (props:IAuthTemp) => {
    return (
        <div className='auth-temp__container'>
            <div className="auth-temp__logo">
                <img src="images/logo-dark.png" alt="" />
            </div>
            {props.children}
        </div>
    )
}

export default AuthTemplate;