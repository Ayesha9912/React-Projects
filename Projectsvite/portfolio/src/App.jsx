import React, { useContext, useState } from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './Resume'
import Work from './Work'
import From from './From'
import { AppContext } from './Context'
import Loading from './Loading'
export default function App(){
  const {loading} = useContext(AppContext)
  if(loading){
    return(
      <Loading/>
    )
  }
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='https://drive.google.com/file/d/1703gzYPshZ4_zOgsYxAwq-sp0YE-aNGU/view?usp=sharing' element={<Resume/>}></Route>
      <Route path='/work' element={<Work/>}></Route>
      <Route path='/form' element={<From/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
