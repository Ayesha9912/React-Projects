import React, {useContext} from 'react'
import { FaBars } from 'react-icons/fa';
import { AppContext } from './Context';



export default function Home() {
    const {isModelOpen, isSidebarOpen} = useContext(AppContext) 
  return (
    <>
    
    <div className='w-full h-screen flex justify-center items-center relative'>
        <div onClick={isSidebarOpen} className='fixed top-[20px] left-[20px] cursor-pointer '>
        <FaBars  className='text-[30px]'/>
        </div>
        <div onClick={isModelOpen} className="w-max flex justify-center items-center p-3 bg-[black] text-[white] rounded-xl cursor-pointer text-xl font-bold">Show Model</div>
    </div>
    </>
  )
}
