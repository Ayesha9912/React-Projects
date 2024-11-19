import React, { useEffect, useState } from "react";

import { Data } from "./Data";
// import { json } from "react-router-dom";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

export default function Tour() {
  let getData = localStorage.getItem("Data") ? JSON.parse(localStorage.getItem("Data")): [];
  const [arr, setArr] = useState(getData);
  const [readmore, setreadmore] = useState(false);
  const [showModel, setshowModal] = useState(false)
  const [data, setdata] = useState(Data);
  const [name, setname] = useState();
  const [totalPeople, setTotalPeople] = useState();
  const [country, setCountry] = useState();
  const [days, setDays] = useState();

  const handelShowModel = ()=>{
    setshowModal(true);
  }
  const handelCancelModel = ()=>{
    setshowModal(false);
  }
  const Nameinp = (e)=>{
    setname(e.target.value);
  }
  const Peopleinp =(e)=>{
    setTotalPeople(e.target.value)
  }
  const Countryselect =(e)=>{
    setCountry(e.target.value)
  }
  const Daysinp =(e)=>{
    setDays(e.target.value)
  }
  const addDetail =()=>{
    setArr([...arr, {names: name, totalPeoples: totalPeople, countires: country, dayss: days}]);
    setshowModal(false);
    setname('');
    setTotalPeople('');
    setDays('')
  }
  const removeTour = (id)=>{
    const updateData =  data.filter((tour) =>tour.id !== id);
    setdata(updateData)
  }
  useEffect(()=>{
      localStorage.setItem('Data', JSON.stringify(arr))
  });
  return(
    <>
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg shadow-lg">
  <div className="title">
    <h2 className="text-white text-center text-3xl font-bold mb-8">
      OUR TOURS
    </h2>
  </div>
  {data.map((items) => (
    <div key={items.id} className="bg-white rounded-lg p-6 shadow-md mb-8">
      <img className="w-full h-64 object-cover rounded-lg" src={items.image} alt={items.name} />
      <footer className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-800 text-2xl font-semibold">{items.name}</h2>
          <h2 className="text-gray-800 text-2xl font-semibold">Price: ${items.price}</h2>
        </div>
        <p className="text-gray-700 mt-4">
          {readmore ? items.info : `${items.info.substring(0, 150)}...`}
          <button className="text-blue-500 ml-2" onClick={() => setreadmore(!readmore)}>
            {readmore ? 'show less' : 'show more'}
          </button>
        </p>
        <div className="flex mt-6 space-x-4">
          <Button className="bg-red-500 border border-red-500 h-[40px] text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300" onClick={() => removeTour(items.id)} >
            Not Interested
          </Button>
          <Button className="bg-blue-500 h-[40px] border border-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={handelShowModel}>
            I'M Interested
          </Button>
          <Link to={'/checkout'}>
          <Button className="bg-green-500 h-[40px] border border-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
            Checkout
          </Button>
          </Link>
        </div>
        <Modal title="Basic Modal" open={showModel} onCancel={handelCancelModel}>
          <div className="mt-6">
            <input
              placeholder="Name"
              value={name}
              onChange={Nameinp}
              type="text"
              className="border mt-3 border-gray-300 outline-none p-2 w-full rounded-md"
            />
            <input
              placeholder="Number"
              value={totalPeople}
              onChange={Peopleinp}
              type="number"
              className="border mt-3 border-gray-300 outline-none p-2 w-full rounded-md"
            />
            <li className="mt-3">
              <select className="w-full h-10 border border-gray-300 rounded-md" onChange={Countryselect}>
                <option>Select Country</option>
                <option value={1995}>Paris</option>
                <option value={3895}>Ireland</option>
                <option value={1995}>Vienna</option>
                <option value={2095}>Rome</option>
                <option value={2595}>Poland</option>
              </select>
            </li>

            <li className="mt-3">
              <select className="w-full h-10 border border-gray-300 rounded-md" onChange={Daysinp}>
                <option>Length of Days</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
              </select>
            </li>
          </div>
          <button className="w-32 h-10 mx-auto bg-black text-white mt-6 rounded-md hover:bg-gray-800 transition duration-300" onClick={addDetail}>
            Add Here
          </button>
        </Modal>
      </footer>
    </div>
  ))}
</section>

    </>
  );
}
