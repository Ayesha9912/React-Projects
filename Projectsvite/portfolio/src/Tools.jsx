import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Data } from './SkillData';


export default function Tools(){
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 500,
          easing: 'ease-in-out',
          delay: 400,
          transition: 300,
        })
      }, [])
    
  return (
    <div className='w-full bg-black h-auto pb-10 p-8 flex flex-col items-center pt-10'>
        <div className='w-56 h-16 border-4 border-green-500 rounded-md flex justify-center items-center' data-aos='flip-right'>
            <h1 className='font-mono text-green-500 font-bold text-3xl'>Tools Kit</h1>
        </div>
        <div className='w-[100%] lg:w-[50%] flex justify-evenly flex-wrap items-center  h-auto p-5 gap-y-5 mt-10 rounded-md  bg-green-500 transition duration-300' data-aos='zoom-in-up'>
            {Data.map((item , index)=>{
                let {icon , skill} = item
                return(
                <div key={index} className='px-8 py-4 flex justify-around bg-black rounded-md items-center'>
                    <div className='text-green-500 text-xl mr-2'>
                    {icon}
                    </div>
                    <p className='text-white font-bold font-mono'>{skill}</p>
                    
                </div>
                )
            })}

        </div>

    </div>
  )
}
