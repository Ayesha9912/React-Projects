import React, { useState } from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return(
    <>
      <div className='w-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg'>
        <div className='max-w-7xl mx-auto px-5 py-4 flex justify-between items-center'>
          <Link to="/">
          <div className='w-48 cursor-pointer'>
            <img src={logo} alt="Logo" className='h-12'/>
          </div>
          </Link>
          <ul className='hidden md:flex space-x-8 text-white text-lg'>
            <Link to="/">
            <li className='hover:text-gray-200 cursor-pointer transition duration-300'>Home</li>
            </Link>
            <Link to="/about">
            <li className='hover:text-gray-200 cursor-pointer transition duration-300'>About</li>
            </Link>
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
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className='flex justify-between items-center p-4 border-b'>
          <img src={logo} alt="Logo" className='h-12'/>
          <button onClick={toggleMenu} className='text-gray-600 focus:outline-none'>
          </button>
        </div>
        <ul className='text-gray-800 text-lg p-4'>
          
        <Link to="/">
            <li className='hover:bg-gray-100 py-2 px-4 cursor-pointer transition duration-300'>Home</li>
            </Link>
            <Link to="/about">
            <li className='hover:bg-gray-100 py-2 px-4 cursor-pointer transition duration-300'>About</li>
            </Link>
        </ul>
      </div>
    </>
  );
}
