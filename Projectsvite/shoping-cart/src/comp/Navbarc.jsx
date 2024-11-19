import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

export default function Navbarc({sidebarOpen}){
  return (
    <>
    <nav className='w-[100%] bg-slate-600'>
      <div className='w-[90%] p-5 m-auto flex justify-between items-center'>
        <h1 className='text-white font-bold text-[30px]'>USEREDUCER</h1>
        <div className='text-white text-[40px] cursor-pointer relative ' onClick={sidebarOpen}>
          <IoCartOutline/>
          <div className='absolute top-0 right-0 rounded-full w-[20px] h-[20px] bg-blue-600 flex justify-center items-center'>
            <span className='text-[12px]'>4</span>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
