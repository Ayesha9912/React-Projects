import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from './Context'
function Header(){
const {setsearchItem} = useContext(AppContext)
 const input = useRef("")
 useEffect(()=>{
    input.current.focus()
 })
 const searchCocktail = (e)=>{
    setsearchItem(input.current.value)
    e.preventDefault()
 }
  return(
    <div>
        <div className='w-[90%] lg:w-[50%] h-40 shadow-xl m-auto mt-2 flex flex-col justify-evenly items-center'>
            <h1 className='font-bold text-2xl md:text-3xl'>Search Cocktail By name</h1>
            <input type="text" className='w-[80%] border pl-2 h-12 rounded-md focus:outline-none border-blue-700' placeholder='Enter a Letter...' ref={input} onChange={searchCocktail}/>
        </div>
    </div>
  )
}
export default Header