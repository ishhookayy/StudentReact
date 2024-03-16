/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <label className="text-base p-2 m-1 flex-none">Enter your Name: </label>
      <input id="name" type="text" placeholder="Balasubramani" />
      <br />
      <input id="display" type="submit" onClick={displayName()} name="submit" />
    </>
  );
}
function displayName(){
  const display = document.createElement('h1');
  display.innerHTML ="<h1>Hello"+ document.getElementById('name')+"</h1>"
  document.getElementById('root').append(display);
}

export default App
