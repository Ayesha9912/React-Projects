import React, { useEffect, useState } from 'react'
import Data from './Data'
import { data } from 'autoprefixer'

function Randomperson(){
    const [people, setpeople] = useState(Data[0])
    const [information, setinformation] = useState("")

    const handleRandom = ()=>{
        const random = Math.floor(Math.random () * Data.length)
        console.log(random);
        setpeople(Data[random])
    }
    const setValue = (information)=>{
        setinformation(people[information])
    }

  return(
    <div className='flex justify-center items-center'>
    <div className='w-[650px] h-[500px] mt-10 bg-gradient-to-t from-sky-500 to-red-500 rounded-md flex flex-col items-center'>
    <h1 className='text-2xl text-white text-center mt-2'>Person Data</h1>
    <div className='w-28 h-28 rounded-full shadow-xl border border-blue-500'>
        <img src={people.image} alt={people.name} className='w-full h-full rounded-full'/>
    </div>
    <h1 className='text-2xl text-white font-bold'>{people.name}</h1>
    <p className='text-xl text-white'>{information}</p>
    <button className='w-[200px] h-14 rounded-lg bg-red-600 text-white mt-2' onClick={handleRandom}>Random</button>

    <div className='w-[90%] h-20 bg-sky-700 rounded-md mt-10 flex justify-evenly'>
        <button className='p-3 bg-pink-500 rounded-md h-10 text-white mt-5' onMouseEnter={()=>setValue("age")}>Age</button>
        <button className='p-3 bg-pink-500 rounded-md h-10 text-white mt-5' onMouseEnter={()=>setValue("phone")}>Phone</button>
        <button className='p-3 bg-pink-500 rounded-md h-10 text-white mt-5' onMouseEnter={()=>setValue("mail")}>Email</button>
        <button className='p-3 bg-pink-500 rounded-md h-10 text-white mt-5' onMouseEnter={()=>setValue("password")}>Passowrd</button>
        <button className='p-3 bg-pink-500 rounded-md h-10 text-white mt-5' onMouseEnter={()=>setValue("address")}>Address</button>
    </div>
    </div>
    </div>
  )
}

export default Randomperson