import React, { useState } from 'react'
import Data from './Data'
function Tabsprac2(){
   const [tabs, settabs] = useState(0)
   const categories = [
    "All", "Lunch", "Breakfast", "Shakes"
   ]
   const filteredData = ()=>{
    if(tabs === 0){
        return Data
    }
    else{
        return Data.filter((items)=> items.category.toLocaleLowerCase === categories[tabs].toLocaleUpperCase)
    }
   }
  return(
    <div>
        <div className='flex justify-evenly items-center'>
        {categories.map((item , index)=>{
            return(
            <button className={`bg-red-500 text-white font-bold ${ tabs === index? 'bg-sky-400': 'bg-green-500'}`} onClick={()=> settabs(index)}>{item}</button>
            )
        })}
        </div>
        <div className='bg-white flex flex-wrap p-5'>
            {filteredData().map((ele, index)=>{
                return(
                    <div key={index}>
                        <div className='w-full'>
                            <img src={ele.image} alt={ele.name}/>
                        </div>
                        <p>{ele.category}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default Tabsprac2;