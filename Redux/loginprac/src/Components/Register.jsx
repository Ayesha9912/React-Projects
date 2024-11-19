import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Register(){
    const [name, setname] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    
    const dispatch = useDispatch()
    const register = (e)=>{
        e.preventDefault()
        console.log("Click");
        dispatch({
            type: 'REGISTER',
           payload: {
                id: (new Date).getTime(),
                name, 
                username, 
                password
            }
        })
        console.log(name, username, password);
    }
  return(
    <>
    <div className='w-full h-[100vh]  flex justify-center items-center'>
        <div className='w-[500px] h-[500px] flex-col flex items-center rounded-lg shadow-xl'>
            <h1 className='font-bold text-2xl mt-10'>Register Now</h1>
            <form className='w-[90%] mt-5 flex-col flex items-center'>
                <input type="text" value={name} onChange={(e)=> setname(e.target.value)}
                className='w-[90%] h-10 border  border-gray-500 pl-8 text-xl text-gray-700 rounded-md outline-none' placeholder='Enter your name'/>
                <input type="text" value={username} onChange={(e)=> setusername(e.target.value)}
                className='w-[90%] h-10 border  border-gray-500 pl-8 mt-5 text-xl text-gray-700 rounded-md outline-none' placeholder='Enter your username'/>
                <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)}
                className='w-[90%] h-10 border  border-gray-500 pl-8 mt-5 text-xl text-gray-700 rounded-md outline-none' placeholder='Enter password'/>
                <input type="password" value={confirmPassword} onChange={(e)=> setconfirmPassword(e.target.value)}
                className='w-[90%] h-10 border  border-gray-500 pl-8 mt-5 text-xl text-gray-700 rounded-md outline-none' placeholder='Confirm Password'/>
            <p className='mt-10 font-bold'>Already Registered  
            <Link to ='/login'>
            <span className='underline'>Login</span>
            </Link>
            </p>
            <button onClick={register} className='mt-10 bg-black text-white font-bold w-[80%] h-10 rounded-md'>Submit Now</button>
            </form>
        </div>
    </div>
    </>
  )
}
export default Register