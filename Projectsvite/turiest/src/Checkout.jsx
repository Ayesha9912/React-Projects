import React, { useEffect, useState } from "react";
export default function Checkout(){
  const [storedata, setData] = useState([]);
  useEffect(() =>{
    const storedata = localStorage.getItem("Data");
    if (storedata){
      setData(JSON.parse(storedata));
    }
  }, []);
  return(
    <>
     <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  p-8 shadow-lg">
  {storedata &&
    storedata.map((item, index) =>(
      <div key={index} className="my-8 w-[95%] m-auto bg-white p-6 rounded-lg shadow-md ">
        <img
          className="rounded-lg w-full h-64 object-cover mb-4"
          src="https://c4.wallpaperflare.com/wallpaper/990/102/542/flags-life-countries-world-map-wallpaper-preview.jpg"
          alt="Customer"
        />
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-4">Customer Details</h2>
        <div className="text-lg space-y-2">
          <h3><span className="font-semibold text-gray-700">Name:</span> {item.names}</h3>
          <h3><span className="font-semibold text-gray-700">Persons:</span> {item.totalPeoples}</h3>
          <h3><span className="font-semibold text-gray-700">Pricing Per Person:</span> ${item.countires}</h3>
          <h3><span className="font-semibold text-gray-700">Days:</span> {item.dayss}</h3>
          <h3>
            <span className="font-semibold text-gray-700">Total Amount for {item.totalPeoples} People:</span> $
            {item.totalPeoples * item.countires}
          </h3>
        </div>
      </div>
    ))}
</div>
    </>
  );
}
