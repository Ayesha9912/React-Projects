import React from 'react'
import logo from '../images/Screenshot_2024-07-29_130602-removebg-preview.png'

import { FaGithub, FaTwitter } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='bg-slate-50 flex flex-col items-center w-[100%]'>
            
            <div className='w-[100%] lg:w-[70%] mt-20'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-6 flex lg:block justify-center'>
                    <div className="flex lg:flex-1">
                        <a href="#" className="p-1.5 flex justify-center items-center">
                            <img
                                alt=""
                                src={logo}
                                className="h-8 w-auto"
                            />
                            <span className="text-xl md:text-2xl font-bold">DeceptiConf</span>
                        </a>
                    </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end space-x-4 mt-8'>
                    <p>Copyright © 2024 TaxPal. All rights reserved.</p>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
