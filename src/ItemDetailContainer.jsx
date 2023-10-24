import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from './main';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const itemRef = doc(firestore, 'items', id);
        getDoc(itemRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    const itemData = docSnapshot.data();
                    // Extrae los detalles del producto, por ejemplo: nombre, precio, descripción
                    const { nombre, precio, descripcion } = itemData;
                    // Luego, establece esos detalles en el estado local
                    setItem({ id: docSnapshot.id, nombre, precio, descripcion });
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
