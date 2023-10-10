import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
