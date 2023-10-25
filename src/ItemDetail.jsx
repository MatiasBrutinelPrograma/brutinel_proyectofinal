import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const { cart, addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(item);
    };

    return (
        <div className="item-detail-container">
            <h2 className="item-title">{item.Producto}</h2>
            <img src={item.url} alt={item.Producto} className="item-image" />
            <h3 className="item-description">{item.Descripcion}</h3>
            <p className="item-price">Precio: ${item.Precio}</p>
            <p className="item-stock">Stock: {item.Stock}</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemDetail;
