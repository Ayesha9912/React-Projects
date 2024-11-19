import React from 'react'
import {socialData} from './SkillData'
export default function Socialicons(){
  return(
    <>
    <div className='w-full flex bg-black flex-wrap'>
        {socialData.map((item , index)=>{
            console.log("item: ", item);
            return(
                <a href={item.url} key={index} className={`w-[50%] md:w-[25%] h-[20] p-3 md:p-10 text-white flex items-center cursor-pointer`} style={{backgroundColor:`${item.color}`}}>
                    <a href={item.url} className=' text-[18px]  sm:text-xl lg:text-5xl'>{item.icon}</a>
                    <h1 className='ml-4 text-[18px] sm:text-xl lg:text-4xl font-mono'>{item.title}</h1>
                </a>
            )
        })}
    </div>
    </>
  )
}
