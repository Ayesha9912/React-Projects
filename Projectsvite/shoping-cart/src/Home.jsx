import React, { useReducer, useState } from 'react';
import Data from './Data';
import { FaPlus, FaMinus } from "react-icons/fa";
import Sidebar from './Sidebar'
import Navbar from "./Navbar"
const initialState = {
  cart: Data,
};
const reducer = (state, action) => {
  console.log("state: ", state, "action: ", action);
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  else if (action.type === "REMOVE_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload)
    };
  }
  else if (action.type === 'increment') {
    let tempCart = state.cart.map((cartItem) =>{
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  else if (action.type === 'decrement') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  else {
    return state;
  }
}
// Component
export default function Usereducer(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sidebar, setsidebar] = useState(false);
  const Clear_Cart = () => {
    dispatch({ type: "CLEAR_CART" });
  }
  const remove_Cart = (id) => {
    dispatch({ type: 'REMOVE_CART', payload: id });
  }
  const increase = (id) => {
    dispatch({ type: 'increment', payload: id });
  }
  const decrease = (id) => {
    dispatch({ type: 'decrement', payload: id });
  }
  // Sidebar Functions
  const sidebarOpen = () =>{
      setsidebar(true)
  }
  const sidebarClose = ()=>{
      setsidebar(false)
  }
  return(
    <>
      <section className="w-full px-4">
      <Navbar sidebarOpen={sidebarOpen}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.cart.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-[350px] object-cover mb-4" />
              <p className="text-gray-900 font-semibold text-lg mb-2">{item.title}</p>
              <div className='flex justify-between items-center'>
                <p className="text-gray-700 mb-2">${item.price}</p>
                <div className='flex items-center space-x-3'>
                  <div className='flex items-center justify-center bg-[red] text-white cursor-pointer rounded-full w-10 h-10' onClick={() => decrease(item.id)}>
                    <FaMinus/>
                  </div>
                  <span className='text-center text-[red] w-10 h-10 flex items-center justify-center rounded-full bg-red-300'>{item.amount}</span>
                  <div className='flex items-center justify-center bg-[green] text-white cursor-pointer rounded-full w-10 h-10' onClick={() => increase(item.id)}>
                    <FaPlus/>
                  </div>
                </div>
              </div>
              <div className='w-max m-auto mt-7'>
                <button onClick={() => remove_Cart(item.id)} className='bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out'>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className='w-max mt-9 mx-auto'>
          <button onClick={Clear_Cart} className='w-[200px] text-white font-medium bg-red-600 px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out'>Clear All</button>
        </div>
    <Sidebar cart={state.cart} sidebar={sidebar} sidebarClose={sidebarClose} />
      </section>
    </>
  );
}
