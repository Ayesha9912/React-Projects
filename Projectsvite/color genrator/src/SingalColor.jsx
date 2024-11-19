import React, { useEffect, useState } from 'react'
export default function SingalColor({ rgb, weight, hexColor}){
    const [alert, setalert] = useState(false)
    let bcg = rgb.join(',');
    console.log(bcg);
    const hexValue = `#${hexColor}`
    useEffect(()=>{
        let timeout = setInterval(()=>{
            setalert(false)
        }, 3000)
        return ()=> clearTimeout(timeout)
    }, [alert])
    return(
    <>
    <div onClick={() =>{
        setalert(true)
        navigator.clipboard.writeText(hexValue)
        }} 
        className='w-[14.282%] h-[220px]' style={{backgroundColor: `rgb(${bcg})`}}>
            <p className='text-[blue] p-2'>{weight}%</p>
            <p className='text-[blue] pl-2'>{hexValue}</p>
            {alert && <p className='text-[grey] text-center'>COPPIED TO CLIPBORD</p>}
        </div>
    </>
  )
}
