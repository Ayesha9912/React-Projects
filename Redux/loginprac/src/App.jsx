import React from 'react'
import Register from './Components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';

export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
