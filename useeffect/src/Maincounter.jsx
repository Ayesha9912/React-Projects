// import React from 'react'
import { useState, useEffect} from "react"

export default function Maincounter() {
    const [count, setcount] = useState(0)
    useEffect(() => {
      console.log("count updates", count);
      return () => {
        console.log("previous count updated", count);
      }
    }, [count])
  return(
    <div>
         <h1>
            {count}
        </h1>
        <button onClick={ ()=> setcount(count +1)} className='btn1'>Increment</button>
        <button onClick={ ()=> setcount(count -1)} className='btn2'>Decrement</button>
    </div>
  )
}
