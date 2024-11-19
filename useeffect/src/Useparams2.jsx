import React from 'react'
import Home2 from './Components2/Home2'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Profile2 from './Components2/Profile2'
function Useparams2(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home2/>}></Route>
                <Route path='/profile/:id' element={<Profile2/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Useparams2