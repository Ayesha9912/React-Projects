import React, { useEffect, useState } from 'react'
import { Data } from './Data';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

function Tour(){
    let getData = localStorage.getItem("Datatour") ? JSON.parse(localStorage.getItem("Datatour")): [];
    const [arr, setArr] = useState(getData)
    const [data, setdata] = useState(Data)
    const [read, setread] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [name, setname] = useState('')
    const [people, setpeople] = useState('')
    const [country, setcountry] = useState('')
    const [days, setdays] = useState('')
    const showModal = () => {
        setIsModal(true);
    };
    const handleCancel = () =>{
        setIsModal(false);
    };
    const nameinput = (e)=>{
        setname(e.target.value)
    }
    const peopleinput = (e)=>{
        setpeople(e.target.value)
    }
    const countriesinput = (e)=>{
        setcountry(e.target.value)
    }
    const daysinput = (e)=>{
        setdays(e.target.value)
    }
    const addData = ()=>{
        setArr([...arr, {name:name, people:people, country:country, days:days}])
        setIsModal(false);
        setname('')
        setpeople('')
        setcountry('')
        setdays('')
    }
    useEffect(() =>{
        localStorage.setItem("Datatour", JSON.stringify(arr))
    }, [arr])
    return(
        <div>
            <div className='bg-sky-400 w-full h-auto'>
                <div className='bg-gradient-to-r from-pink-500 to-purple-400 rounded-md w-[50%] m-auto p-5'>
                    {data.map((item, index) =>{
                        return (
                            <div key={index} className='bg-white rounded-md mt-5'>
                                <div className='h-[300px] w-full'>
                                    <img src={item.image} className='w-[100%] h-[100%] object-cover' alt={item.name} />
                                </div>
                                <div className='flex flex-col pl-5'>
                                    <h1 className='text-2xl font-bold'>{item.name}</h1>
                                    <div>
                                        <p>{read ? item.info : (item.info.substring(0, 150))}</p>
                                        <button className='text-sky-500 font-bold outline-none' onClick={() => setread(!read)}>{read ? 'showless' : 'showmore'}</button>
                                    </div>
                                    <footer>
                                        <div className='flex p-5'>
                                            <Button className='bg-red-500 text-white'>Not Interested</Button>
                                            <Button className='bg-red-500 text-white' onClick={showModal}>Interested</Button>
                                            <Link to={'/checkout'}>
                                                <Button className='bg-red-500 text-white'>CheckOut</Button>
                                            </Link>
                                        </div>
                                        <Modal title="Basic Modal" open={isModal} onCancel={handleCancel} className='flex'>
                                            <input type="text"
                                            value={name}
                                            onChange={nameinput}
                                            className='h-10 pl-2 w-full border border-gray-600 mt-3'
                                            placeholder='Enter Name'/>
                                            <input type="number"
                                            value={people}
                                            onChange={peopleinput}
                                            className='h-10 pl-2 w-full border border-gray-600 mt-3'
                                            placeholder='Enter number of people'/>
                                            <select className='h-10 pl-2 w-full mt-3 border border-gray-600' onChange={countriesinput}>
                                                <option>Select a country</option>
                                                <option value={1995}>poland</option>
                                                <option value={2395}>Armenia</option>
                                                <option value={3495}>Palestine</option>
                                                <option value={1995}>India</option>
                                            </select>
                                            <select className='h-10 pl-2 w-full border mt-3 border-gray-600' onChange={daysinput} >
                                                <option >Select Number of Days</option>
                                                <option value={2}>2</option>
                                                <option value={6}>6</option>
                                                <option value={9}>9</option>
                                                <option value={7}>7</option>
                                            </select>
                                            <Button className='mt-3' onClick={addData}>Add here</Button>
                                        </Modal>
                                    </footer>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Tour;
