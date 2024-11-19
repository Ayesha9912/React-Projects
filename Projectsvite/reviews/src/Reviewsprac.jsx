import React, { useEffect, useState } from 'react'
import Data from './Data'

function Reviewsprac(){
  const [rev, setrev] = useState(Data);
  const [index, setindex] = useState(0)
  const randmVal = ()=>{
     let random = Math.floor(Math.random() * Data.length)
     setrev(Data[random])
    }
  useEffect(()=>{
    setrev(Data[index])
  }, [])
  const prev = ()=>{
    let previousIndex = index -1
    if(previousIndex < 0){
        previousIndex = Data.length -1
    }
    setindex(previousIndex)
    setrev(Data[previousIndex])
  }
  const next = ()=>{
     let nextIndex = index +1
     if(nextIndex >= Data.length){
        nextIndex = 0
     }
     setindex(nextIndex)
     setrev(Data[nextIndex])
  }
  return(
    <div>
        <div className='w-full bg-sky-500 h-[100vh]  flex justify-center items-center'>
            <div className='w-[60%] bg-white flex flex-col items-center rounded-md  p-5'>
                <img src={rev.image} alt={rev.name} className='w-24 h-24 rounded-full'/> 
                <h1 className='text-3xl text-center font-bold'>{rev.name}</h1>
                <p className='text-center font-medium'>{rev.post}</p>
                <p className='text-center font-medium'>{rev.review}</p>
                <div className='flex justify-evenly w-[50%] mt-4 items-center'>
                    <button onClick={prev} className='bg-red-500 text-white h-10 outline-none p-2 px-4 rounded-md'>Previous</button>
                    <button onClick={next} className='bg-red-500 text-white h-10 outline-none p-2 px-4 rounded-md'>Next</button>
                    <button onClick={randmVal} className='bg-red-500 text-white h-10 outline-none p-2 px-4 rounded-md'>Random</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Reviewsprac