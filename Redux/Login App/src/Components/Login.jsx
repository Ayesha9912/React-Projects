import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Login() {

    let [name, setname] = useState("")
    let [password, setpassword] = useState("")

    let dispatch = useDispatch()

    let users = useSelector(state => state.users)
    let user = useSelector(state => state.user)

    let login = () => {
        let payload = users.find(user => user.username === name && user.password === password)
        console.log(payload);
        if (payload){
            dispatch({
                type: "LOGIN",
                payload
            })
            alert("successful")
        }
        else {
            alert("Wrong Password or User")
        }
    }
    let logout = () => {
        alert("Successfully Logout")
        dispatch({
            type: "LOGOUT",
        })
    }
    return(
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            {user ?
                <div className='w-[100%] h-[100vh] flex flex-col items-center justify-center'>
                    <p className="text-xl font-bold">username : {user.username}</p>
                    <button
                        className='w-[130px] h-[45px] rounded-3xl mt-5 bg-[black] text-[white] text-xl'
                        onClick={logout}>Logout</button>
                </div>
                :
                <>
                    <div className="w-[400px] bg-[white] flex flex-wrap justify-around shadow-2xl py-10">
                        <h1 className='text-2xl font-bold'>Log In Form</h1>
                        <input type="text"
                            className='w-[90%] h-[35px] text-[gray] outline-none border-2 rounded-md mt-2 pl-2'
                            value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter UserName' />
                        <input
                            className='w-[90%] h-[35px] text-[gray] outline-none border-2 rounded-md mt-2 pl-2'
                            type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter Password' />
                        <Link to={"/Register/"} className='w-[100%]'>
                            <p className="text-lg underline cursor-pointer mt-3 text-center">create account</p>
                        </Link>
                        <button
                            className='w-[130px] h-[45px] rounded-3xl mt-5 bg-[black] text-[white] text-xl'
                            onClick={login}>Login</button>
                    </div>
                </>
            }
        </div>
    )
}
