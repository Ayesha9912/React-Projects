import React from 'react'
import logo from '../images/Screenshot 2024-07-27 082435.png'
import { FaGithub, FaTwitter } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='bg-slate-50 flex flex-col items-center w-[100%]'>
            <div className='flex flex-col justify-center items-center pt-20 bg-slate-50'>
                <img src={logo} alt="" />
                <div className='flex space-x-8 mt-5'>
                    <h1>Testimonials</h1>
                    <h1>Blogs</h1>
                    <h1>Homedesign</h1>
                </div>
            </div>
            <div className='w-[100%] lg:w-[70%] mt-20'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-6 flex lg:block justify-center'>
                    <p>Copyright © 2024 TaxPal. All rights reserved.</p>
                    </div>
                    <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end space-x-4 mt-8'>
                        <FaGithub color='grey' size={20} />
                        <FaTwitter color='grey' size={20} />
                    </div>
                </div>
            </div>

        </div>
    )
}
