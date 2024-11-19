import React, {useContext} from 'react'
import { AppContext } from './ContextApi'

function Home(){
    const {count, Incr, Decr} = useContext(AppContext)
  return (
    <div>

        <button onClick={Incr} className='p-5 bg-slate-500 text-white'>Increment</button>
        <button onClick={Decr} className='p-5 bg-slate-500 text-white'>Decrement</button>

        <h1>{count}</h1>
    </div>
  )
}

export default Home