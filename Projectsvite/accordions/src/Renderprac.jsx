import React, { useState } from 'react'
import { FaMinus , FaPlus } from 'react-icons/fa6'
function Renderprac({data}){
    const [openindex, setopenindex] = useState(false)
    const toggleIndex = ()=>{
        setopenindex(!openindex)
    }
  return(
    <div onClick={toggleIndex} className='w-[80%] cursor-pointer bg-white m-auto flex justify-between items-center p-2 flex-wrap'>
    <h1 className='font-bold text-xl'>{data.title}</h1>
    <div>{openindex ? <FaMinus/> : <FaPlus/>}</div>
    {openindex &&
      <div className='mt-4'>{data.info}</div> 
    }
    </div>
  )
}
export default Renderprac


// import React, { useState } from 'react'

// function Renderprac({data}){
//   const [open, setopen] = useState(false)
//   const toggle = ()=>{
//     setopen(!open)
//   }
//   return(
//     <div onClick={toggle}>
//       {data.title}
//       <div> 
//       {open ? <FaMinus/> : <FaPlus/>}
//       </div>
//       {open &&  <div>{data.info}</div>}
//     </div>
//   )
// }

// export default Renderprac