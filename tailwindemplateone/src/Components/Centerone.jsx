import React from 'react'
import img2 from '../images/reporting.png'

export default function Centerone() {
    return (
        <div>
            <div className='relative w-[100%] bgimg1 overflow-hidden pb-10'>
                <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center py-10'>
                    <h1 className='text-5xl font-bold text-white mt-8 text-center'>
                        Everything you need to run your books.
                    </h1>
                    <p className='text-2xl text-white mt-3 text-center'>Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
                    <div className='w-full grid grid-cols-12 gap-4 mt-20'>
                        <div className='col-span-5 hidden lg:flex flex-col items-end pr-2'>
                            <div className='boxdiv p-8 rounded-xl mt-6'>
                                <h1 className='text-white font-bold text-2xl'>Payroll</h1>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero?</p>
                            </div>
                            <div className='p-8 rounded-xl mt-3'>
                                <h1 className='text-white font-bold text-2xl'>Payroll</h1>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero?</p>
                            </div>
                            <div className='p-8 rounded-xl mt-3'>
                                <h1 className='text-white font-bold text-2xl'>Payroll</h1>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero?</p>
                            </div>
                            <div className='p-8 rounded-xl mt-3'>
                                <h1 className='text-white font-bold text-2xl'>Payroll</h1>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero?</p>
                            </div>
                        </div>
                        <div className='flex lg:hidden col-span-12 justify-center items-center p-4'>
                            <div className='boxdiv p-6 flex flex-col w-full rounded-xl'>
                                <div className='flex space-x-5 md-space-x-40 p-2 items-center'>
                                    <h1 className='text-sky-600 bg-white rounded-3xl font-normal text-xl p-3'>Payroll</h1>
                                    <h1 className='text-white font-normal text-xl'>Payroll</h1>
                                    <h1 className='text-white font-normal text-xl'>Payroll</h1>
                                    <h1 className='text-white font-normal text-xl'>Payroll</h1>
                                </div>
                                <p className='text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero?</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-7 h-auto xl-h-[70vh] sm-h-[50vh]'>
                            <img
                                src={img2}
                                className=' pixel rounded-3xl w-full  h-100% lg-h-auto  ml-10 lg:ml-0'
                                alt=''
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
