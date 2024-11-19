import React, { useEffect, useState } from 'react'
import Loginc from './Loginc'
import Signupc from './Signupc';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export default function Navbarc() {
    const [showForm, setshowForm] = useState('')
    const [userName, setuserName] = useState('')
    const [errormsg, seterrormsg] = useState('')
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("storedData"))
        const username = JSON.parse(localStorage.getItem("name"))
        if (username) {
            setuserName(username)
        }
        else if (storedData) {
            setshowForm('')
        }
        else {
            setshowForm('signup-login')
        }
    }, [])

    const handleLogInClick = ()=>{
        setshowForm('login')
        seterrormsg('')
    }
    const handleLogInComplete = (username)=>{
        setshowForm('')
        seterrormsg(username)
        localStorage.setItem("name", username)
    }
    const handleLogInError = (massgae)=>{
        seterrormsg(massgae)
    }
    return(
        <>
        <div className='w-full bg-gray-800 h-16 p-5 flex justify-between items-center'>
          <div className='flex'>
            <IoIosArrowBack className='text-white font-bold'/>
            <IoIosArrowForward className='text-white font-bold'/>
            </div>
            <div className='flex justify-between items-center'>
            {userName ? (
                <button className='text-white bg-none font-bold'>
                 {userName}
                </button>
            ):(
                <>
                {showForm === 'signup-login' &&(
                    <>
                    <button className='text-black hover:scale-[1.1] rounded-[30px] w-[120px] p-2 bg-white'
                    onClick={()=> setshowForm('signup')}
                    >
                        Sign Up
                    </button>
                    <button className='text-black hover:scale-[1.1] rounded-[30px] w-[120px] p-2 bg-white'>
                        Log In
                    </button>
                    </>
                )}
              {showForm !== "signup-login" && (
                <button className='text-black' onClick={handleLogInClick}>
                    LogIn
                </button>
              )}
                </>
            )}
            </div>
        </div>
        {showForm === 'signup' && <Signupc onSignIn={handleLogInComplete} />}
        {showForm === 'login' && <Loginc onLogIn={handleLogInError}/>}
        {errormsg && <div className='text-red-500'>{errormsg}</div>}
        </>
    )
}
