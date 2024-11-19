import React from 'react'
import logo from './Images/Instagram-Logo.png'
import { GoHomeFill } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Sidebar(){
  return(
    <div>
        <div className='w-1/5 hidden xl:block  h-[100vh] border fixed top-0 left-0 p-8'>
            <div className=' w-2/5'>
              <Link to={'/'}>
            <img src={logo} alt=""/>
              </Link>
            </div>
            <div  className='w-5/5  mt-8 flex flex-col'>
                <div className='flex items-center p-3 hover:bg-gray-300 rounded'>
                <GoHomeFill size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Home</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <IoSearchSharp size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Search</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <MdExplore size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Explore</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <BsCameraReels size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Reels</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <SiMessenger size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Message</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <FaRegHeart size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Notification</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <FaRegPlusSquare size={25} />
                <h1 className='font-normal text-xl text-black ml-5'>Create</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <CgProfile size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Profile</h1>
                </div>
            </div>
            <div className='mt-20  w-5/5 pt-20'>
                <div className='flex items-center p-3  mt-10 hover:bg-gray-300 rounded'>
                <FaThreads size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>Threads</h1>
                </div>

                <div className='flex items-center p-3  mt-1 hover:bg-gray-300 rounded'>
                <FaBars size={25}/>
                <h1 className='font-normal text-xl text-black ml-5'>More</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Sidebar