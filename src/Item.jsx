import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item-container">
      <h2 className="item-title">{item.Producto}</h2>
      <img src={item.url} alt={item.Producto} className="item-image" />
      <p className="item-price">${item.Precio}</p>
      {item.Descripción && <p className="item-description">{item.Descripción}</p>}
      <Link to={`/Item/${item.id}`} className="item-link">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
  
