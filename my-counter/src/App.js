import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const logica = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Contador</h1>
      <b>Contador: { counter }</b>
      <br></br>
      <button
      onClick={ logica }
      >Acrescentar 1</button>
    </div>
  )
}

export default App;