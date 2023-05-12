import React, { useState } from 'react';
import './/App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const incrementOne = () => {
    setCounter(counter + 1)
  }

  const incrementThree = () => {
    setCounter(counter + 3)
  }

  const incrementFive = () => {
    setCounter(counter + 5)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className='App' >
      <h1 id='counter-title'>Contador</h1>
      <p id='counter-value'>Contador: {counter}</p>
      <br></br>
      <button className='buttons'
        onClick={incrementOne}
      >Acrescentar 1
      </button>
      <button className='buttons'
        onClick={incrementThree}
      >Acrescentar 3
      </button>
      <button className='buttons'
        onClick={incrementFive}
      >Acrescentar 5
      </button>
      <button className='buttons'
        onClick={reset}
      >Resetar
      </button>
    </div >
  )
}

export default App;