import React, { useReducer, useState } from 'react'
import { RemoveCart, ClearCart, increment, decrement } from './State/Action'
import { initailState, reducer } from './State/Reducer'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Data from './Data'
import { FaPlus, FaMinus } from "react-icons/fa";
export const UseReucer = () => {
    const [ state, dispatch ] = useReducer(reducer, { ...initailState, cart: Data })
    const [isSidebar, setisSidebar] = useState(false)
    let handleClear = ()=> dispatch(ClearCart())
    let handleRemove = (id)=> dispatch(RemoveCart(id))
    let handleIncrement = (id)=> dispatch(increment(id))
    let handleDecrement = (id)=> dispatch(decrement(id))
    const handleOpen = () => {
        setisSidebar(true)
    }
    const handleClose = () => {
        setisSidebar(false)
    }
    return(
        <>
        <section className="w-full px-4">
        <Navbar sidebarOpen={handleOpen}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.cart.map((item) =>(
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-[350px] object-cover mb-4" />
              <p className="text-gray-900 font-semibold text-lg mb-2">{item.title}</p>
              <div className='flex justify-between items-center'>
                <p className="text-gray-700 mb-2">${item.price}</p>
                <div className='flex items-center space-x-3'>
                  <div className='flex items-center justify-center bg-[red] text-white cursor-pointer rounded-full w-10 h-10' onClick={() => handleDecrement(item.id)}>
                    <FaMinus />
                  </div>
                  <span className='text-center text-[red] w-10 h-10 flex items-center justify-center rounded-full bg-red-300'>{item.amount}</span>
                  <div className='flex items-center justify-center bg-[green] text-white cursor-pointer rounded-full w-10 h-10' onClick={() => handleIncrement(item.id)}>
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className='w-max m-auto mt-7'>
                <button onClick={() => handleRemove(item.id)} className='bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out'>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className='w-max mt-9 mx-auto'>
          <button onClick={handleClear} className='w-[200px] text-white font-medium bg-red-600 px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out'>Clear All</button>
        </div>
        <Sidebar cart={state.cart} sidebar={isSidebar} sidebarClose={handleClose} />
      </section>

        </>
    )

}



