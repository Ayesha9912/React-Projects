import React, { useReducer } from 'react'
import {reducer} from './Reducer'

let InitialState = 0;




function Counter() {

    const [cur, dispatch] = useReducer(reducer, InitialState)

    console.log(cur);


  return (
    <div>
        <h1>Use Reducer Hook for Managing the complex State</h1>

        <button className='bg-red-500 px-6 py-3 rounded-xl text-white text-xl' onClick={()=> dispatch({type: "Inc"})}>Increment</button>
        <button className='bg-blue-500 px-6 py-3 rounded-xl text-white text-xl' onClick={()=> dispatch({type: "Dec"})}>Decrement</button>

        <h1 className='text-3xl mt-4 font-extrabold'>Counter: {cur} </h1>

    </div>
  )
}

export default Counter