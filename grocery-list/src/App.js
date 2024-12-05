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
          height="40px" width="40px" alt="cart" title="Shopping Buddy" className="cart" />
        <Link to="/" className="nav-item" title="Home">Home </Link>
        <Link to="/about" className="nav-item" title="About">About</Link>
      </nav>

      {/* This is where the views change */}
      <div className="content">

        {/* Add routes to the app. */}
        <Routes>
          <Route path="/" element={<Cart shoppingList={shoppingList} />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>

      {/* Add a footer to the app.*/}
      <footer className="footer">
        <p>&copy; 2024 Shopping Buddy. All rights reserved.</p>
      </footer>

    </div>
  )
}


export default App;
