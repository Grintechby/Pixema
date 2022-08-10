import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutUser.scss';
import cn from 'classnames';

const AboutUser = () => {
    const [openMenu, setOpenMenu] = useState(false);

    if (true) {
        return (
            <div className='about-user__container'>
                <div className="about-user__box">
                    <div className="about-user__box_avatar">UN</div>
                    <span className="about-user__box_text">User name</span>
                    <div className="about-user__box_arrow" onClick={() => setOpenMenu(!openMenu)}></div>
                </div>
                <div className={cn("about-user__menu", !openMenu && 'hidden')}>
                    <Link to='/settings'>Edit profile</Link>
                    {/* <a href='#' className={cn('about-user__menu_edit', !openMenu && 'hidden')}>Edit profile</a> */}
                    <div className="dividing-h_line"></div>
                    <Link to='/login'>Log Out</Link>
                    {/* <a href='#' className='about-user__menu_logout'>Log Out</a> */}
                </div>
            </div>
        )
    }
    return (
        <div className='no-user__container' onClick={() => setOpenMenu(!openMenu)}>
            <div className="about-user__box">
                <div className="no-user__box_avatar"><img src="icons/user.svg" alt="" /></div>
                <span className="about-user__box_text">Sign In</span>
                <div className="no-user__box_arrow"></div>
            </div>
            <div className={cn("about-user__menu", !openMenu && 'hidden')}>
                <Link to='login'>Sign In</Link>
                {/* <a href='#' className={cn('about-user__menu_sign-in', !openMenu && 'hidden')}>Sign In</a> */}
            </div>
        </div>
    )
}

export default AboutUser;