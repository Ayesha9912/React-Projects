import React from "react";
import Slider from "react-slick";
import logo1 from '../images/mainimages/br-01.png';
import logo2 from '../images/mainimages/br-02.png';
import logo3 from '../images/mainimages/br-03.png';
import logo4 from '../images/mainimages/br-04.png';
import logo5 from '../images/mainimages/br-05.png';
import logo6 from '../images/mainimages/br-06.png';

function LogoSlider(){
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
  return(
    <div>
      <div className="blogpro">
        <div className="banner">
          <h1>LOGOS BRENDS AND CLIENTS</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, cumque?</p>
      </div>
      <div className="logoslider">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="logomainimg">
              <img src={logo1} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo2} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo3} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo4} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo5} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo6} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo1} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo2} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo3} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo4} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
            <div>
              <div className="logomainimg">
              <img src={logo5} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default LogoSlider;
