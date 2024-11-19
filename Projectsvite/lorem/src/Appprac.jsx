import React, { useState } from 'react'
import Data from './Data'

function Appprac(){
    const [text, settext] = useState([])
    const [count, setcount] = useState(0)

    const handleinput = (e)=>{
        e.preventDefault()
        let amount = parseInt(count)

        if(count <= 0){
            amount =0
        }
        if(count >  8){
            amount = 8
        }
        settext(Data.slice(0, amount))
        console.log(text);
    }
  return(
    <div>
        <section className='w-full h-auto bg-black p-4 flex flex-col justify-center'>
            <h1 className='text-white font-bold text-2xl'>Tired of Boring lorem Ipsum</h1>
            <form onSubmit={handleinput} className='flex justify-center mt-7 space-x-2'>
                <input type="text"
                name='amount'
                id='amount'
                value={count}
                onChange={(e)=>setcount(e.target.value)}
                placeholder='0'
                className='w-[300px] border border-gray-600 pl-2 h-[45px] focus:ring-2 focus:ring-sky-400 focus:outline-none '/>
                <button className='h-[45px] px-5 bg-orange-500 hover:bg-orange-600 rounded-r-md text-white font-semibold transition-colors duration-300'>Generate</button>
            </form>
        </section>
        <article className='w-100 m-auto bg-[grey] p-6 shadow-md'>
            {text.map((item, index)=>(
                <p key={index} className='text-white mt-4 text-center text-[18px] leading-relaxed'>{item}</p>
            ))}
        </article>
    </div>
  )
} 

export default Appprac