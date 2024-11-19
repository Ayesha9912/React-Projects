import React, { useState,useEffect } from 'react'
export default function Counterprac(){
    const [count, setcount] = useState(0)
    const [name, setname] = useState('')
    useEffect(() => {
        console.log("Count has updated", count);
        return(
            ()=>{
                console.log("Count has been unmounted", count);
            }
        )
    }, [count])
    useEffect(()=>{
        console.log("Name has updated");
    }, [name])
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment Count</button>
            <div>Name:{name}</div>
            <input type="text" value={name} onChange={(e)=> setname(e.target.value)}/>
        </div>
    )
}