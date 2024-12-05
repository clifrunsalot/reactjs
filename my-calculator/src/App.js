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
    // Must use the 'setResult' function to update the value of 'result' in the state.
    setResult(Number(inputRef.current.value) + Number(result));

    // Then assign the value of 'result' to the resultRef.current.value to display it on the screen.
    resultRef.current.value = result;
  }

  function minus(e) {
    e.preventDefault();
    setResult(Number(result) - Number(inputRef.current.value));
    resultRef.current.value = result;
  }

  function times(e) {
    e.preventDefault();
    setResult(Number(inputRef.current.value) * Number(result));
    resultRef.current.value = result;
  }

  function divide(e) {
    e.preventDefault();
    setResult(Number(result) / Number(inputRef.current.value));
    resultRef.current.value = result;
  }

  function resetResult(e) {
    
    e.preventDefault();
    setResult(0);
    resultRef.current.value = result;
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
        <p ref={resultRef}>Result: {result}</p>
        <input pattern="[0-9]" type="text" ref={inputRef} placeholder='Enter a number'/>
        <br />
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
