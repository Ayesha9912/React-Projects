import React, { useEffect } from 'react'

function Alertprac2(type,msg, showAlert, list){
    useEffect(()=>{
        let timeout = setInterval(() =>{
            showAlert()
        }, 3000);
        return ()=>clearInterval(timeout);
    }, [list, showAlert])
  return (
    <div>
        <p className='text-white'>{msg}</p>
    </div>
  )
}

export default Alertprac2