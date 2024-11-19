import React from 'react'
import {Data} from './Data'
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
function Mainprofile(){
    const {id} = useParams()
    console.log(id);
    let developer = Data.find((ele, index)=>{
        return ele.id == id
    })
    console.log(developer);
  return(
    <div>
        <Header/>
        <Sidebar/>
        <div  className='w-5/5 xl:w-4/5 mt-20 xl:mt-0 ml-[0vw] xl:ml-[20vw] flex flex-col items-center p-0  sm:p-5  xl:p-20'>
            <div className=" w-[100%] mt-10 pl-2 md:pl-5 sm:flex justify-around">
                {/* <div className='w-20 h-201 p-20 rounded-full border border-red-500'> */}
                    <img src={developer.profileImg} class="img-fluid rounded-full w-32 md:w-48 h-32 md:h-48"alt="profile"/>
                {/* </div> */}
                <div className='w-4/5 xl:w-4/5 pl-2 h-auto'>
                    <div className='flex'>
                    <h1 className='text-2xl'>{developer.username}</h1>
                    <button className='text-black font-semibold text-sm hidden md:block bg-gray-100 ml-10 rounded-lg p-2'>Edit Profile</button>
                    <button className='text-black font-semibold text-sm hidden md:block bg-gray-100 ml-5 rounded-lg p-2'>View Archive</button>
                    <button className='text-black font-semibold text-sm hidden md:block bg-gray-100 ml-5 rounded-lg p-2'>Add Tools</button>
                    </div>
                    <div className='flex mt-5'>
                        <h1 className='text-sm md:text-xl'><span className='font-bold mr-2'>{developer.posts}</span>Posts</h1>
                        <h1 className='text-sm md:text-xl ml-5'><span className='font-bold mr-2'>{developer.followers}</span>Followers</h1>
                        <h1 className='text-sm md:text-xl ml-5'><span className='font-bold mr-2'>{developer.following}</span>Followings</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-semibold mt-5'>{developer.name}</h1>
                        <p>{developer.profession}</p>
                        <p>{developer.bio}</p>
                    </div>
                </div>
            </div>
            <div className=' mt-10 w-5/5 xl:4/5'>
                <div className='grid grid-cols-3 grid-row-3'>
                    {developer.post.map((ele, index)=>{
                        return(
                            <div>
                               <img src={ele} class="img-fluid rounded-top w-[100%] h-[100%]"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
export default Mainprofile