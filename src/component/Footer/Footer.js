import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer bg-light">
            <div className="footer-page-links">
                <Link className="nav-link" aria-current="true" to='/' >Home</Link>
                <a className="nav-link" aria-current="true" href="#about">About</a>
                <a className="nav-link" aria-current="true" href="#shop">Shop</a>
                <a id="footer-last-item" className="nav-link" aria-current="true" href="#help">Help</a>
            </div>
            <p>&copy; SYLHET SHOP</p>     
        </div>
    );
};

export default Footer;