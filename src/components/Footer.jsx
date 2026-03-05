import React from 'react';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="footer-content">
                <div className="footer-logo">Sudharsan Portfolio</div>
                <p className="footer-text">
                    Designed & Built with <span className="heart">♥</span> by Sudharsan
                </p>
                <div className="footer-year">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
