import { useState } from 'react';
function App() {

  //phase 1 - properties and state
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  //phase 2 - events and methods
  function handleIncrement() {
    //counter++;
    //alert(counter);
    setCounter(counter + 1);
  }
  function handleChange(e) {
    //setName(e.target.value);
    console.log(e.target.value);
    setName(e.target.value);
  }
  function handleReset() {
    setCounter(0);
  }
  function handleMinus() {
    setCounter(counter - 1);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted");
    alert(name);
  }

    //phase 3 - html
    return (
      <div>
        <h1>Hello World</h1>
        <p>Counter: {counter}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleMinus}>-</button>

        <form onSubmit={handleSubmit}>
          <input type="text"  onChange={handleChange} placeholder="Enter your name" />
          <button type="submit">Submit</button>

        </form>

        
      </div>
    )
  }

  export default App