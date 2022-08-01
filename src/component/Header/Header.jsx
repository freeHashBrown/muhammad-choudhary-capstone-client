import React from 'react';
import "./Header.scss";
import logo from "../../assets/logo/oak-tree.png";

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo" className='header__logo'/>
            <h1 className='header__title'>
                Learning Platform
            </h1>
        </header>
    );
};

export default Header;