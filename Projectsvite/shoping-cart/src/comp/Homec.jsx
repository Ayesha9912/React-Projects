import React, { useReducer, useState } from 'react'
import Data from '../Data'
import Navbarc from './Navbarc'
import Sidebarc from './Sidebarc'
import { FaMinus, FaPlus } from 'react-icons/fa'
const initialState = {
  cart: Data
}
const reducer = (state, action) =>{
  if(action.type === "CLEAR_CART"){
    return{
      ...state, cart: []
    }
  }
  else if (action.type === 'REMOVE_CART'){
    return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
  }
  else if (action.type === 'increment'){
    let tempCart = state.cart.map((cart) =>{
      if (cart.id === action.payload){
        return { ...cart, amount: cart.amount + 1 }
      }
      return cart
    })
    return { ...state, cart: tempCart }
  }
  else if(action.type === 'decrement'){
    let tempCart = state.cart.map((cart) =>{
      if (cart.id === action.payload){
        return { ...cart, amount: cart.amount - 1 }
      }
      return cart
    })
    return { ...state, cart: tempCart }
  }
  else{
    return state
  }
}
export default function Usereducer(){
  const [state, dispatch] = useReducer(reducer, initialState)
  const [sidebar, setsidebar] = useState(false)
  const Clear_Cart = () =>{
    dispatch({ type: 'CLEAR_CART' })
  }
  const Remove_Cart = (id) =>{
    dispatch({ type: 'REMOVE_CART', payload: id })
  }
  const increase = (id) =>{
    dispatch({ type: 'increment', payload: id })
  }
  const decrease = (id) =>{
    dispatch({ type: 'decrement', payload: id })
  }
  const sidebarOpen = () =>{
    setsidebar(true)
  }
  const sidebarClose = () =>{
    setsidebar(false)
  }
  return(
    <>
      <section className='w-full'>
        <Navbarc sidebarOpen={sidebarOpen}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {state.cart.map((item)=>{
            return(
              <div key={item.id} className='bg-white rounded-lg shadow-md p-4 overflow-hidden'>
                <img src={item.img} alt={item.title} className='w-full h-[350px] object-cover mb-4' />
                <p className='text-gray-900 font-semibold text-lg mb-2'>{item.title}</p>
                <div className='flex justify-between items-center'>
                  <p className='flex text-gray-700 mb-2'>${item.price}</p>
                  <div className='flex items-center space-x-3'>
                    <div className='flex justify-center items-center bg-[red] text-white cursor-pointer rounded-full w-10 h-10' onClick={() => decrease(item.id)}>
                      <FaMinus/>
                    </div>
                    <span className='text-center text-[red] w-10 h-10 rounded-full flex items-center justify-center bg-red-300'>{item.amount}</span>
                    <div className='flex justify-center items-center bg-[green] text-white cursor-pointer rounded-full w-10 h-10' onClick={() => increase(item.id)}>
                      <FaPlus/>
                    </div>
                  </div>
                </div>
                <div className='w-max m-auto mt-7'>
                  <button onClick={()=> Remove_Cart(item.id)} className='bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-500 transition duration-300'>Remove</button>
                </div>
              </div>
            )
          })}
        </div>
        <div className='w-max mt-9 mx-auto'>
          <button onClick={Clear_Cart} className='w-[200px] text-white font-medium bg-red-600 px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-300'>Clear All</button>
        </div>
        <Sidebarc cart={state.cart} sidebar={sidebar} sidebarClose={sidebarClose}/>
      </section>
    </>
  )
}


