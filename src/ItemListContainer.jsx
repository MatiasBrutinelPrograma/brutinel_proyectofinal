import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './main';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            const itemsCollection = collection(firestore, 'items');
            const itemsSnapshot = await getDocs(itemsCollection);
            const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(itemsList);
            setLoading(false);
        };

        getItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
