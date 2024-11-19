import React, { useContext } from 'react'
import { AppContext } from './Contextc'
import { FaCross, FaTimes } from 'react-icons/fa';

export default function Sliderc(){
    const{isSidebarclose, issidebar} = useContext(AppContext)
    console.log(issidebar);
  return(
    <>
    <div className={`fixed top-0 w-[25vw] bg-white h-[100vh] p-10 shadow-xl border transform inset-y-0 ${issidebar ? "translate-0": "-translate-x-full"} transition duration-300`}>
        <div className='w-full h-[100vh] relative p-5'>
            <FaTimes onClick={isSidebarclose} className='absolute top-0 right-0' size={25} color='green'/>
        </div>
    </div>
    </>
  )
}
