import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.Precio, 0);
    const clearCart = () => {
        setCart(cart.filter(item => typeof item.precio === 'number'));
    };

    return (
        <div className="cart-container">
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.imgUrl} alt={item.Producto} className="cart-item-image" />
                    <h2 className="cart-item-title">{item.Producto}</h2>
                    <p className="cart-item-price">Precio: ${item.Precio}</p>
                </div>
            ))}

            <p className="cart-total">Total: ${totalPrice}</p>
            {cart.length > 0 && (
                <>
                    <Link to="/checkout" className="checkout-link">
                        Finalizar Compra
                    </Link>
                    <button onClick={clearCart} className="clear-cart-button">
                        Borrar Productos
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;

