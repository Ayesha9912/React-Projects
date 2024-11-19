import React from 'react'

export default function Loading() {
  return (
    <>

    <div className='flex justify-center items-center h-screen'>
        <div className='w-8 h-8 bg-black rounded-full  animate-bounce [animation-delay:-0.3s]'></div>
        <div className='w-8 h-8 ml-2 bg-black rounded-full  animate-bounce [animation-delay:-0.15s]'></div>
        <div className='w-8 h-8 ml-2 bg-black rounded-full  animate-bounce'></div>
    </div>
    
    </>
  )
}
