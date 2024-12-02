import './App.css';
import React from 'react';
import { useReducer } from 'react';

/*
* This is a simple example of using the useReducer hook.
*/

// Defines the reducer function called by useReducer to update the state.
const reducer = (state, action) => {

  if (action.type === "ride") {
    return { money: state.money + 10 };

  }
  else if (action.type === "fuel") {
    return { money: state.money - 50 };

  }
  return new Error();
}

function App() {

  // Sets the initial state and calls the reducer function to update the state.
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "ride" })}>A new customer</button>
        <button onClick={() => dispatch({ type: "fuel" })}>Refill the tank</button>
      </div>
    </div>
  );
}

export default App;
