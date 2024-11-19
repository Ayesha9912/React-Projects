import React from 'react'
function LoadingPrac() {
  return (
    <div>
        <div className='flex justify-center items-center h-screen'>
            <div className='w-8 h-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='w-8 h-8 bg-black rounded-full ml-2 animate-bounce [animation-delay:-0.15s]'></div>
            <div className='w-8 h-8 bg-black rounded-full ml-2 animate-bounce'></div>
        </div>
    </div>
  )
}
export default LoadingPrac