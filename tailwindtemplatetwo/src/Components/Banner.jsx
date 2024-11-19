'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../images/Screenshot_2024-07-29_130602-removebg-preview.png'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
export default function Banner() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bgimg1">
            <header className="absolute inset-x-0 top-0 z-50 flex justify-center   items-center">
                <nav aria-label="Global" className="flex w-[100%] lg:w-[70%] items-center justify-between lg:justify-center p-6 lg:px-8">
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

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 p-3 text-sm md:text-xl  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) =>(
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 -mt-20">
                   
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-7xl text-left">
                            A design conference for the dark side.
                        </h1>
                        <p className="mt-6 text-lg md:text-3xl leading-8 text-blue-800 text-left">
                            The next generation of web users are tech-savvy and suspicious. They know how to use dev tools, they can detect a phishing scam from a mile away, and they certainly aren’t accepting any checks from Western Union.
                        </p>
                        <p className="mt-6 text-lg md:text-3xl leading-8 text-blue-800 text-left">
                            At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.
                        </p>
                        <div className="mt-10 flex lg:hidden  items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                        </div>

                        <div className='grid grid-cols-12 mt-10'>
                            <div className='col-span-12 md:col-span-6 flex justify-around'>
                                <div className='mt-5 md:mt-0'>
                                    <p className='font-mono text-blue-700'>Speakers</p>
                                    <h1 className='font-bold text-xl md:text-2xl text-blue-700'>18</h1>
                                </div>
                                <div className='mt-5 md:mt-0'>
                                    <p className='font-mono text-blue-700'>People Attending</p>
                                    <h1 className='font-bold text-xl md:text-2xl text-blue-700'>2001</h1>
                                </div>

                            </div>
                            <div className='col-span-12 md:col-span-6 flex justify-around'>
                            <div className='mt-5 md:mt-0'>
                                    <p className='font-mono text-blue-700'>Speakers</p>
                                    <h1 className='font-bold text-xl md:text-2xl text-blue-700'>18</h1>
                                </div>
                                <div className='mt-5 md:mt-0'>
                                    <p className='font-mono text-blue-700'>People Attending</p>
                                    <h1 className='font-bold text-xl md:text-2xl text-blue-700'>2001</h1>
                                </div>
                                
                            </div>
                        </div>







                    </div>
                </div>

            </div>
        </div>
    )
}
