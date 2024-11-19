import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa';
import { AppContext } from './Contextc';
export default function Homec() {
    const {isSidebaropen, isModelopen} = useContext(AppContext)
    return(
        <>
            <div className='w-full h-[100vh] bg-white'>
                <div className='w-full pl-10 p-8'><FaBars size={30} color='black' onClick={isSidebaropen}/></div>
                <div className='w-full h-[80vh] flex justify-center items-center'>
                    <button className='w-[200px] bg-black text-white px-8 py-3 rounded-md'onClick={isModelopen}>Show Model</button>
                </div>
            </div>
        </>
    )
}
