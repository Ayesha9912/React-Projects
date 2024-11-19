import React from 'react'; 
import './App.css';
import Banner from './components/Banner';
import NavbarComponent from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import Featured from './components/Featuredpro';
import Testimonial from './components/Testimoial';
import Mainpro from './components/Mainpro';
import Bodytwo from './components/Bodytwo';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featuredslider from './components/Featuresslider';
import Mainslider from './components/Mainproslider';
import LogoSlider from './components/Logoslider';
import Instaslider from './components/Instagramslider';

function App(){

  


  return (
    <div>
     <Banner/>
     <NavbarComponent/>
     <Header/>
     <Body/>
     <Featured/>
     <Featuredslider/>
     <Testimonial/>
     <Mainpro/>
     <Mainslider/>
     <Bodytwo/>
     <LogoSlider/>
     <Instaslider/>
     <Footer/>
    </div>
  );
}

export default App;
