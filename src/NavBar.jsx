import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/cart">Carrito</Link>
            {/* Aquí puedes agregar más enlaces a diferentes categorías */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;
