import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        Carrito (<span className="cart-items">{totalItems}</span>)
      </Link>
    </div>
  );
};

export default CartWidget;
