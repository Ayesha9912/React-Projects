import React, { useState } from 'react';
import Data from './Data';

export default function Tabs(){
  const categories = ['All', 'Breakfast', 'Lunch', 'Shake'];
  const [tab, settab] = useState(0);
  const filteredData = () =>{
    if (tab === 0){
      return Data;
    } else {
      return Data.filter(
        (item) => item.category.toLocaleLowerCase() === categories[tab].toLocaleLowerCase()
      );
    }
  };
  console.log(filteredData());
  return(
    <>
      <div className="w-full h-auto pb-40 bg-orange-300">
        <div className="w-[95%] h-[60px] m-auto flex justify-between items-center">
          {categories.map((ele, index) => {
            return(
              <button
                key={index}
                className={`w-[120px] rounded-[30px] cursor-pointer p-2 ${
                tab === index ? 'bg-[rgb(0,168,132)] text-white' : 'bg-white text-[rgb(0,168,132)]'
                }`}
                onClick={() => settab(index)}>
                {ele}
              </button>
            );
          })}
        </div>
        <div className="w-[95%] m-auto mt-5 flex justify-between items-center flex-wrap">
          {filteredData().map((item, idx) =>{
            return(
              <div key={idx} className="w-full sm:w-[48%] lg:w-[30%] mt-5 h-auto bg-white p-4 rounded-lg shadow-lg">
                <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
                  <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                </div>
                <p className="text-[18px] mt-2 font-medium">{item.name}</p>
                <p className="text-[17px]">
                  Category: <span className="text-red-500 font-medium">{item.category}</span>
                </p>
                <p className="text-[18px]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
