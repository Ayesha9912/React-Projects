import React from "react";
import insta1 from '../images/mainimages/289318397_546552040495354_8092673943024618171_n.jpg';
import insta2 from '../images/mainimages/289601343_440941847861742_3905274036529059258_n.jpg';
import insta3 from '../images/mainimages/289632798_1152793325285247_6504645668447623196_n.jpg';
import insta4 from '../images/mainimages/289638158_420955749952028_5351414347092502565_n.jpg';
import insta5 from '../images/mainimages/289675379_108264135203103_2325926324167963983_n.jpg';
import insta6 from '../images/mainimages/289688498_143128498312324_5623047000615605792_n.jpg';
import insta7 from '../images/mainimages/289712072_567675971620043_3126044743124451362_n.jpg';
import insta8 from '../images/mainimages/290241727_766966144300794_4722076226413296850_n.jpg';
import insta9 from '../images/mainimages/289808587_1384879422015789_9151181238172323717_n.jpg';
import insta10 from '../images/mainimages/403940145_380795187709412_5150323977417643990_n.jpg';
import Slider from "react-slick";
function Instaslider(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="instagramslide">
            <div className="blogpro">
                <div className="banner">
                    <h1>AERO IN INSTAGRAM</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, cumque?</p>
            </div>
            <div className="instamainslider">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                        <div className="instaimg">
                            <img src={insta1} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta2} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta3} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta4} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta5} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta6} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta7} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta8} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta9} class="img-fluid"/>
                        </div>
                        </div>
                        <div>
                        <div className="instaimg">
                            <img src={insta10} class="img-fluid"/>
                        </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Instaslider