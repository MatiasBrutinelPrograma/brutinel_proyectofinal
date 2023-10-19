import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div>
            <h2>{item.producto}</h2>
            <img src={item.url} alt={item.producto} />
            <p>{item.precio}</p>
            <Link to={`/Item/${item.id}`}>Ver detalles</Link>
        </div>
    );
};

export default Item;
