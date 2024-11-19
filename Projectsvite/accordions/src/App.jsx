import React, { useEffect, useState } from "react";
import Data from "./Data";
import Render from "./Render";
function App(){
  return(
    <>
      <div className="w-full h-auto pb-80   bg-black p-1">
        <div className="w-[60%] mt-24 p-4 rounded-lg bg-white m-auto">
          {Data.map((ele, index) => {
            return(
              <>
               <Render data={ele}/>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
