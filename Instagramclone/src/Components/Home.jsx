import React from 'react'
import Sidebar from './Sidebar'
import Profiles from './Profiles'
import Header from './Header'
import Footer from './Footer'

function Home(){
  return(
    <div>
        <Header/>
        <Sidebar/>
        <Profiles/>
        <Footer/>
    </div>
  )
}
export default Home