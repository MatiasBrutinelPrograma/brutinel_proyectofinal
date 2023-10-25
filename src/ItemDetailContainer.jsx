import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from './main';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const itemRef = doc(firestore, 'Items', id);
        getDoc(itemRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    const itemData = docSnapshot.data();
                    setItem({ id: docSnapshot.id, ...itemData });
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className="item-detail-container">
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
