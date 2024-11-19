import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Logosection from './Logosection'
import Centerone from './Centerone'
import Centertwo from './Centertwo'
import Centerthree from './Centerthree'
import Gridlayout from './Gridlayout'
import Pricing from './Pricing'
import Faqs from './Faqs'
import Footer from './Footer'

export default function Mainpage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Logosection/>
        <Centerone/>
        <Centertwo/>
        <Centerthree/>
        <Gridlayout/>
        <Pricing/>
        <Faqs/>
        <Footer/>
    </div>
  )
}
