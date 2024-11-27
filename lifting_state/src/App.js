import React from 'react';
import './App.css';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';

function App() {

  const [fruits] = React.useState([
    { fruitname: 'apple', id: 1 },
    { fruitname: 'apple', id: 2 },
    { fruitname: 'plum', id: 3 }
  ])

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruitLen={fruits.length}/>
    </div>
  );
}

export default App;
