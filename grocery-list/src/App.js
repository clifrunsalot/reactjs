import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import About from './components/About';
import { getDefaultList } from './data/shopping_data';
import { Routes, Route, Link } from 'react-router-dom';
import cart from './assets/shopping_cart_PNG7.png';

/**
 * Describes main application component.
 */
function App() {

  const [shoppingList, setShoppingList] = useState(getDefaultList());

  return (
    <div className="App">

      {/* Add a navigation bar to the app. */}
      <nav>
          <img src={cart}
            height="40px" width="40px" alt="cart" className="cart" />
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>

      {/* Add routes to the app. */}
      <Routes>
        <Route path="/" element={<Cart shoppingList={shoppingList} />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}

export default App;
