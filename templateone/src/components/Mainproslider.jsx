import React from "react";
import Slider from "react-slick";
import free1 from '../images/mainimages/1-600x600_400x400_crop_center.jpg';
import free2 from '../images/mainimages/2-600x600_83ea478c-bb3f-4036-a783-7b481e2f1315_400x400_crop_center.jpg';
import free3 from '../images/mainimages/3-600x600_41086c79-e865-4c8c-aa93-15a03b384a3e_400x400_crop_center.jpg';
import free4 from '../images/mainimages/4-600x600_ceb87a56-6b62-4a7c-a226-3ca7edddbc07_400x400_crop_center.jpg';
import free5 from '../images/mainimages/5-600x600_6bffe399-97df-4b21-9769-1ce9cd38e92b_400x400_crop_center.jpg';
import free6 from '../images/mainimages/7-600x600_56fa81c7-04c4-4294-b4b1-626b96689bbe_400x400_crop_center.jpg';
import free7 from '../images/mainimages/9-600x600_400x400_crop_center.jpg';
import free8 from '../images/mainimages/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592_400x400_crop_center.jpg';
import free9 from '../images/mainimages/14-600x600_d4f6d321-f84e-4b64-8856-d6f46623dc3b_400x400_crop_center.jpg';
import { FaShoppingCart, FaHeart, FaSignal, FaEye } from "react-icons/fa";

function Mainslider(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const proArray = [
    { id: 1, img1: free7, img2: free3 },
    { id: 2, img1: free2, img2: free5 },
    { id: 3, img1: free5, img2: free8 },
    { id: 4, img1: free4, img2: free1 },
    { id: 5, img1: free3, img2: free9 },
    { id: 6, img1: free6, img2: free4 },
    { id: 7, img1: free1, img2: free2 },
  ]
  return (
    <div className="mainslider">
      <div className="slider-container">
        <Slider {...settings}>
          {proArray.map((ele, index) => (
            <div key={index}>
              <div className="featuremain">
                <div className="slidemainimg">
                  <img src={ele.img1} class="img-fluid rounded-top" alt='Pro' />
                  <div className="absolute">
                    <div className="absolutediv">
                      <img src={ele.img2} class="img-fluid rounded-top" alt='Pro' />
                      <div className="imgicons"><FaHeart className="faicons" /><FaSignal className="faicons faeyes" /><FaEye className="faicons" /></div>
                    </div>
                  </div>
                </div>
                <div className="featureh1">
                  <h1>COLP DESIN WOOLRICH WHEEL</h1>
                </div>
                <div className="featureline"></div>
                <div className="price">
                  <h3>$150</h3>
                </div>
                <button><FaShoppingCart className="btnicon" />&nbsp;&nbsp;ADD TO CART</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Mainslider;