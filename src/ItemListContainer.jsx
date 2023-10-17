import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './main';
import ItemList from './ItemList';
import {db} from "./main";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const[titulo, setTitulo] = useState("Productos");
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const itemsRef = collection(db, "items")
        getDocs(itemsRef)
            .then((resp) =>{
                setItems(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
                    })
                )
            })
    })

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
