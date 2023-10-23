import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div>
            <h2>{item.Producto}</h2>
            <img src={item.url} alt={item.Producto} />
            <p>{item.Precio}</p>
            <Link to={`/Item/${item.id}`}>Ver detalles</Link>
        </div>
    );
};

export default Item;
