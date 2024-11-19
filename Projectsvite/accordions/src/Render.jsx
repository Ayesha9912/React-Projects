import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
export default function Render({ data }) {
  const [openindex, setopenindex] = useState(false);
  const toggleindex = () => {
    setopenindex(!openindex);
  };
  return(
    <>
      <div
        onClick={toggleindex}
        className="w-[90%]  cursor-pointer bg-white m-auto mt-2 p-2 border   border-black flex justify-between items-center flex-wrap"
      >
        {data.title}
        <div>{openindex ? <FaMinus /> : <FaPlus/>}</div>
        {openindex && <div className="mt-4"> {data.info} </div>}
      </div>
    </>
  );
}
