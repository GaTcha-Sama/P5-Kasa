import React from 'react';
import '../styles/Header.scss';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    
    return ( 
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="logo" />
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={`navbar__txt ${location.pathname === '/' ? 'active' : ''}`}>Accueil</div>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <div className={`navbar__txt ${location.pathname === '/about' ? 'active' : ''}`}>À Propos</div>
            </Link>
        </nav>
    );
}

export default Header;