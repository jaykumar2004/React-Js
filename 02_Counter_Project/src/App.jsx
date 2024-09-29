import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks:
  //useState : change the state(changes are propogate in ui, dom)
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    
    
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
