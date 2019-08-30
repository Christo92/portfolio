import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Sidebar from './Sidebar';
// Svg
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <div className="header">
            <Sidebar />
            <header className="header__navigation-bar">
                <Link className="header__link" to="/home">
                    <img src={logo} className="header__logo" alt="logo" />
                </Link>
            </header>
        </div>
    );
}

export default Header;