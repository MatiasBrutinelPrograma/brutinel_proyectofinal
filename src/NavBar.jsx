import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/categories">Categorias</Link>
            <Link to="/cart">Carrito</Link>
            <Link to="/contact">Contacto</Link>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
