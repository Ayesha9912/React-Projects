import React from 'react'
import { FaHeart } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
        <div className='w-full bg-black  p-10 flex justify-center items-center h-8'>
            <h1 className='flex items-center text-green-500 text-[18px] md:text-xl text-center'>Build from <FaHeart className='ml-2 mr-2'/>All Right Reserved by ayeshamehmood.io</h1>
        </div>
    </>
  )
}
