import React, { useState } from 'react'
import Data from './Data'
function Tabsprac(){
    const categories = ['All', 'Breakfast', 'Lunch', 'Shake']
    const [tab, settab] = useState(0);
    const filteredData = () =>{
        if (tab === 0){
            return Data;
        }
        else{
            return Data.filter(
                (item) => item.category.toLocaleLowerCase() === categories[tab].toLocaleLowerCase()
            )
        }
    }
    return(
        <div className='bg-pink-500 m-auto w-full h-auto p-10'>
            <div className='flex w-[70%] m-auto justify-evenly p-5 items-center'>
                {categories.map((item, index) => (
                    <button key={index} className={`w-[120px] h-10 bg-sky-500 text-white font-bold rounded-xl ${tab === index ? 'bg-sky-600' : 'bg-sky-500'
                    }`}onClick={() => settab(index)}>{item}</button>
                ))}
            </div>
            <div className='w-[100%] lg:w-[80%] bg-white p-10 mt-5 m-auto rounded-md flex gap-5 flex-wrap'>
                {filteredData().map((ele, idx) =>{
                    return(
                        <div key={idx} className='w-full sm:w-[48%] lg:w-[30%] mt-5 h-auto p-3 bg-white rounded-lg shadow-lg'>
                            <div className='w-full h-[300px] overflow-hidden rounded-t-lg'>
                                <img src={ele.image} alt="image" className='w-full h-full object-cover'/>
                            </div>
                            <p className='text-[18px] mt-2 font-medium'>{ele.name}</p>
                            <p className='text-[17px]'>Category:<span className='text-red-500 font-medium'>{ele.category}</span></p>
                            <p className='text-[18px]'>{ele.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Tabsprac