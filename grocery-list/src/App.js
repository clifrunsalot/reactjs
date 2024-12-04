import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import { getDefaultList } from './data/shopping_data';

/**
 * Describes main application component.
 */
function App() {

  const [shoppingList, setShoppingList] = useState(getDefaultList());

  return (
    <div>
      <h1>Shopping List</h1>
      <Cart shoppingList={shoppingList} />
    </div>
  )
}

export default App;
