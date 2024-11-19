import React from 'react'
import Navbar2 from './Navbar2'

export default function From(){
  return(
    <div>
      <Navbar2/>
        <div className='w-full flex flex-col  justify-center items-center mt-[8vh] h-[90vh] bg-black'>
        <h1 className='font-bold font-mono text-4xl md:text-5xl text-green-500'>Contact Form</h1>
        <div className='w-[98%] lg:w-[60%] mt-10 flex flex-col lg:p-0 p-10'>
            <div className='w-full flex flex-wrap gap-x-5'>
            <input type="text" className='border-4 w-[98%] lg:w-[48%] border-green-500 outline-none  rounded-md h-14 bg-black pl-2 text-white font-mono' placeholder='Enter your name'/>
            <input type="text" className='border-4 border-green-500 w-[98%] lg:w-[48%] mt-8 lg:mt-0 outline-none rounded-md h-14 bg-black pl-2 text-white font-mono' placeholder='Enter your email'/>
            </div>
            <div className='w-[100%]'>
            <input type="text" className='border-4 border-green-500 w-[98%] outline-none mt-8 rounded-md h-14 bg-black pl-2 text-white font-mono' placeholder='Enter your email'/>
            </div>
            <textarea className='w-[98%] border-4 border-green-500 outline-none p-5 h-40 text-white mt-6 bg-black' placeholder='Enter your message here'>
            </textarea>
            <button className='text-white font-mono font-bold  px-10 py-3 bg-green-500 mt-5 rounded-lg'>Submit</button>
        </div>
        </div>
    </div>
  )
}
