import React, { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos'
import Slider from "react-slick";
import { featuredWork } from './SkillData'
export default function SliderTool() {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-out',
            delay: 400,
            transition: 300,
        })
    }, [])
    var settings = {
        arrow: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    autoplaySpeed: 2000,
                    autoplay: true,

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <>
            <div className='w-full flex flex-col items-center h-auto bg-black p-10'>
                <div className='w-72 h-16 flex justify-center items-center border-4 border-green-500 rounded-md' data-aos='flip-left'>
                    <h1 className='font-mono text-green-500 font-bold text-3xl'>Featured Work</h1>
                </div>
                <div className="slider-container text-white w-[100%] lg:w-[70%] border-red-500 flex mt-10">
                    <Slider {...settings} className='w-full border-white'>
                        {featuredWork.map((item, index) => {
                            return (
                                <a key={index} href={item.url} className='slick-slider  flex h-[350px] p-5'>
                                    <div className='border-4 border-white h-[100%] rounded-xl relative'>
                                        <img src={item.image} alt="" className='w-[100%] object-cover transition duration-300 h-[100%] rounded-xl' />
                                        <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-gradient-to-t from-green-500 to-slate-600 opacity-75 flex flex-col justify-end p-3 lg:p-10'>
                                            <h1 className='font-mono font-bold text-xl md:text-3xl  text-white'>{item.name}</h1>
                                            <p className=' font-bold text-black text-xl md:text-2xl'>{item.description}</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}
