import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext'; 
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Categories from './Categories';
import Cart from './Cart';
import Checkout from './Checkout';
import Contact from './Contact'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/categories" element={<Categories />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
