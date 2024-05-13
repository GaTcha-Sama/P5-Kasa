import React from 'react';
import '../styles/Header.scss'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return ( 
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="logo" />
            </div>
            <Link to="/"><div className="navbar__txt">Accueil</div></Link>
            <Link to="/about"><div className="navbar__txt">À Propos</div></Link>
        </nav>
    )
}

export default Header