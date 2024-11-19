import React, { useContext } from 'react'
import { AppContext } from './Contextc'
import { FaTimes } from 'react-icons/fa'
export default function Modalc(){
    const {ismodel, isModelclose} = useContext(AppContext)
  return(
    <>
        <div className={`fixed top-0 left-0 w-full h-[100vh]  bg-black  opacity-50 justify-center items-center ${ismodel ? "flex": "hidden"}`}>
        </div>
        <div className={`fixed top-[30%] left-[40%] w-[400px] h-[300px] rounded-md bg-white shadow-lg ${ismodel ? "flex": "hidden"}`}>
            <div className='w-full h-full relative'> <h1 className=' text-2xl font-bold text-center mt-5'>Show Model</h1>
            <FaTimes className='absolute top-[10px] right-[10px]' size={25} color='green' onClick={isModelclose}/>
            </div>
        </div>
    </>
  )
}
