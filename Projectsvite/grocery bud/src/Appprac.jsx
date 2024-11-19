import React, { useEffect, useState } from 'react';
import Alertprac from './Alertprac';
import Listprac from './Listprac';
const getLocalStorage = () =>{
    const list = localStorage.getItem('listprac')
    if(list){
        return JSON.parse(list)
    }
    else{
        return [];
    }
};
function Appprac(){
    const [list, setlist] = useState(getLocalStorage())
    const [inp, setinp] = useState('')
    const [isediting, setIsediting] = useState(false)
    const [editId, seteditId] = useState(null)
    const [alert, setalert] = useState({ show: false, msg: '', type: '' })
    const submit = (e) =>{
        console.log("click");
        e.preventDefault()
        if (!inp.trim()){
            setalert({ show: true, msg: "Fill the blanks first", type: "danger" })
        }
        else if (isediting){
            setlist(
                list.map((item) =>{
                    if (item.id === editId){
                        return { ...item, title: inp }
                    }
                    return item;
                })
            )
            setinp("")
            seteditId(null)
            setIsediting(false)
            showAlert({ show: true, msg: "value changed", type: "success" })
        }
        else{
            const newitem = { id: new Date().getTime().toString(), title: inp }
            console.log(newitem);
            setlist([...list, newitem]);
            setinp("")
            showAlert({ show: true, msg: "value added", type: "success" })
        }
    }
    const showAlert = ({ show = false, msg = "", type = "" }) => {
        setalert({ show, msg, type })
    }
    const editbtn = (id) =>{
        const specificItem = list.find((item) => item.id === id)
        setIsediting(true)
        seteditId(id)
        setinp(specificItem.title)
    }
    const removeItem = (id) => {
        setlist(list.filter((item) => item.id !== id))
        showAlert({ show: true, msg: "Item removed", type: "danger" })
    }
    useEffect(() =>{
        localStorage.setItem("listprac", JSON.stringify(list))
    }, [list])
    return(
        <>
            <section className='w-[700px] m-auto mt-20 rounded-md h-auto p-3 pb-8 bg-black'>
                {alert.show && <Alertprac {...alert} list={list} removeAlert={showAlert} />}
                <h1 className='text-center text-xl font-bold text-white'>Grocery Bud</h1>
                <div className='w-[90%] m-auto flex mt-4 flex-wrap'>
                    <input type="text"
                        value={inp}
                        onChange={(e) => setinp(e.target.value)}
                        placeholder='e.g egg'
                        className='w-[85%] p-2 pl-3 outline-none rounded-l-md' />
                    <button className='w-[15%] rounded-r-md bg-sky-400' onClick={submit}>
                        {isediting ? "Edit" : "Submit"}
                    </button>
                    <Listprac list={list} editbtn={editbtn} removeItem={removeItem}/>
                </div>
            </section>
        </>
    )
}
export default Appprac;
