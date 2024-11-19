import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function Listprac2({list , editbtn , removebtn}){
  return(
    <div>
        <div>
            {list.length > 0 ? (list.map((item)=>{
                return(
                    <div key={item.id} className='flex justify-between items-center'>
                        <p>{item.title}</p>
                        <div className='flex'>
                            <button className='text-blue-700' onClick={()=>editbtn(item.id)}><FaEdit/></button>
                            <button className='text-red-600' onClick={()=> removebtn(item.id)}><FaTrash/></button>
                        </div>
                    </div>
                )
            })) :(
                <div>
                    <p>No items in the list</p>
                </div>                
            )}
        </div>
        
    </div>
  )
}

export default Listprac2