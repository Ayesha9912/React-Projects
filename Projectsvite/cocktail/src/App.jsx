import React from 'react'
// import Navbar from './Navbar'
import About from './About'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SingleCocktail from './SingleCocktail'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/about' element={ <About/>} />
      <Route path='cocktail/:id' element={ <SingleCocktail/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
