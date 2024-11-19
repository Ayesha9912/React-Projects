import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainprofile from './Components/Mainprofile';
function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/><Route/>
        <Route path='/Mainprofile/:id' element={<Mainprofile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
