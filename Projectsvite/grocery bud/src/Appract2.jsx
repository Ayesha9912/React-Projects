import React, { useEffect, useState } from 'react'
import Listprac2 from './Listprac2'
import Alertprac2 from './Alertprac2'

const getLocalStorage = ()=>{
    const list = localStorage.getItem("Datas")
    console.log(list);
    if(list){
       return JSON.parse(list)
    }
    else{
       return []
    }
}
function Appract2(){
    const [list, setlist] = useState(getLocalStorage())
    const [alert, setalert] = useState({show:false, msg:"", type:""})
    const [isediting, setisediting] = useState(false)
    const [editId, seteditId] = useState(null)
    const [inp, setinp] = useState("")
    const submit = (e)=>{
        e.preventDefault()
        if(!inp.trim()){
        showAlet({show:true, msg:"fill the blank", type:'danger'})
        }
        else if(isediting){
            setlist(list.map((item)=>{
                if(item.id === editId){
                    return {...item, title:inp}
                }
                return item
            }))
            setinp("")
            setisediting(false)
            seteditId(null)
            showAlet({show:true, msg:"Value Changed", type:"success"})
        }
        else{
            const newlist = {id: new Date().getTime(), title:inp}
            console.log(newlist);
            setlist([...list, newlist])
            console.log(list);
            setinp("")
           showAlet({ show: true, msg: "Item added to the list", type: "success" });
        }
    }
    const showAlet = ({show=true, msg= '', type=''})=>{
        setalert({show, msg, type})
    }
    const editbtn = (id)=>{
     let specificItem =  list.find((item)=> item.id === id)
        setisediting(true)
        seteditId(id)
        setinp(specificItem.title)
    }
    const removebtn = (id)=>{
        setlist(list.filter((item)=> item.id !== id))
        showAlet({show: true, msg: "item remove", type: "info"})
    }
    useEffect(()=>{
        localStorage.setItem("Datas", JSON.stringify(list))
    }, [list])
  return(
    <div>
        <div className='w-[40%] p-5 h-auto bg-black rounded-md m-auto flex flex-col'>
            {alert.show && <Alertprac2 {...alert} showAlert= {showAlet}  list={list}/> }
            <h1 className='text-white text-center text-3xl'>Grocery Bud</h1>
            <form>
                <input type="text"
                value={inp}
                onChange={(e)=>setinp(e.target.value)}
                placeholder='e.g egg'
                className='w-[80%] m-auto border border-gray-600 pl-2'
                />
                <button type='submit' onClick={submit} className='p-2 bg-sky-400'>
                    {isediting ? "Edit": "Submit"}
                </button>
            </form>
                <Listprac2 list={list} editbtn={editbtn} removebtn={removebtn}/>
        </div>
    </div>
  )
}
export default Appract2