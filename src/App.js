import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './providers/CartProvider'

function App() {
  return (
    <CartProvider defaultValue={[]}>
      <BrowserRouter>
        <NavBar />  
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="catálogo" />  
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer greeting="catálogo" />  
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer greeting="Detalle" />  
          </Route>
          <Route exact path="/cart">
            <Cart />  
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
