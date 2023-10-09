import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const db = firestore.collection('items').doc(id);
        db.get().then((doc) => {
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                setItem({ id: doc.id, ...doc.data() });
            }
        });
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
