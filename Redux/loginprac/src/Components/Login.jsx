import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Login(){
  const [logname, setlogname] = useState("")
  const [logpassword, setlogpassword] = useState("")
  let users = useSelector(state => state.users)
  let user = useSelector(state=> state.user)
  console.log(user, "user");
  let dispatch = useDispatch()
  const login = () => {
    let payload = users.find(item => item.name === logname && item.password === logpassword)
    console.log(payload, "payload");
    if (payload){
      dispatch({
        type: 'LOGIN',
        payload
      })
      alert("Successful Login")
    }
    else{
      alert("Invalid Credentials")
    }
  }
  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }
  return(
    <>
      {user ? (
        <div key={user.id} className='w-full flex flex-col h-[100vh] justify-center items-center'>
          <button onClick={logout} className='text-white bg-black w-[150px]  rounded-lg p-3'>Logout</button>
          <p className='text-black font-bold'>username: {user.name}</p>
        </div>
      )
        :
        (<div className='w-full h-[100vh] flex justify-center items-center'>
          <div className='w-[500px] h-[500px] flex flex-col items-center rounded-xl shadow-lg'>
            <h1 className='text-black font-bold'>LogIn</h1>
            <form  className='mt-10 flex flex-col items-center'>
              <input type="text" value={logname} onChange={(e) => setlogname(e.target.value)}
                className='w-[90%] h-10 border  border-gray-500 pl-8 mt-5 text-xl text-gray-700 rounded-md outline-none' placeholder='Enter your username' />
              <input type="password" value={logpassword} onChange={(e) => setlogpassword(e.target.value)}
                className='w-[90%] h-10 border  border-gray-500 pl-8 mt-5 text-xl text-gray-700 rounded-md outline-none' placeholder='Enter password' />
                <p className='text-black font-bold mt-10'>Don't have account
                  <Link to={'/'}>
                  <span className='underline'>Register First</span>
                  </Link> 
                </p>
                <button onClick={login} className='px-10 py-5 rounded-lg mt-10 bg-black text-white'>LogIn</button>
            </form>
          </div>
        </div>)
      }
    </>
  )
}
export default Login