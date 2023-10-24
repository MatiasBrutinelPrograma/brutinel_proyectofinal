import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const { cart, addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(item);
    };

    return (
        <div>
            <h2>{item.Producto}</h2>
            <img src={item.url} alt={item.Producto} />
            <h3>{item.Descripcion}</h3>
            <p>Precio: ${item.Precio}</p>
            <p>Stock: {item.Stock}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;