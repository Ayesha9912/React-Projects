import React, { useEffect, useState } from 'react'


function Markprac(){
    const [inp, setinp] = useState("")
    const [result, setresult] = useState("")
    useEffect(()=>{
        console.log(inp);
        setresult(inp)
        console.log(result);
    }, [inp])
  return (
    <div className='flex justify-center flex-col items-center'>
        <textarea value={inp} onChange={(e)=> setinp(e.target.value)}
        className='w-[550px] h-[250px] m-auto mt-5 border border-gray-500 p-2 shadow-lg' placeholder='Enter something here'></textarea>
        <div className='w-[550px] rounded-lg mt-10 h-auto p-10 bg-white shadow-lg'><p>{result}</p></div>
    </div>
  )
}

export default Markprac