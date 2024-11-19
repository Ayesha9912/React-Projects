import React from 'react';
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom';

export default function navbar() {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen)
    }
    return (
        <div>
            <div className='w-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg'>
                <div className='max-w-7xl mx-auto px-5 py-4 flex justify-between items-center'>
                    <div className='w-48 cursor-pointer'>
                        <img src={logo} alt="logo" className='h-12' />
                    </div>
                    <ul className='hidden md:flex space-x-8 text-white text-lg'>
                        <li className='hover:text-gray-200 cursor-pointer transition duration-300'>Home</li>
                        <li className='hover:text-gray-200 cursor-pointer transition duration-300'>About</li>
                    </ul>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onclick={toggleMenu}></div>
            <div className={`fixed inset-0 left-0 w-64 bg-white shadow-lg transform ${isMenuOpen ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className='flex justify-between items-center p-4 border-b'>
                    <img src={logo} alt="logo" className='h-12' />
                    <button onclick={toggleMenu} className='text-gray-600 focus:outline-none'></button>
                </div>
                <ul>
                <li className='hover:text-gray-200 py-2 px-4 cursor-pointer transition duration-300'>Home</li>
                <li className='hover:text-gray-200 py-2 px-4 cursor-pointer transition duration-300'>About</li>
                </ul>
            </div>
        </div>
    )
}
