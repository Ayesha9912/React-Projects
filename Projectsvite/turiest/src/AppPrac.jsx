import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TourPrac from './TourPrac'
import Checkoutprac from './Checkoutprac'
import { useEffect } from 'react'
import LoadingPrac from './LoadingPrac'

function AppPrac(){
    const [loading, setloading] = useState(true)
    const loadingFun = ()=>{
        setTimeout(function(){
          setloading(false)
        },3000)
    }
    useEffect(()=>{
        loadingFun()
    },[])
    if(loading){
        return(
            <main>
                <LoadingPrac/>
            </main>
        )
    }
  return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<TourPrac/>}></Route>
            <Route path='/checkoutprac' element={<Checkoutprac/>}></Route>
        </Routes>
        
        </BrowserRouter>
        

    </div>
  )
}

export default AppPrac