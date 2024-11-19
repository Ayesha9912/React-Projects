import React, {useState,useEffect} from 'react';
function Checkoutprac(){
  const [storedata, setData] = useState([])
  console.log("click");
  useEffect(()=>{
    const  storedata = localStorage.getItem("Datax")
    if(storedata){
      setData(JSON.parse(storedata))
    }
  },[]);
  return(
    <>
      <div className='bg-gradient-to-r from-purple-400 to-red-400 rounded-md  p-8 shadow-lg'>
        {storedata && 
        storedata.map((item, index)=>(
            <div key={index} className='my-8 w-[95%] bg-white p-6 rounded-lg shadow-md'>
               <img  className='rounded-lg h-64 object-cover mb-4'
               src="https://c4.wallpaperflare.com/wallpaper/990/102/542/flags-life-countries-world-map-wallpaper-preview.jpg" 
               alt="flag"/>
               <h2 className='text-center font-extrabold text-gray-800 mb-4'>Customer Deatils</h2>
               <div className='text-lg space-y-2'>
               <h3><span className='font-semibold text-gray-700'>Name:</span>{item.name}</h3>
               <h3><span className='font-semibold text-gray-700'>Persons:</span>{item.totalPeople}</h3>
               <h3><span className='font-semibold text-gray-700'>Pricing per Person:</span>{item.countries}</h3>
               <h3><span className='font-semibold text-gray-700'>Days:</span>{item.days}</h3>
               <h3><span className='font-semibold text-gray-700'>Total Amount for</span>{item.totalPeople} People: <span>${item.totalPeople * item.countries}</span></h3>
               </div>
            </div>
        ))}
      </div>
    </>
  )
}
export default Checkoutprac;