import React from 'react'
import Navbar from './Navbar'
import CocktailList from './CocktailList'
import SearchForm from './SearchForm'

export default function Home() {
  return (
    <>
    
    <div className='w-full'>
        <Navbar/>
        <SearchForm/>
        <CocktailList/>
    </div>
    
    </>
  )
}
