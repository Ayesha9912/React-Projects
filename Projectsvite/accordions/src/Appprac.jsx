import React from 'react'
import Data from './Data'
import Renderprac from './Renderprac'
function Appprac(){
  return(
    <div>
        <div className='w-full h-[100vh] flex justify-center items-center bg-black'>
            <div className='w-[70%] bg-white rounded-md p-3'>
            {Data.map((ele, index)=>{
                return(
                    <Renderprac data={ele}/>
                )
            })}
            </div>
        </div>
    </div>
  )
}
export default Appprac

// import React from 'react'
// import Data from './Data'
// import Renderprac from './Renderprac'

// function Appprac(){
//   return(
//     <div>
//       {Data.map((ele, index)=>{
//         return(
//           <Renderprac data={ele}/>
//         )
//       })}

//     </div>
//   )
// }

// export default Appprac