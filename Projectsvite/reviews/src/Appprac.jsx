import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Reviews from './Reviews'
import Reviewsprac from './Reviewsprac'
function Appprac(){

    const [loading, setloading] = useState(true)

    const loadingFun = ()=>{
        setTimeout(()=>{
            setloading(false)
        },3000)
    }
    useEffect(()=>{
        loadingFun()
    },[])

    if(loading){
        return(
            <div>
                <Loading/>
            </div>
        )
    }

  return(
    <div>
        <Reviewsprac/>
    </div>
  )
}

export default Appprac