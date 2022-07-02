import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUser.scss';

const AboutUser = () => {
    if (false) {
        return (
            <div className='about-user__container'>
                <div className="about-user__box">
                    <div className="about-user__box_avatar">UN</div>
                    <span className="about-user__box_text">User name</span>
                    <div className="about-user__box_arrow">
                        <img src="/icons/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="about-user__menu">
                    <Link to='/' className='about-user__menu_edit'>Edit profile</Link>
                    <div className="dividing-h_line"></div>
                    <Link to='/' className='about-user__menu_logout' >Log Out</Link>
                </div>
            </div>
        )
    }
    return (
        <div className='no-user__container' onClick={() => console.log('Click')}>
            <div className="about-user__box">
                <div className="no-user__box_avatar"><img src="icons/user.svg" alt=""/></div>
                <span className="about-user__box_text">Sign In</span>
                <div className="no-user__box_arrow">
                    <img src="/icons/arrow.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUser;