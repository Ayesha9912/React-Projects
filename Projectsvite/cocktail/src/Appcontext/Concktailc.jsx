import React, { useContext } from 'react'
import { AppContext } from './Contextc';

export default function Concktailc(){
    const {loading, cocktail} = useContext(AppContext) 
    if(loading){
        return <div className='loading'><div className='lod'></div></div>
    }
    if(cocktail.length < 1){
        return(
            <h1 className='text-center text-2xl mt-10'>
                No cocktail found according to your Research
            </h1>
        )
    }
  return(
    <div>
        <section className='w-[80%] m-auto mt-10'>
            <h1 className='text-4xl font-bold text-center mb-8'>CockTails</h1>
            <div className='w-full flex justify-center flex-wrap items-center gap-8'>
                {cocktail.map((item)=>(
                    <div key={id}
                    className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-200'>
                        <img src={item.image} alt={item.name} className='w-full h-48 object-cover'/>
                        <div className='p-4'>
                            <p className='text-xl font-semibold'>{item.name}</p>
                            <p className='text-gray-600'>{item.glass}</p>
                            <p className='text-gray-600'>{item.alcoholic}</p>

                            <button className='w-[100px] mt-6 bg-green-400 rounded-md cursor-pointer'>Deatils</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    </div>
  )
}
