import React, { useState } from "react";
import Person from "./Data";

export default function RandomPerson(){
  const [pro, setPro] = useState(Person[0]);
  const [info, setInfo] = useState("");
  const random = () =>{
    const randomPerson = Math.floor(Math.random() * Person.length);
    setPro(Person[randomPerson]);
    setInfo("");
  };
  const show = (information) =>{
    setInfo(pro[information]);
  };
  return(
    <>
      <div className="w-[90%] sm:w-[70%] lg:w-[40%] h-auto py-10 px-6 m-auto mt-10 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-purple-400 to-blue-500">
        <h1 className="text-center text-[40px] font-bold text-white mb-6">Random Person</h1>
        <img src={pro.image} alt="" className="w-[100px] h-[100px] m-auto rounded-full object-cover shadow-md"/>
        <h2 className="text-center text-[24px] font-semibold text-white mt-4">{pro.name}</h2>
        <h2 className="text-center text-[20px] font-medium text-gray-200 mt-2">{info}</h2>
        <div className="w-max m-auto mt-8">
        <button className="w-[140px] text-white text-[18px] bg-orange-600 hover:bg-orange-700 rounded-lg cursor-pointer py-2 px-4 transition-colors duration-300" onClick={random}>Random</button>
        </div>
        <div className="w-full flex justify-between items-center mt-16 bg-white py-6 rounded-lg shadow-inner">
          <button className="w-[18%] rounded-lg cursor-pointer text-white p-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300" onMouseEnter={() => show('mail')}>Mail</button>
          <button className="w-[18%] rounded-lg cursor-pointer text-white p-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300" onMouseEnter={() => show('phone')}>Phone</button>
          <button className="w-[18%] rounded-lg cursor-pointer text-white p-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300" onMouseEnter={() => show('age')}>Age</button>
          <button className="w-[18%] rounded-lg cursor-pointer text-white p-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300" onMouseEnter={() => show('address')}>Address</button>
          <button className="w-[18%] rounded-lg cursor-pointer text-white p-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300" onMouseEnter={() => show('password')}>Password</button>
        </div>
      </div>
    </>
  );
}
