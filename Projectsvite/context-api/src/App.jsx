import React, { useContext } from 'react'
import { AppContext } from './Context'
function App() {

  const {Count, handleIncrement, handleDecrement } = useContext(AppContext)

  return (
    <>
    <h1>Counter: {Count}  </h1>
    <button className='p-3 bg-[lightgrey] ' onClick={handleDecrement}>Decrement</button>
    <button className='p-3 bg-[lightgrey] ml-4' onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App