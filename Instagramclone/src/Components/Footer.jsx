import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiMessenger } from "react-icons/si";
function Footer(){
  return (
    <div>
        <div className='w-[100%] h-16 fixed bottom-0 left-0 bg-white flex md:hidden justify-evenly items-center'>
        <GoHomeFill size={28}/>
        <IoSearchSharp size={28}/>
        <MdExplore size={28}/>
        <SiMessenger size={28}/>
        <CgProfile size={28} />



        </div>
    </div>
  )
}

export default Footer