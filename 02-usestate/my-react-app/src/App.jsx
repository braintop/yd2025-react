import { useState } from 'react';
function App() {

  //phase 1 - properties and state
  //let counter = 0;
  counter [counter, setCounter] = useState(0);

  //phase 2 - events and methods
  function handleClick() {
    //counter++;
    //alert(counter);
   // setCounter(counter + 1);
  }

  //phase 3 - html
  return (
    <div>
      <h1>Hello World</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App