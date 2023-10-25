import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from './main';
import Item from './Item';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      // Obtener las categorías desde Firebase
      const categoriesCollection = collection(firestore, 'Tienda-de-muebles', '2QtjzZa559OBcCIWCKwR', 'Items');
      const categoriesSnapshot = await getDocs(categoriesCollection);
      const categoriesList = categoriesSnapshot.docs.map(doc => doc.data().Categoria);
      setCategories(categoriesList);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getItems = async () => {
      if (selectedCategory) {
        // Obtener los productos filtrados por categoría desde Firebase
        const itemsCollection = collection(firestore, 'Tienda-de-muebles', '2QtjzZa559OBcCIWCKwR', 'Items');
        const q = query(itemsCollection, where("category", "==", selectedCategory));
        const itemsSnapshot = await getDocs(q);
        const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsList);
      }
      setLoading(false);
    };
    getItems();
  }, [selectedCategory]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="categories-container">
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="items-list">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
