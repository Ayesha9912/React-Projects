import React, { useEffect, useState } from 'react'

function Signalcolorprac({hexColor, weight, rgb, index}){
    const [alert, setalert] = useState(false)
    let bcg = rgb.join(',')
    let hexValue = `#${hexColor}`
    useEffect(()=>{
    let timeout = setTimeout(() => {
        setalert(false)
    }, 3000);
    return ()=> clearInterval(timeout)
    },[alert])
  return(
    <div onClick={()=>{
        setalert(true)
        navigator.clipboard.writeText(hexValue)
    }} 
    className='w-[14%] h-[250px] flex justify-center flex-col items-center' style={{backgroundColor: `rgb(${bcg})`}}>
        <p className='text-blue-500'>{weight}%</p>
        <p className='text-blue-600'>{hexValue}</p>
        {alert && <p className='text-[grey] text-center'>COPIED TO CLIPBOARD</p>}
    </div>
  )
}
export default Signalcolorprac