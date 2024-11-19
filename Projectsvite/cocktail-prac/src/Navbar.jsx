import React, { useState } from 'react'
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom'
import { LiaBarsSolid } from "react-icons/lia";
function Navbar(){
    const [showMenue, setshowMenue] = useState(false)
    const toggle = () => {
        setshowMenue(!showMenue)
    }
    return (
        <div className='overflow-hidden'>
            <div className='w-full h-20 bg-blue-500 p-6 flex justify-between items-center shadow-lg'>
                <img src={logo} alt="Logo" className='w-40 md:w-52' />
                <div className='hidden md:flex'>
                    <ul className='list-none flex gap-x-5'>
                        <Link to={'/'}>
                            <li className='text-gray-900 text-xl font-semibold hover:text-gray-700'>Home</li>
                        </Link>
                        <Link to={'/About'}>
                            <li className='text-gray-900 text-xl font-semibold hover:text-gray-700'>About</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex md:hidden' onClick={toggle}>
                    <LiaBarsSolid color='black' size={30} />
                </div>
            </div>
            {showMenue && <div className='w-full h-[100vh] bg-gray-500 opacity-50 transition-opacity duration-300 fixed left-0 top-0' onClick={toggle}></div>}
            <div className={`fixed inset-y-0 left-0 w-64 pt-6 p-3 bg-white shadow-lg transform ${showMenue ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className='border-b border-gray-500'>
                    <img src={logo} alt="Logo" className='w-52' />
                </div>
                <ul className='list-none mt-10 gap-y-10'>
                    <Link to={'/'}>
                        <li className='text-gray-900 text-xl font-semibold hover:text-gray-700'>Home</li>
                    </Link>
                    <Link to={'/About'}>
                        <li className='text-gray-900 text-xl font-semibold hover:text-gray-700 mt-3'>About</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Navbar