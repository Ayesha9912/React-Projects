import React from "react";
import { FaAddressCard, FaAngleDown, FaAngleRight, FaDribbble, FaFacebook, FaGoogleDrive, FaInstagram, FaPhone, FaTwitch, FaTwitter, FaVoicemail} from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import logo from '../images/mainimages/logo-aero1.png';
import Pay from '../images/mainimages/payment.png';




function Footer(){
    return(
        <div className="mainfooter">
            <div className="emailline"></div>
            <div className="subscribe">
                <p>OUR NEWS</p>
                <h1>SIGN UP FOR LATEST NEWS</h1>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quod?</h5>
                <div className="input">
                    <input type="text" placeholder="Enter you email address here" />
                    <div className="inputcir"><FaAngleRight size={15} color="white"/></div>
                </div>
            </div>
            <div className="footer">
                <div className="footerRow">
               <Row className="mainFooterrow">
                <Col xxl={3} xl={4} lg={12} md={12} sm={12} className="footerlogodiv">
                    <img src={logo} class="img-fluid rounded-top"alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nam. Lorem, ipsum dolor.</p>
                    <div className="footericons">
                        <h1><FaAddressCard size={12} color="red"/> Address:   No 40 Baria Sreet 133/2, NewYork, USA.</h1>
                        <h1><FaPhone size={12} color="red"/> Phone:  (012) 800 456 789</h1>
                        <h1><FaVoicemail size={12} color="red"/> Email:  support@masstechnologist</h1>
                    </div>
                </Col>
                <Col xxl={5} xl={8} lg={12} md={12} sm={12} className=" d-none d-xxl-flex d-xl-flex collis">

                    <div className="footerli1">
                        <h1>MAIN MENU</h1>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Featured</li>
                            <li>Design</li>
                            <li>Model</li>
                            <li>Get</li>
                        </ul>
                    </div>
                    <div className="footerli1">
                    <h1>MAIN MENU</h1>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Featured</li>
                            <li>Design</li>
                            <li>Model</li>
                            <li>Get</li>
                        </ul>
                    </div>
                    <div className="footerli1">
                    <h1>MAIN MENU</h1>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Featured</li>
                            <li>Design</li>
                            <li>Model</li>
                            <li>Get</li>
                        </ul>
                    </div>
                    <div className="footerli1">
                    <h1>MAIN MENU</h1>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Featured</li>
                            <li>Design</li>
                            <li>Model</li>
                            <li>Get</li>
                        </ul>
                    </div>
                </Col>
                <Col xxl={5} xl={8} lg={12} md={12} sm={12} className="d-flex d-xxl-none d-xl-none collisdiv">
                    <div className="shortmenu"><h1>MAINMENU</h1> <FaAngleDown color="white" size={18}/></div>
                    <div className="shortmenu"><h1>HOME</h1> <FaAngleDown color="white" size={18}/></div>
                    <div className="shortmenu"><h1>DESIGN</h1> <FaAngleDown color="white" size={18}/></div>
                    <div className="shortmenu"><h1>MAINMENU</h1> <FaAngleDown color="white" size={18}/></div>
                </Col>
                </Row> 
                </div>

                <div className="footerline"></div>

                <div className="footercards">
                    <Row className="footerlast">
                        <Col xxl={4} xl={4} lg={4} md={12} sm={12} className="footerlastp">
                        <p>Copyright © 2024 <span>MassTechnologist.Com</span> . All Rights Reserved</p>
                        </Col>
                        <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="footermainicons">
                            <FaFacebook color="red" size={15}/>
                            <FaTwitter color="red" size={15}/>
                            <FaInstagram color="red" size={15}/>
                            <FaDribbble color="red" size={15}/>
                            <FaGoogleDrive color="red" size={15}/>
                        </Col>
                        <Col xxl={3} xl={4} lg={4} md={12} sm={12} className="pay">
                            <img
                                src={Pay}
                                class="img-fluid rounded-top"
                                alt="pay"
                            />
                            
                        </Col>
                    </Row>
                </div>


            </div>
        </div>
    )
}

export default Footer