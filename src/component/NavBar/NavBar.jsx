import React from 'react';
import "./NavBar.scss";

import profileIcon from "../../assets/icons/profile-icon.png";
import homeIcon from "../../assets/icons/homepage-icon.png";
import messagesIcon from "../../assets/icons/messages-icon.png";
import logoutIcon from "../../assets/icons/logout-icon.png";

import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className='nav'>
            <Link to={"/HomePage"}>
                <div className='nav__item'>
                <img src={homeIcon} alt="" className='nav__icon'/>
                    <p className='nav__link'>
                        Home
                    </p>
                </div>
            </Link>
         
            <div className='nav__item'>
            <img src={messagesIcon} alt="" className='nav__icon'/>
                    <p className='nav__link'>
                        Message
                    </p>
            </div>

            <Link to={"/profile"}>
                <div className='nav__item'>
                <img src={profileIcon} alt="" className='nav__icon'/>
                    <p className='nav__link'>
                        Profile
                    </p>
                </div>
            </Link>
           
            <Link to={"/"}>
                <div className='nav__item'>
                    <img src={logoutIcon} alt="log out" className='nav__icon'/>
                    <p className='nav__link'>
                        Log Out
                    </p>
                </div>
            </Link>
           

          
            </nav>
    );
};

export default NavBar;