import React from 'react'

function Loading() {
  return (
    <div className='h-[100vh] w-full bg-white flex justify-center items-center'>
        <div className='w-10 h-10 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='w-10 h-10 bg-black rounded-full ml-1 animate-bounce  [animation-delay:-0.15s]'></div>
        <div className='w-10 h-10 bg-black rounded-full ml-1 animate-bounce'></div>
    </div>
  )
}

export default Loading