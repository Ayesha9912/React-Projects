import React, { useState } from 'react'
import Values from 'values.js'
import Signalcolorprac from './Signalcolorprac'
function Appprac(){
    const [color, setcolor] = useState('')
    const [list, setlist] = useState(new Values('#f15025').all(10))
  const handleSubmit = (e)=>{
    e.preventDefault()
    const colors = new Values(color).all(10)
    console.log(colors , "colors");
    setlist(colors)
    setcolor('')
  }
  return(
    <div>
        <form action="submit"onClick={handleSubmit} className='flex mt-2'>
            <h1 className='text-3xl text-black font-bold'>Color Generator</h1>
            <input type="text"
            value={color}
            onChange={(e)=>setcolor(e.target.value)}
            className='w-[200px] h-10 border border-gray-500 rounded-sm ml-2'
            placeholder='#f15025'/>
            <button className='p-2 bg-sky-400 rounded-sm' type='submit'>Submit</button>
        </form>
        <div className='w-full h-auto flex flex-wrap justify-center mt-10'>
            {list.map((color, index)=>(
                <Signalcolorprac key={index} {...color} index={index} hexColor={color.hex}/>
            ))}
        </div>
    </div>
  )
}
export default Appprac