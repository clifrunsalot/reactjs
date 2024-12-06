import { useState, useRef } from 'react';

import './App.css';

// This is a simple calculator that can add, subtract, multiply, and divide two numbers.
function App() {

  // Create a reference to track the value of the input field.
  const inputRef = useRef(null);

  // Create a state variable to store the result of the calculation.
  const [result, setResult] = useState(0);

  // Error message for invalid input
  const [errorMessage, setErrorMessage] = useState('');

  // Validate the input field
  function isValidInput() {

    // Must always check if the inputRef.current is not null before accessing its value.
    const input = inputRef.current ? inputRef.current.value : '';
    if (input.trim() === '') {
      setErrorMessage('Please enter a number before clicking a button');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  }

  // Create functions to handle the operations.
  function plus(e) {
    e.preventDefault();
    if (isValidInput() === false) {
      return;
    }
    const newResult = Number(inputRef.current.value) + Number(result);

    // Must use the 'setResult' function to update the value of 'result' in the state.
    setResult(newResult);
  }

  function minus(e) {
    e.preventDefault();
    if (isValidInput() === false) {
      return;
    }
    const newResult = Number(result) - Number(inputRef.current.value);
    setResult(newResult);
  }

  function times(e) {
    e.preventDefault();
    if (isValidInput() === false) {
      return;
    }
    const newResult = Number(result) * Number(inputRef.current.value);
    setResult(newResult);
  }

  function divide(e) {
    e.preventDefault();
    if (isValidInput() === false) {
      return;
    }

    if (Number(inputRef.current.value) === 0) {

      // Reset inputRef.current.value to '' to trigger the
      // CSS error message. Set the error message appropriately.
      inputRef.current.value = '';
      setErrorMessage('Cannot divide by zero');
      return;
    }

    const newResult = Number(result) / Number(inputRef.current.value);
    setResult(newResult);
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  function resetInput(e) {
    e.preventDefault();
    setErrorMessage('');
    inputRef.current.value = '';
  }

  return (
    <div className="App">

      <div align="center">
        <h1>Simplest Working Calculator</h1>
      </div>

      <div align="center">
        <form>

          {/* Display the latest result */}
          <p>Result: {result}</p>

          {/* Add an input field to enter a number to process. */}
          <input pattern="[0-9]" type="number" ref={inputRef} placeholder='Enter a number' />
          <div className={inputRef.current && inputRef.current.value ? '' : 'error-message'}>{errorMessage}</div>
          <br />

          {/* Add buttons for each operation. */}

          <button onClick={plus}>add</button>
          <button onClick={minus}>subtract</button>
          <button onClick={times}>multiply</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetResult}>Reset Result</button>
          <button onClick={resetInput}>Reset Input</button>

        </form>
      </div>
    </div>
  );
}

export default App;
