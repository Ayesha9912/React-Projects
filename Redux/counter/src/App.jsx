import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incr, decr, signin } from './Actions';
export default function App(){
  let getCount = useSelector(state => state.count)
  let getUser = useSelector(state => state.user)
  let dispatch = useDispatch();
  console.log(getCount, getUser);
  return(
    <div>
      <button onClick={() =>{ dispatch(incr()) }}>incre</button>
      {getCount}
      <button onClick={() =>{ dispatch(decr()) }}>decre</button>
      <button onClick={() =>{ dispatch(signin()) }}>signin</button>
    </div>
  )
}



 


