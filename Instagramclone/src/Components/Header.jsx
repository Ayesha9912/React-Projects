import React from 'react'
import logo from './Images/Instagram-Logo.png'
import { Link } from 'react-router-dom';
function Header(){
  return(
    <div>
        <div className='fixed top-0 bg-white left-0 w-[100%] h-20 p-5 flex xl:hidden shadow-sm z-10'>
            <div className='w-32'>
            <Link to ='/'>
            <img src={logo} alt=""/>
            </Link>
            </div>
        </div>
    </div>
  )
}
export default Header