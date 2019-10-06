import React from 'react';

const Footer = () => {

    const currentDate = (new Date().getFullYear());

    return (
        <div className="footer">
            <p className="footer__copyright">© All rights reserved, {currentDate}</p>
        </div>
    );
}

export default Footer;