import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        setCart([...cart, item]);
    };

    return (
        <div>
            <h2>{item.producto}</h2>
            <img src={item.url} alt={item.producto} />
            <p>{item.precio}</p>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;
