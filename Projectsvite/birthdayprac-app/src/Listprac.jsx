import React from 'react'
import Data from './Data'

function Listprac({people}){
  return (
    <div>
        {people.map((people)=>{
            const {name,age, id, date, year, image , month} = people
            return(
                <div key={id} className='flex p-5'>
                    <img className='w-20 h-20 rounded-full' src={image} alt={name}/>
                    <div key={id} className='pl-2'>
                        <h1 className='font-mono font-bold text-xl'>{name}</h1>
                        <p>{age} Years</p>
                        <p>{date} {month} {year}</p>
                    </div>
                </div>
            )

        })}

    </div>
  )
}

export default Listprac