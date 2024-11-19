import React from 'react'
import Navbar from './Appcontext/Navbar'

function About(){
  return (
    <div>
        <Navbar/>
    <div className='w-full mt-20 flex justify-center items-center flex-col'>
        <h1 className='font-bold text-[50px]'>About Us</h1>
        <p className='text-[18px] w-[60%] text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequuntur quam quidem nam officiis neque nulla laudantium ullam dolorum quisquam maiores ratione fugiat, tempora commodi necessitatibus. Nam recusandae sequi laboriosam animi.
        </p>
    </div>
    </div>
  )
}
export default About