import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tour from './Tour';
import Checkout from './Checkout';

function App(){
  const [loading, setloading] = useState(true)
  const toggle = ()=>{
    setTimeout(() => {
      setloading(false)
    }, 3000);
  }
  useEffect(()=>{
    toggle()
  },[])
  if(loading){
    return(
      <>
      <main>
        <Loading/>
      </main>
      </>
    )
  }
  return(
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Tour/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App