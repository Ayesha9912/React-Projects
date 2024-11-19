import React, { useState } from 'react';
import Data from './Data';
export default function Darkmood() {
  const [dark, setDark] = useState(false);
  const [info, setInfo] = useState(Data);
  const darkMode = () =>{
    setDark(!dark);
  };
  return(
    <>
      <div className={`w-full min-h-screen flex flex-col items-center justify-center ${dark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <button
          className={`w-[120px] p-2 cursor-pointer rounded-md  ${dark? 'bg-white text-black': 'bg-black text-white'}`}
          onClick={darkMode}
        >
        {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="w-[300px] h-auto mt-5">
          {info.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg shadow-lg ${dark ? 'bg-gray-800' : 'bg-white'}`}>
              <img className='w-[100px] h-[100px] rounded-full mx-auto mb-4' src={item.image} alt={item.name} />
              <p className="text-center font-semibold text-lg mb-2">{item.name}</p>
              <p className="text-center">{item.age}</p>
              <p className="text-center">{item.email}</p>
              <p className="text-center">{item.ethnicity}</p>
              <p className="text-center">{item.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
