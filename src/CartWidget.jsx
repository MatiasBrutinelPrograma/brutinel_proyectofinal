import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <Link to="/cart">Carrito ({totalItems})</Link>
        </div>
    );
};

export default CartWidget;
