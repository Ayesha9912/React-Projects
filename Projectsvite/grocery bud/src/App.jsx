import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
// import { list } from "postcss";
const  getLocalStorage  = ()=>{
 const list =  localStorage.getItem('list')
  if(list){
      return JSON.parse(list)
  }
  else{
      return [];
  }
};
export default function App(){
  const [inp, setinp] = useState("");
  const [list, setlist] = useState(getLocalStorage());
  const [editing, setediting] = useState(false);
  const [editId, seteditId] = useState(null);
  const [alert, setalert] = useState({ show: false, msg: "", type: "" });
  const submit = (e) =>{
    e.preventDefault();
    if (!inp.trim()){
      showAlert({
        show: true,
        msg: "Please fill in the blank",
        type: "danger",
      });
    } else if (editing){
      setlist(
        list.map((item) =>{
          if (item.id === editId){
            return { ...item, title: inp };
          }
          return item;
        })
      );
      setinp("");
      seteditId(null);
      setediting(false);
      showAlert({ show: true, msg: "Value changed", type: "success" });
    } else {
      const newItem = { id: new Date().getTime().toString(), title: inp };
      setlist([...list, newItem]);
      setinp("");
      showAlert({ show: true, msg: "Item added to the list", type: "success" });
    }
  };
  const showAlert = ({ show = false, msg = "", type = "" }) => {
    setalert({ show, msg, type });
  };
  const editbtn = (id) =>{
    const specificItem = list.find((item) => item.id === id);
    setediting(true);
    seteditId(id);
    setinp(specificItem.title);
  };
  const removeItem = (id) => {
    setlist(list.filter((item) => item.id !== id));
    showAlert({ show: true, msg: "Item removed", type: "danger" });
  };
  useEffect(() =>{
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return(
    <>
      <section className="w-[700px] m-auto mt-20 rounded-md h-auto p-3 pb-8 bg-black">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h1 className="text-center text-[30px] font-bold text-white">
          Grocery Bud
        </h1>
        <div className="w-[90%] m-auto flex mt-4 flex-wrap">
          <input
            value={inp}
            placeholder="e.g eggs"
            type="text"
            className="w-[85%] p-2 pl-3 outline-none rounded-l-md"
            onChange={(e) => setinp(e.target.value)}
          />
          <button
            className="w-[15%] rounded-r-md bg-[rgb(165,213,248)]"
            onClick={submit}
          >
            {editing ? "Edit" : "Submit"}
          </button>
          <List list={list} editbtn={editbtn} removeItem={removeItem}/>
        </div>
      </section>
    </>
  );
}
