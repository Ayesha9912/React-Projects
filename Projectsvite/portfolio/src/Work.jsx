import React from 'react'
import Navbar2 from './Navbar2'
import {projects} from './SkillData'

export default function Work(){
  return (
    <>
      <Navbar2 />
      <div className='w-full bg-black pb-10 mt-[8vh] pt-10'>
        <h1 className='text-green-500 font-bold font-mono text-center text-5xl'>My Projects</h1>
        <div className='grid mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5'>
          {projects.map((ele, index)=>{
            return(
              <div key={index} className='border'>
                 <a key={index} href={ele.url}>
                   <img src={ele.image} alt={ele.title} />
                 </a>
              </div>
            )
          })}
        </div>




      </div>
    </>
  )
}
