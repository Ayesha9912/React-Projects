import React from 'react'
import { Link } from 'react-router-dom'

export default function Allprojects(){
  return(
    <>
    <div className='w-full bg-black relative flex justify-center items-center p-10'>
        <div className='border-4 absolute  top-10% left-45% delay-700  animation flex justify-center items-center  border-green-500 rounded-md hover:rotate-3'>
        </div>
        <Link to='/work'>
        <div className='w-72  h-16 bg-green-500 rounded-md flex justify-center items-center hover:rotate-3 transition duration-300'>
            <h1 className='text-black font-bold font-mono text-2xl '>View All Projects</h1>
        </div>
        </Link>
        
    </div>
    </>
  )
}
