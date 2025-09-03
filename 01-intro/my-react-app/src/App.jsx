
function App() {
  //phase 1 - properties and state
  let firstName = 'John';
  let lastName = 'Doe';
  let age = 20;
  let isStudent = true;
  let hobbies = ['reading', 'writing', 'coding'];
  function getFullName() {
    alert(`${firstName} ${lastName}`);
  }
  //phase 2 - events and methods
  function handleClick() {
    alert('Button clicked');
  }

  //phase 3 - html 
  return (
    <>
      <h1>Hello World</h1>
      <p>Hello {firstName} {lastName}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 'Yes' : 'No'}</p>
      <p>Hobbies: {hobbies.join(', ')}</p>

      <button onClick={handleClick}>Click me</button>
      <button onClick={getFullName}>Get Full Name</button>

    </>
  )
}

export default App
