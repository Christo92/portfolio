import React from 'react';
import { Link } from 'react-router-dom';
// React-burger-menu
import { bubble as Menu } from "react-burger-menu";

const Sidebar = () => {
    return (
        <Menu>
            <Link className="menu-item" to="/home">Home</Link>
            <Link className="menu-item" to="/about">About</Link>
            <Link className="menu-item" to="/works">Works</Link>
        </Menu>
    );
}

export default Sidebar;