import React from 'react'
import { useSelector } from 'react-redux'
import Register from './Components/Register'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  let Getusers = useSelector(state => state.users)

  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center bg-[gainsboro]'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/Register"} element={<Register />}></Route>
          {/* <Register /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
