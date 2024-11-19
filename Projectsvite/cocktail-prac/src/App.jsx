import React from 'react'
import Home from './Home'
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Single from './Single';

export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/cocktail/:id' element={<Single/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}
