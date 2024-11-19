import React from 'react'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './components/Profile'
export default function Useparams(){
  return(
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </BrowserRouter>
        {/* <Home/> */}
        {/* Understanding The Concept Of UseParams */}
    </div>
  )
}
