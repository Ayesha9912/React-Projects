import React, { useContext } from 'react'
import { AppContext } from './Context'
import { Link } from 'react-router-dom'

function Cocklist(){
    const { loading, cocktail } = useContext(AppContext)
    // console.log(cocktail);
    if (loading) {
        return <div className='w-full h-[100vh] flex justify-center items-center'><div className='w-10 h-10 border-4 border-gray-800 rounded-full animate-spin transition duration-300 relative'>
        <div className='w-10 h-10 bg-white rounded-full absolute top-0 right-5'></div>
    </div> </div>
    }
    if (cocktail.length < 1){
        return (
        <h1 className='font-bold text-2xl text-center mt-10'>No searchItem is displayed here</h1>
        )
    }
    return(
        <div className='w-full flex flex-wrap gap-x-8 gap-y-8  justify-center mt-10'>
            {cocktail.map((item) =>{
                return(
                    <div key={item.id} className='w-[80%] sm:w-[70%] md:w-[45%] lg:w-[30%] xl:w-[18%] bg-white shadow-xl border rounded-md hover:scale-105 transition duration-300'>
                        <img src={item.image} alt={item.name} />
                        <div className='w-full pl-3'>
                        <h1 className='font-bold text-2xl mt-5'>{item.name}</h1>
                        <p>{item.alcholic}</p>
                        <p>{item.Glass}</p>
                        <Link to={`/cocktail/${item.id}`}>
                        <button className='p-3 rounded-md mb-10 mt-5 bg-green-700 text-white border-none'>Add Deatils</button>
                        </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cocklist