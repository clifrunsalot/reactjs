import './App.css';

import { useState, useRef } from 'react';

// This is a simple calculator that can add, subtract, multiply, and divide two numbers.
function App() {

  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();

    // The inputRef.current.value is a string, so we need to convert it to a number.
    // Then, assign the sum of the input value and the current result to a new variable.
    const newResult = Number(inputRef.current.value) + Number(result);

    // Must use the 'setResult' function to update the value of 'result' in the state.
    setResult(newResult);
  }

  function minus(e) {
    e.preventDefault();
    const newResult = Number(result) - Number(inputRef.current.value);
    setResult(newResult);
  }

  function times(e) {
    e.preventDefault();
    const newResult = Number(inputRef.current.value) * Number(result);
    setResult(newResult);
  }

  function divide(e) {
    e.preventDefault();
    const newResult = Number(result) / Number(inputRef.current.value);
    setResult(newResult);
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        {/* To display the result, use the state variable 'result' not the ref resultRef.*/}
        <p>Result: {result}</p>
        <input pattern="[0-9]" type="text" ref={inputRef} placeholder='Enter a number' />
        <br />

        {/* Add buttons for each operation. 
          Suggestion: Time permitting, add error handling for cases when there is no
          value in the input field, perhaps an alert.*/}

        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetResult}>Reset Result</button>
        <button onClick={resetInput}>Reset Input</button>

      </form>
    </div>
  );
}

export default App;
