import React from "react";
import Slider from "react-slick";
import testimg from '../images/mainimages/testimor1-64x64_64x64.png';
import comma from '../images/mainimages/inverted-commas.png';
// import {FaCreativeCommons} from "react-icons/fa";
import './testimonial.css';


function Testimonial() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 500,
        pauseOnHover: true,
        arrows: false
    };


    return (
        <div className="testbox">
            <div className="testslider">
                <div className="test-container">
                    <Slider {...settings}>
                        <div>
                            <div className="testdiv">
                            <div className="circle">
                                <img src={testimg} alt="testimonial"/>
                            </div>
                            <div className="invertedtest">
                                <img src={comma}class="img-fluid rounded-top"alt=""/>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, eius. Ipsum laudantium odit quis doloremque provident hic. A praesentium odit eligendi. Lorem ipsum dolor sit amet.</p>
                                <img src={comma} class="img-fluid rounded-top"alt=""/>
                            </div>
                            <h1>JOHN DARWELLICK</h1>
                                
                            </div>
                        </div>



                        <div>
                        <div className="testdiv">
                            <div className="circle">
                                <img src={testimg} alt="testimonial"/>
                            </div>
                            <div className="invertedtest">
                                <img src={comma}class="img-fluid rounded-top"alt=""/>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, eius. Ipsum laudantium odit quis doloremque provident hic. A praesentium odit eligendi. Lorem ipsum dolor sit amet.</p>
                                <img src={comma} class="img-fluid rounded-top"alt=""/>
                            </div>
                            <h1>JOHN DARWELLICK</h1>
                                
                            </div>
                           
                        </div>
                    </Slider>
                </div>
            </div>


        </div>
    )
}

export default Testimonial