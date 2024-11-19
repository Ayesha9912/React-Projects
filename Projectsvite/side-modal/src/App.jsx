import React from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'

export default function App(){
  return(
    <>
    <div className='w-full h-screen relative '>
    <Home/>
    <Modal/>
    <Sidebar/>
    </div>
    </>
  )
}
