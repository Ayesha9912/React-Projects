import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCart } from './Action/Index'
const ProductList = [
    { id: 1, name: "Product 1", price: 200 },
    { id: 2, name: "Product 2", price: 400 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 100 }
]
export default function Productlist(){
    let dispatch = useDispatch()
    let handleAddCart = (product) =>{
        dispatch(AddCart(product))
        // console.log(handleAddCart);
    }
    return(
        <>
            <h1 className='font-bold text-3xl text-center'>Product List</h1>
            <div className='w-full flex justify-evenly mt-10'>
                {ProductList.map(product => {
                    return (
                        <div key={product.id} className='rounded-md shadow-xl justify-center p-20'>
                            <h1 className='text-2xl text-center align-text-bottom'>{product.id}</h1>
                            <h2 className='text-2xl text-center text-bold'>{product.name}</h2>
                            <p className='text-xl '>Price: {product.price}</p>
                            <button onClick={() => handleAddCart(product)} className='p-5 mt-10 bg-red-500 rounded-md'>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

