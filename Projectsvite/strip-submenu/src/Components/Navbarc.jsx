import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { AppContext } from './Contextc';

export default function Navbarc(){
    const { openSideMenu, openSideBar} = useContext(AppContext)
    const displayMenu = (e)=>{
    const text = e.target.textContent 
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom + 10
    openSideMenu(text, {center, bottom})
    }
    return(
        <>
            <div className='w-full h-[8vh] bg-blue-700 px-5 py-2 flex justify-between items-center'>
                <img src={logo} alt="logo"/>
                <div className='w-[450px]'>
                    <ul className='flex w-full justify-between'>
                        <li>
                            <button onMouseOver={displayMenu} className='text-white'>Products</button>
                        </li>
                        <li>
                            <button onMouseOver={displayMenu} className='text-white'>Developers</button>
                        </li> 
                        <li>
                            <button onMouseOver={displayMenu} className='text-white'>Company</button>
                        </li>
                    </ul>
                </div>
                <button className='px-4 py-2 bg-black rounded-md text-white'>Sing Up</button>
            </div>
        </>
    )
}
