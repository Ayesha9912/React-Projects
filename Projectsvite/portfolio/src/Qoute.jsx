import React, {useEffect} from 'react'
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import 'aos/dist/aos.css'
import Aos from 'aos';
import bg from './assets/quote.c952ddc0c1361baa3c77.png'
export default function Qoute(){
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 500,
          easing: 'ease-in-out',
          delay: 400,
          transition: 300,
        })
      }, [])
  return(
    <>
    <div className='w-full h-auto p-10 bg-black flex justify-center items-center'>
        <div className='w-[100%] lg:w-[50%] p-10  border-4 border-green-500 bgimg relative' data-aos = 'zoom-in'>
            <h1 className='text-green-500 font-bold text-3xl leading-10 font-mono'>Putting continous Efforts and Struggle keep your destination harder to defeat</h1>
            <FaQuoteRight className='absolute  md:bottom-[-30%] right-[3%] text-green-500 size-24'/>
            <FaQuoteLeft className='absolute top-[-18%] md:top-[-30%] left-[3%] text-green-500 size-24'/>
        </div>
    </div>
    </>
  )
}
