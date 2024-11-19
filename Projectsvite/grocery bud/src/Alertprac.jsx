import React, { useEffect } from 'react';

function Alertprac({msg , type, removeAlert, list}){
    useEffect(()=>{
        const timeout = setTimeout(()=>{
           removeAlert()
        }, 3000)
        return ()=> clearInterval(timeout)
    }, [removeAlert, list])
  return(
    <div>
        <p className={`text-white text-center  alert alert-${type}`}>{msg}</p>
    </div>
  )
}
export default Alertprac