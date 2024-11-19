import React, { useContext } from 'react'
import { AppContext } from './Context';
import { socialData } from './SkillData';
import { FaRegHandPointRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Sidebar(){
    const {isOpen} = useContext(AppContext)
  return(
    <>
    <div className={`w-[100%] h-[52vh] lg:h-[92vh] bg-green-500 fixed top-[8vh]  z-20 left-0 ${isOpen ? 'flex': 'hidden'}`}>
        <div className='w-[50%] h-[100%] hidden lg:flex'>
            {socialData.map((item, index)=>(
                <div key={index} className='w-[25%] h-[100%] flex flex-col justify-between p-20' style={{backgroundColor:`${item.color}`}}>
                    <h1 className='font-mono text-black text-[20px] lg:text-[50px] rotate-90'>{item.title}</h1>
                    <a href={item.link} style={{fontSize:"45px"}}>{item.icon}</a>
                </div>
            ))}
        </div>
        <div className='w-[100%] lg:w-[50%]  flex flex-col items-center justify-center'>
            <ul className='font-mono text-2xl flex  flex-col  justify-around sm:text-5xl font-bold text-white cursor-pointer'>
                <Link to='/'>
                <li className='mt-10 flex'><FaRegHandPointRight className='mr-2'/>Home</li>
                </Link>
                <Link to='/work'>
                <li className='mt-10 flex'><FaRegHandPointRight className='mr-2'/>Work</li>
                </Link>
                <Link to='https://drive.google.com/file/d/1703gzYPshZ4_zOgsYxAwq-sp0YE-aNGU/view?usp=sharing'>
                <li className='mt-10 flex'><FaRegHandPointRight className='mr-2'/>Resume</li>
                </Link>
                <Link to='/form'>
                <li className='mt-10 flex'><FaRegHandPointRight className='mr-2'/>Contact Form</li>
                </Link>
            </ul>
        </div>
    </div>
    </>
  )
}
