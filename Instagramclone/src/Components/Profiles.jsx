import React, { useState , useRef } from 'react'
import { Data } from './Data'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import img4 from '../Components/Images/man-1690965_1920.jpg'
import post15 from './Images/ai-generated-8045019_1920.jpg'
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import post8 from './Images/fruit-1004887_1920.jpg'
import img2 from '../Components/Images/girl-3023831_1920.jpg'
import img7 from '../Components/Images/man-7428290_1920.jpg'
import vid1 from './Videos/192282-892475135_medium.mp4'
import vid2 from './Videos/187831-881332078_medium.mp4'
import img9 from '../Components/Images/woman-7115624_1920.jpg'
function Profiles() {
    const [comment, setcomment] = useState([])
    const inputValue = useRef()
    const handleInput = (e)=>{
        let input = inputValue.current.value
        setcomment((previous) => [...previous, input])
        inputValue.current.value = ''
        console.log(comment);
    }
    // setcomment(e.target.value)
    let suggestions = Data.filter((ele, index) => {
        return index % 3 === 0
    })
    console.log(suggestions);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
              }
          ]
    };
    return (
        <div>
            <div className='w-5/5 md:w-4/5 xl:w-3/5 ml-[0vw] xl:ml-[20vw] h-20 flex flex-col items-center mt-20 xl:mt-0'>
                <div className='w-4/5 md:w-3/5  mt-2'>
                    <Slider {...settings}>
                        {Data.map((developer, index) =>{
                            return (
                                <div key={index}>
                                    <Link to={`/Mainprofile/${developer.id}`}>
                                        <div className='w-14 sm:w-20 rounded-full h-14 sm:h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 flex justify-center items-center'>
                                            <img src={developer.profileImg} alt="profile" className='rounded-full w-[93%] h-[93%]'/>
                                        </div>
                                    </Link>
                                    <p className='text-sm'>{developer.username}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className='w-5/5 md:w-3/5 mt-5 flex justify-center'>
                    <div className='flex flex-col w-[100%] md:w-[80%]'>
                        <div class="bg-white shadow-md rounded-lg">
                            <div class="flex items-center p-4">
                                <img src={img4} alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                <div>
                                    <h2 class="text-sm font-semibold">tech_guru</h2>
                                    <p class="text-xs text-gray-500">Tech Reviewer</p>
                                </div>
                            </div>
                            <img src={post15} alt="Post Image" class="w-full h-64 object-cover" />
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <div className='flex'>
                                        <FaRegHeart size={20} />
                                        <FaRegCommentDots size={20} className='ml-2' />
                                    </div>
                                    <span class="text-sm text-gray-600">123 likes</span>
                                </div>
                                <h2 class="text-xl font-semibold">Post Title 1</h2>
                                <p class="text-gray-600 mt-2">Robots are the le future of the world 🌍 wit neccessary potsy</p>
                                <div class="mt-2">
                                    <p class="text-sm font-semibold">Commenter 1:</p>
                                    <p class="text-sm text-gray-700">This is a great post!</p>
                                    <ul className='text-sm'>{comment.map((ele, index)=>{
                                        return <li key={index}>{ele}</li>
                                    })}</ul>
                                    <input type="text" className='text-sm outline-none' placeholder='Add your comment here' ref={inputValue}/>
                                    <button class="text-blue-600 text-sm hover:text-blue-800 font-semibold ml-20" onClick={handleInput}>Add</button>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow-md rounded-lg mt-10">
                            <div class="flex items-center p-4">
                                <img src={img2} alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                <div>
                                    <h2 class="text-sm font-semibold">foodie_amy</h2>
                                    <p class="text-xs text-gray-500">Food Blogger</p>
                                </div>
                            </div>
                            <img src={post8} alt="Post Image" class="w-full h-64 object-cover"/>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <div className='flex'>
                                        <FaRegHeart size={20}/>
                                        <FaRegCommentDots size={20} className='ml-2'/>
                                    </div>
                                    <span class="text-sm text-gray-600">123 likes</span>
                                </div>
                                <h2 class="text-xl font-semibold">Post Title 1</h2>
                                <p class="text-gray-600 mt-2">Loving the food is the most precious innded power of the set 🍔</p>
                                <div class="mt-2">
                                    <p class="text-sm font-semibold">Commenter 1:</p>
                                    <p class="text-sm text-gray-700">This is a great post!</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow-md rounded-lg mt-10">
                            <div class="flex items-center p-4">
                                <img src={img9} alt="User Avatar" class="w-10 h-10 rounded-full mr-3"/>
                                <div>
                                    <h2 class="text-sm font-semibold">guru_lisa</h2>
                                    <p class="text-xs text-gray-500">Makeup Artist</p>
                                </div>
                            </div>
                            <video src={vid1} class="w-full h-64 object-cover" loop muted autoPlay></video>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <div className='flex'>
                                        <FaRegHeart size={20}/>
                                        <FaRegCommentDots size={20} className='ml-2'/>
                                    </div>
                                    <span class="text-sm text-gray-600">503 likes</span>
                                </div>
                                <h2 class="text-xl font-semibold">Post Title 1</h2>
                                <p class="text-gray-600 mt-2">Robots are the le future of the world 🌍 wit neccessary potsy</p>
                                <div class="mt-2">
                                    <p class="text-sm font-semibold">Commenter 1:</p>
                                    <p class="text-sm text-gray-700">Great season lovely!</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow-md rounded-lg mt-10">
                            <div class="flex items-center p-4">
                                <img src={img9} alt="User Avatar" class="w-10 h-10 rounded-full mr-3"/>
                                <div>
                                    <h2 class="text-sm font-semibold">guru_lisa</h2>
                                    <p class="text-xs text-gray-500">Makeup Artist</p>
                                </div>
                            </div>
                            <video src={vid2} class="w-full h-64 object-cover" loop muted autoPlay></video>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <div className='flex'>
                                        <FaRegHeart size={20} />
                                        <FaRegCommentDots size={20} className='ml-2'/>
                                    </div>
                                    <span class="text-sm text-gray-600">503 likes</span>
                                </div>
                                <h2 class="text-xl font-semibold">Post Title 1</h2>
                                <p class="text-gray-600 mt-2">Robots are the le future of the world 🌍 wit neccessary potsy</p>
                                <div class="mt-2">
                                    <p class="text-sm font-semibold">Commenter 1:</p>
                                    <p class="text-sm text-gray-700">Great season lovely!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:w-[25%] xl:w-1/6 ml-[70vw] xl:ml-[80vw] md:flex flex-col -mt-16'>
                <div class="flex items-center space-x-4 bg-white p-2">
                    <img src={img7} alt="User Avatar" class="w-10 h-10 rounded-full"/>
                    <div class="flex-grow">
                        <p>yoga_anna</p>
                        <p class="text-sm font-semibold">Anna Taylor</p>
                    </div>
                    <button class="text-blue-600 hover:text-blue-800 font-semibold">Switch</button>
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='font-semibold text-gray-600 ml-2'>Suggestion for you</p>
                    <button class="text-blue-600 hover:text-blue-800 font-semibold">See All</button>
                </div>
                {suggestions.map((ele, index)=>{
                    return(
                        <div key={index} class="flex items-center space-x-4 bg-white p-2 mt-3">
                            <img src={ele.profileImg} alt="User Avatar" class="w-10 h-10 rounded-full"/>
                            <div class="flex-grow">
                                <Link to={`/Mainprofile/${ele.id}`}>
                                    <p>{ele.username}</p>
                                </Link>
                                <p class="text-sm font-semibold">{ele.name}</p>
                            </div>
                            <button class="text-blue-600 hover:text-blue-800 font-semibold">Follow</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Profiles