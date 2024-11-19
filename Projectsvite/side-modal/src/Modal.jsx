import React, { useContext } from 'react'
import { AppContext } from './Context'
import { FaTimes } from 'react-icons/fa';
export default function (){
  const {modal, isModelClose} = useContext(AppContext)
  return(
    <>
    <div className={`${modal ? "model" : "none"}`}>
        <div className='w-[400px] h-[250px] bg-white rounded-md flex justify-center items-center relative'>
        <p className='text-[40px] font-bold '>Show modal</p>
        
        <button onClick={isModelClose} className='absolute top-5 right-3 '>
        <FaTimes className='text-3xl text-[red] cursor-pointer' />
        </button>
        </div>
      </div>
    </>
  )
}
