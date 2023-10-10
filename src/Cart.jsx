import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.precio, 0);

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <h2>{item.producto}</h2>
                    <p>{item.precio}</p>
                </div>
            ))}
            <p>Total: {totalPrice}</p>
            {cart.length > 0 && <Link to="/checkout">Checkout</Link>}
        </div>
    );
};

export default Cart;
