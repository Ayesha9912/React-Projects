import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Register(){
    let [name, setname] = useState("")
    let [username, setusername] = useState("")
    let [password, setpassword] = useState("")
    let [confirmpassword, setconfirmpassword] = useState("")
    let dispatch = useDispatch()

    let register = () =>{
        dispatch({
            type: "REGISTER",
            payload: {
                id: (new Date).getTime(),
                name, username, password
            }
        })
    }
    return(
        <div>
            <div className="w-[400px] bg-[white] flex flex-wrap justify-around shadow-2xl py-10">
                <h1 className='text-xl font-[700] '>Register Form</h1>
                <input
                className='w-[90%] h-[35px] text-[gray] outline-none border-2 rounded-md mt-2 pl-2'
                    type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Name' />
                <input
                className='w-[90%] h-[35px] text-[gray] outline-none border-2 rounded-md mt-2 pl-2'
                    type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder='Username' />
                <input
                className='w-[90%] h-[35px] text-[gray] outline-none border-2 rounded-md mt-2 pl-2'
                    type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
                <input
                className='w-[90%] h-[35px] text-[gray] outline-none border-2 rounded-md mt-2 pl-2'
                    type="text" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} placeholder='Confirm Password' />
                <button
                className='w-[130px] h-[45px] rounded-3xl mt-5 bg-[black] text-[white] text-xl'
                onClick={register}>Create</button>
                <p className="text-md mt-3 text-center w-[100%]">do you have a account? 
                <Link to={"/"}>
                <span className='underline cursor-pointer'>log in</span>
                </Link>
                </p>
            </div>
        </div>
    )
}
