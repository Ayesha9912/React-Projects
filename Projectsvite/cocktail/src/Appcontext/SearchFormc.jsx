import React, { useContext, useEffect } from 'react'
import { AppContext } from './Contextc'


export default function SearchFormc(){
    const {searchTerm} = useContext(AppContext)
    const searchValue = useRef('')

    useEffect(()=>{
     searchValue.current.focus()
    },[])
    const searchCocktail = ()=>{
        setsearchTerm(searchValue.current.value) 
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return(
    <div>
        <div className='w-[80%] sm:w-[60%] m-auto mt-10 bg-white p-6 rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold text-center mb-4 text-gray-700'>Search Your Favorite Cocktail</h2>
                <input type="text"
                className='w-full h-12 p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                placeholder='Enter cocktail name...'
                ref={searchValue}
                onChange={searchCocktail}/>
            </form>
        </div>
    </div>
  )
}
