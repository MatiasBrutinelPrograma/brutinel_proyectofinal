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
        getDoc(itemRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                setItem({ id: docSnapshot.id, ...docSnapshot.data() });
            } else {
                console.log('No such document!');
            }
        }).catch((error) => console.log(error));
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
