import React, { useEffect, useState } from 'react'
import Reviews from './Reviews'
import Loading from './Loading';

export default function App(){
  const [loading, setloading] = useState(true)
  const loadingFun = ()=>{
    let timer = setTimeout(() => {
        setloading(false)
     }, 3000);
  }
  useEffect(()=>{
    loadingFun()
  },[])
  if(loading){
    return(
      <>
      <main>
      <Loading/>
      </main>
      </>
    )
  }
  return(
    <>
    <Reviews/>
    </>
  )
}
