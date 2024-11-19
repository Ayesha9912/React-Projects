import React ,{useState} from 'react';
import Loading from './Loading';
import Banner from './Banner';
import Tools from './Tools';
import SliderTool from './Slider';
import Allprojects from './Allprojects';
import Qoute from './Qoute';
import Contact from './Contact';
import Socialicons from './Socialicons';
import Footer from './Footer';
import Sidebar from './Sidebar';
export default function Home(){
  return(
    <>
    <Sidebar/>
    <Banner/>
    <Tools/>
    <SliderTool/>
    <Allprojects/>
    <Qoute/>
    <Contact/>
    <Socialicons/>
    <Footer/>
    </>
  )
}
