import React, { useContext } from 'react'
import { AppContext } from './Context'
import Hamburger from 'hamburger-react';
import logo from './assets/logo.7eb7df78c9c3f0b293b578bb70239387.svg'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
export default function Navbar(){
    const {openFalse , setOpen , isOpen } = useContext(AppContext)
  return(
    <>
    <nav className='w-full z-10 h-20 bg-green-500 fixed top-0 left-0 flex justify-between items-center px-7'>
            <div className='w-16 mt-2'>
              <Link to='/'>
              <img src={logo} alt="logo"/>
              </Link>
            </div>
            <Hamburger  size={30} color="black"   onToggled={isOpen} onToggle={setOpen} />
            
          </nav>
     {/* <Sidebar/> */}
    </>
  )
}
