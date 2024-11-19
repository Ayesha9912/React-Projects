import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SignUp from './Signup';
import LogIn from './Login';
export default function Navbar() {
  const [showForm, setShowForm] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() =>{
    const storedData = JSON.parse(localStorage.getItem('signUpData'));
    const storedUsername = localStorage.getItem('username');
    if (storedUsername){
      setUsername(storedUsername);
    } else if (storedData){
      setShowForm('');
    } else{
      setShowForm('signup-login');
    }
  }, []);

  const handleSignUpComplete = (username)=>{
    setShowForm('');
    setUsername(username);
    localStorage.setItem('username', username);
  };
  const handleLogInClick = () =>{
    setShowForm('login');
    setErrorMessage('');
  };
  const handleLogInComplete = (username) => {
    setShowForm('');
    setUsername(username);
    localStorage.setItem('username', username);
  };
  const handleLogInError = (message) =>{
    setErrorMessage(message);
  };
  return(
    <>
      <div className='bg-[rgb(16,16,16)] p-2 px-5 z-10 flex justify-between items-center rounded-md'>
        <div className='w-max flex justify-between items-center text-[rgb(167,167,167)] text-[25px] '>
          <IoIosArrowBack className='cursor-pointer hover:text-white transform duration-300 ' />
          <IoIosArrowForward className='cursor-pointer hover:text-white transform duration-300 ml-2 ' />
        </div>
        <div className='flex justify-between items-center'>
          {username ? (
            <button
              className='text-white rounded-[30px] w-[120px] p-2 cursor-default'
              disabled
            >
              {username}
            </button>
          ) : (
            <>
              {showForm === 'signup-login' && (
                <>
                  <button
                    className='text-black hover:scale-[1.05] rounded-[30px] w-[120px] p-2 bg-white'
                    onClick={() => setShowForm('signup')}
                  >
                    Sign Up
                  </button>
                  <button
                    className='text-black hover:scale-[1.05] rounded-[30px] w-[120px] p-2 bg-white'
                    onClick={handleLogInClick}
                  >
                    Log in
                  </button>
                </>
              )}
              {showForm !== 'signup-login' && (
                <button
                  className='text-black hover:scale-[1.05] rounded-[30px] w-[120px] p-2 bg-white'
                  onClick={handleLogInClick}
                >
                  Log in
                </button>
              )}
            </>
          )}
        </div>
      </div>
      {showForm === 'signup' && <SignUp onSignUp={handleSignUpComplete} />}
      {showForm === 'login' && <LogIn onLogIn={handleLogInComplete} onError={handleLogInError} />}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </>
  );
}
