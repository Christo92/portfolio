import React, { Component } from 'react';
// Component
import Sidebar from './Sidebar';
// Svg
import logo from '../img/logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Sidebar />
                <header className="header__navigation-bar">
                    <img src={logo} className="header__logo" alt="logo"/>
                </header>
            </div>
        );
    }
}

export default Header;