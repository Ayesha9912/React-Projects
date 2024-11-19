import React from 'react';
import { Triangle } from 'react-loader-spinner';
export default function Contact(){
    return(
        <>
            <div className='w-full bg-black p-10 flex justify-center items-center'>
                <div className='w-52 rounded-md h-20 border-4 border-green-500 cursor-pointer flex justify-center items-center'>
                    <h1 className='text-green-500 font-mono font-bold text-2xl'>Contct Me</h1>
                    <Triangle height="50"
                        width="50"
                        radius="9"
                        color="green" />
                </div>
            </div>

        </>
    )
}
