import React, { useContext } from 'react';
import {ThreeCircles } from 'react-loader-spinner';
import { AppContext } from './Context';
export default function Loading(){
  const { Loading } = useContext(AppContext)
  return(
    <div>
      <div className={`w-full bg-black h-[100vh] flex flex-col justify-center items-center`}>
        <ThreeCircles height="50"
          width="60"
          radius="9"
          color="green"/>
      </div>
    </div>
  )
}


