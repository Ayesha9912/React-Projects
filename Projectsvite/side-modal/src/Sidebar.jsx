import React, { useContext } from 'react'
import { AppContext } from './Context'
import { FaTimes } from 'react-icons/fa';

export default function Sidebar() {
  const { sidebar, isSidebarClose } = useContext(AppContext)
  return(
    <>
      <div className={`${sidebar ? "leftside" : 'left'}`}>
        <div className='relative'>
          <div onClick={isSidebarClose} className='absolute right-4 top-4'>
            <FaTimes className=' text-3xl cursor-pointer  text-[blue]' />
          </div>
        </div>
      </div>
    </>
  )
}
