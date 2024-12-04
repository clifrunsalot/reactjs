import './App.css';
import Cart from './components/Cart';
import { getShoppingList } from './data/shopping_data';
import { useState } from 'react';

function App() {

  const [shoppingList, setShoppingList] = useState(getShoppingList());

  return (
    <div>
      <h1>Shopping List</h1>
      <Cart shoppingList={shoppingList} />
    </div>
  )
}

export default App;
