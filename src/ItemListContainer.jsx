import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import {db} from "./main";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
const [items, setItems] = useState([]);
const[titulo, setTitulo] = useState("Producto");
const [loading, setLoading] = useState(false);
const {id}=useParams()

useEffect(() =>{
setLoading(true)
const itemsRef = id ? query(collection(db, "Items"), where("category", "==", id )) :collection(db, "Items")
getDocs(itemsRef)
.then((resp) =>{
setItems(
resp.docs.map((doc) => {
return { ...doc.data(), id: doc.id}
})
)
})
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
},[id])

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
