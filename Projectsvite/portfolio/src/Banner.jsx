import React, {useEffect} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import img from './assets/index.89d3119228d600788910.svg'
import { RotatingSquare } from 'react-loader-spinner';
import dev from './assets/download.svg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Navbar';
export default function Banner(){
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-out',
      delay: 400,
      transition: 300,

    })
  }, [])
  const [text] = useTypewriter({
    words: [" Fronted Developer", " Ayesha", " Coder", " Programmer"],
    loop: true,
    delaySpeed: 2000,
  })
  return(
    <>
      <div className='w-full bg-black h-[100vh] flex justify-center items-center relative'>
        <img src={img} alt="img" className='w-[100%] h-[100%] object-cover' />
        <div className='absolute top-0 left-0 w-[100%] h-[100%] flex flex-col'>
          <Navbar/>
          <div className='w-full h-[80vh] mt-[20vh]  lg:flex items-center justify-between lg-mt-[20vh]'>
            <div className='flex pl-10 lg:pl-20 flex-col w-[100%] lg:w-[40%] transition duration-300' data-aos='fade-right'>
              <div className='w-[250px] h-14 rounded-md bg-green-400 opacity-90 relative'>
                <div className='absolute top-0 left-0 w-[100%] h-[100%] flex p-2 items-center'>
                  <RotatingSquare height="50"
                    width="50"
                    radius="9"
                    color="black"/>
                  <h1 className='font-mono text-xl text-white font-bold'>Hi! I am Ayesha</h1>
                </div>
              </div>
              <h1 className='text-[30px] lg:text-[50px] text-white font-bold mt-2'>Meet
                <span className='text-green-500 font-bold'>{text}</span>
                <span className='text-white'><Cursor/></span>
              </h1>
              <p className='font-mono font-bold text-xl lg:text-2xl text-white mt-2'>I am a Fronted engineer with proper hands-on practice onmore than 100+ projects. Recognized as a practical and effective developer.</p>
            </div>
            <div className='w-[100%] md:w-[60%] lg:w-[40%] pr-10 lg:pr-20 mt-10 lg:mt-0 transition duration-300' data-aos='fade-left'>
              <img src={dev} alt="dev" className='w-[100%]'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
