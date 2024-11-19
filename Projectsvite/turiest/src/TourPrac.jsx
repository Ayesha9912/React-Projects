import React, { useEffect } from 'react'
import {Data} from './Data'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
function TourPrac(){
  let getData = localStorage.getItem("Datax") ? JSON.parse(localStorage.getItem("Datax")) : [];
  const [arr, setArr] = useState(getData)
  const [readmore, setreadmore] = useState(false)
  const [showModel, setshowModel] = useState(false)
  const [data, setdata] = useState(Data)
  console.log(data);
  const [name, setname] = useState()
  const [totalPeople, settotalPeople] = useState()
  const [country, setcountry] = useState()
  const [days, setdays] = useState()
  const handelShowModel = ()=>{
    setshowModel(true)
  }
  const handelCancelModel = ()=>{
    setshowModel(false)
  }
  const Nameinp = (e)=>{
    setname(e.target.value)
  }
  const totalPeopleInput = (e)=>{
    settotalPeople(e.target.value)
  }
  const countryselect = (e)=>{
    setcountry(e.target.value)
  }
  const daysinput = (e)=>{
    setdays(e.target.value)
  }
  const addDetails = ()=>{
    setArr([...arr, {name:name, totalPeople: totalPeople, countries:country, days:days}])
    setshowModel(false)
    console.log("click");
    setname('')
    settotalPeople('')
    setdays('')
    setcountry('')
  }
  const removeTour = ()=>{
     const updateData = data.filter((tour)=> tour.id !== id)
     setdata(updateData)
  }
  useEffect(()=>{
    localStorage.setItem("Datax", JSON.stringify(arr))
  },[])
  return(
    <div>
      <section className='max-w-4xl  mx-auto p-8 mt-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg'>
        <div className='title'>
          <h2 className='text-white text-center text-3xl font-bold mb-8'>
            Our Tours
          </h2>
        </div>
        {data.map((items)=>{
          return(
          <div key={items.id} className='bg-white rounded-md p-6 shadow-md mb-8'>
            <img src={items.image} alt={items.name} className='w-full  h-64 object-cover rounded-lg'/>
            <footer className='mt-6'>
              <div className='flex justify-between items-center'>
                <h2 className='text-gray-700 text-2xl font-semibold'>{items.name}</h2>
                <h2 className='text-gray-700 text-2xl font-semibold'>Price: ${items.price}</h2>
              </div>
              <p className='text-gray-700 mt-4'>
                {readmore ? items.info : `${items.info.substring(0, 150)}...`}
                <button className='text-sky-500 font-semibold' onClick={()=>setreadmore(!readmore)}>
                  {readmore? 'show less' : 'show more'}
                </button>
              </p>

              <div className='flex mt-6 space-x-4'>
                <Button className='bg-red-500 border border-red-500 h-[40px] text-white font-semibold px-4 py-1 rounded-md hover:bg-red-600 transition duration-300' onClick={()=>removeTour(items.id)}>
                  Not Interested
                </Button>
                <Button className='bg-blue-500 border border-blue-500 h-[40px] text-white font-semibold px-4 py-1 rounded-md hover:bg-blue-600 transition duration-300' onClick={handelShowModel}>
                  IM Interestd
                </Button>
                <Link to={'/checkoutprac'}>
                <Button className='bg-green-500 border border-green-500 h-[40px] text-white font-semibold px-4 py-1 rounded-md hover:bg-green-600 transition duration-300'>
                  CheckOut
                </Button>
                </Link>
              </div>
              <Modal title="Basic Model" open={showModel} onCancel={handelCancelModel}>
               <div className='mt-6'>
                <input type="text"
                value={name}
                onChange={Nameinp}
                className='border pl-1 mt-3 border-gray-300 outline-none w-full rounded-md h-10'
                placeholder='Name'/>
                <input type="text"
                value={totalPeople}
                onChange={totalPeopleInput}
                className='border pl-1 mt-3 border-gray-300 outline-none w-full rounded-md h-10'
                placeholder='Enter number of people'
                />
                <li className='mt-3'>
                  <select className='border mt-3 border-gray-300 outline-none  rounded-md w-full h-10'
                   onChange={countryselect}>
                    <option>Select a Country</option>
                    <option value={1995}>Paris</option>
                    <option value={3895}>Ireland</option>
                    <option value={2095}>Rome</option>
                    <option value={2595}>Poland</option>
                   </select>
                </li>
                <li>
                  <select className='border mt-3 border-gray-300 outline-none  rounded-md w-full h-10'
                  onChange={daysinput}>
                    <option>Length of Days</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                  </select>
                </li>
               </div>
               <button className='w-32 h-10 mx-auto bg-black text-white mt-6 rounded-md hover:bg-gray-800 transition-none duration-300' onClick={addDetails}>
                Add here
               </button>
              </Modal>
            </footer>
          </div>
          )
        })}

      </section>

    </div>
  )
}

export default TourPrac