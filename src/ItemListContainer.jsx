import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = firestore.collection('items');
        db.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results!');
            }
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    return (
        <div>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
