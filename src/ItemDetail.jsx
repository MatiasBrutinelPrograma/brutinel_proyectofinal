import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        setCart([...cart, item]);
    };

    return (
        <div>
            <h2>{item.nombre}</h2>
            <img src={item.url} alt={item.nombre} />
            <h3>{item.descripcion}</h3>
            <p>Precio: {item.precio}</p>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;
