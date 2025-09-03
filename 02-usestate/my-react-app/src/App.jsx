import { useState } from 'react';
function App() {

  //phase 1 - properties and state
  //let counter = 0;
  const [counter, setCounter] = useState(0);

  //phase 2 - events and methods
  function handleIncrement() {
    //counter++;
    //alert(counter);
    setCounter(counter + 1);
  }

  function handleReset() {
    setCounter(0);
  }
  function handleMinus() {
    setCounter(counter - 1);
  }

    //phase 3 - html
    return (
      <div>
        <h1>Hello World</h1>
        <p>Counter: {counter}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleMinus}>-</button>
      </div>
    )
  }

  export default App