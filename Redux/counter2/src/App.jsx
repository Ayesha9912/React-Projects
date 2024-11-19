import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incr , decr } from './Action/Index'


export default function App(){

  let getCount = useSelector(state => state.count)
  let dispatch = useDispatch()
  return(
    <>

    <h1 className='text-center font-bold mt-10'>Counter</h1>
    <button onClick={()=> {dispatch(incr())}}>Increment</button>
    <p>{getCount}</p>
    <button onClick={()=> {dispatch(decr())}}>Decrement</button>
    
    
    </>
  )
}
