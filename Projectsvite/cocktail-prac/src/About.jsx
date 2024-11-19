import React from 'react'
import Navbar from './Navbar'
function About(){
  return(
    <div>
      <Navbar/>
      <div className='w-full'>
        <h1 className='text-5xl text-center mt-10 font-bold'>About Us</h1>
        <p className='text-center mt-5 font-semibold w-[90%] lg:w-[60%] m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores nostrum cum nesciunt ullam aliquid, a totam, ratione sit veniam nisi nihil ipsa, neque obcaecati facere sequi et! Aspernatur, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio, quod soluta, reiciendis placeat illo veritatis eum fugiat a voluptate expedita sit alias officia rerum.</p>
      </div>

    </div>
  )
}
export default About