import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/categories/Cocina" className="nav-link">Cocina</Link>
            <Link to="/categories/Habitación" className="nav-link">Habitación</Link>
            <Link to="/contact" className="nav-link">Contacto</Link>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
