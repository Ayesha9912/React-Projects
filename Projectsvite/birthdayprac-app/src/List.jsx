import React from 'react'

function List({people}){
  return (
    <div>
        {people.map((person)=>{
            const {id, age, name, date, month, year, image}= person
            return(
                <div>

                    <article key={id} className='flex items-center mt-2'>
                        <img src={image} alt={name} className='w-[80px] h-[80px] rounded-full'/>
                        <div key={id} className='ml-3'>
                            <h4 className='font-bold'>{name}</h4>
                            <p>{age}years</p>
                            <p>{date} {month} , {year}</p>
                        </div>
                    </article>
                </div>
            )
        })}
    </div>
  )
}

export default List