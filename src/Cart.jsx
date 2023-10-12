import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.precio, 0);

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <h2>{item.producto}</h2>
                    <p>{item.precio}</p>
                </div>
            ))}
            <p>Total: {totalPrice}</p>
            {cart.length > 0 && 
              <>
                <Link to="/checkout">Finalizar Compra</Link>
                <button onClick={clearCart}>Borrar Productos</button> 
              </>
            }
        </div>
    );
};

export default Cart;

