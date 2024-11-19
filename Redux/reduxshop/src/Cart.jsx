import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveCart , Increment , Decrement } from './Action/Index'

export default function Cart(){
    let cart = useSelector(state=> state.cart)
    let dispatch = useDispatch()

    let removeHandle = (id)=> {dispatch(RemoveCart(id))}
    let Incrementhandle = (id)=> {dispatch(Increment(id))}
    let Decrementhandle = (id)=>{ dispatch(Decrement(id))}
  return(
    <div>
        <div className='w-full'>
            <ul>
                {cart.map(item =>(
                    <li key={item.id} className='flex justify-between p-20 items-center'>
                        <div>
                            <p className='text-black font-bold text-3xl'>{item.name}</p>
                            <p className='font-mono'>${item.price.toFixed(2)} x {item.quantity}</p>
                        </div>
                        <div className='flex gap-x-5 items-center'>
                            <button onClick={()=> Incrementhandle(item.id)} className='bg-red-500 p-5 rounded-full font-bold'>+</button>
                            <p className='font-bold'>{item.quantity}</p>
                            <button onClick={()=> Decrementhandle(item.id)} className='bg-blue-500 p-5 rounded-full font-bold'>-</button>
                            <button onClick={()=> removeHandle(item.id)} className='bg-green-500 p-2 rounded'>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
