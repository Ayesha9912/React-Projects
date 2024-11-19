import React from "react";
import { Col, Row } from "react-bootstrap";
import car1 from '../images/mainimages/img1-bottom-aero1.jpg';
import car2 from '../images/mainimages/img2-bottom-aero1.jpg';
import blogimg1 from '../images/mainimages/post1-270x334_b462aee1-714d-4ba8-866a-acba7f09ca18.jpg';
import blogimg2 from '../images/mainimages/post2-270x334.jpg';
import tic1 from '../images/mainimages/rocket.png';
import tic2 from '../images/mainimages/headphone.png';
import tic3 from '../images/mainimages/dollar-and-yen.png';
import { FaAngleLeft, FaPencilRuler } from "react-icons/fa";
import Slider from "react-slick";
function Bodytwo(){
    const settings ={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="carview">
            <Row>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="carbg">
                    <img src={car1} class="img-fluid" alt="car1" />
                    <div className="cardtextview">
                        <p>NEW COLLECTION</p>
                        <h1>NEW TRENDING 2018-2016</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, officia? Lorem ipsum dolor sit amet.</h3>
                        <div className="cartbtn">
                            <h1 className="hover">VIEW COLLECTION</h1>
                            <div className="cartcircle"><FaAngleLeft /></div>
                        </div>
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="carbg">
                    <img src={car2} class="img-fluid" alt="car1" />
                    <div className="cardtextview">
                        <p>NEW COLLECTION</p>
                        <h1>NEW TRENDING 2018-2016</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, officia?Lorem ipsum dolor sit amet.</h3>
                        <div className="cartbtn">
                            <h1 className="hover">VIEW COLLECTION</h1>
                            <div className="cartcircle"><FaAngleLeft /></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="ticketdiv">
                <Col xxl={3} xl={4} lg={4} md={4} sm={10} className="ticketcol">
                    <div className="ticket">
                        <h1>FREE DELIVERY</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="ticimg">
                            <img src={tic1}class="img-fluid rounded-top"alt=""/>
                        </div>
                    </div>
                </Col>
                <Col xxl={3} xl={4} lg={4} md={4} sm={10} className="ticketcol">
                    <div className="ticket">
                        <h1>FREE DELIVERY</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="ticimg">
                            <img src={tic2}class="img-fluid rounded-top"alt=""/>
                        </div>
                    </div>
                </Col>
                <Col xxl={3} xl={4} lg={4} md={4} sm={10} className="ticketcol">
                    <div className="ticket">
                        <h1>FREE DELIVERY</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="ticimg">
                            <img src={tic3}class="img-fluid rounded-top"alt=""/>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="blogpro">
                <div className="banner">
                    <h1>&#9733; OUR BLOGS &#9733;</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, cumque?</p>
            </div>
            <div className="blogmainslider">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div className="blogslid">
                                <Row className="blogrow">
                                    <Col xxl={6} xl={6} ld={6} md={6} sm={12} className="colblog">
                                        <div className="blogcol">
                                            <img src={blogimg1} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} ld={6} md={6} sm={12}>
                                        <div className="blogcoltext">
                                            <h1>25<span>/AUG</span></h1>
                                            <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                                            <h3><FaPencilRuler color="grey" size={13} /> By: <span> JON DEAUYUCLK</span> </h3>
                                            <div className="blogline"></div>
                                            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quasi harum libero exercitationem.</h6>
                                            <button>READ MORE</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div>
                            <div className="blogslid">
                                <Row className="blogrow">
                                    <Col xxl={6} xl={6} ld={6} md={6} sm={12} className="colblog">
                                        <div className="blogcol">
                                            <img src={blogimg1} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} ld={6} md={6} sm={12}>
                                        <div className="blogcoltext">
                                            <h1>25<span>/AUG</span></h1>
                                            <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                                            <h3><FaPencilRuler color="grey" size={13} /> By: <span> JON DEAUYUCLK</span> </h3>
                                            <div className="blogline"></div>
                                            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quasi harum libero exercitationem.</h6>
                                            <button>READ MORE</button>

                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                        <div>
                            <div className="blogslid">
                                <Row className="blogrow">
                                    <Col xxl={6} xl={6} ld={6} md={6} sm={12} className="colblog">
                                        <div className="blogcol">
                                            <img src={blogimg1} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} ld={6} md={6} sm={12}>
                                        <div className="blogcoltext">
                                            <h1>25<span>/AUG</span></h1>
                                            <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                                            <h3><FaPencilRuler color="grey" size={13} /> By: <span> JON DEAUYUCLK</span> </h3>
                                            <div className="blogline"></div>
                                            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quasi harum libero exercitationem.</h6>
                                            <button>READ MORE</button>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Bodytwo