import React from 'react'

import Data from './Data'
import { useState } from 'react'


export default function App() {

  const [text, settext] = useState([]);
  const [count, setcount] = useState(0)

  const handelInput =(e)=>{
    e.preventDefault();
    
    let amount = parseInt(count)

    if(count <= 0){
      amount = 0
    }
    if(count > 8){

      amount = 8
    }
    settext(Data.slice(0, amount))
  }

  return (
    <>
    
  <section className="w-full h-auto bg-black  p-4 flex flex-col justify-center">

  <h1 className="text-center text-[35px] font-bold text-white drop-shadow-md">Tired of Boring Lorem Ipsum</h1>

  <form onSubmit={handelInput} className="flex justify-center mt-7 space-x-2">
    <input 
      name="amount" 
      id="amount" 
      value={count} 
      onChange={(e) => setcount(e.target.value)} 
      type="number"  
      className="w-[300px] rounded-l-md h-[45px] pl-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
    />
    <button 
      className="h-[45px] px-5 bg-orange-500 hover:bg-orange-600 rounded-r-md text-white font-semibold transition-colors duration-300"
    >
      Generate
    </button>
  </form>
</section>
  <article className="w-100 m-auto bg-[grey] p-6  shadow-md">
    {text.map((item, index) =>(
      <p className="text-white mt-4  text-center text-[18px] leading-relaxed" key={index}>{item}</p>
    ))}
  </article>
    </>
  )
}
