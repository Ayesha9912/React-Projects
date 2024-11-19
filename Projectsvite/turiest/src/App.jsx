import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Checkout from "./Checkout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Tour from "./Tour";
function App() {
  const [loading, setloading] = useState(true);
  const loadingTimer = () => {
    let timer = setTimeout(() =>{
      setloading(false);
    }, 3000);
  };

  useEffect(() => {
    loadingTimer();
  }, []);
  if (loading){
    return(
      <>
        <main>
          <Loading/>
        </main>
      </>
    );
  }
  return(
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tour/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
        {/* <Tour/> */}
      </main>
    </>
  );
}

export default App;
