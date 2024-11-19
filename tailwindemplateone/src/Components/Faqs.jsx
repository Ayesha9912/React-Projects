import React from 'react'
export default function Faqs() {
    return (
        <div>
            <div className='bg-white p-10 lg:p-20 bgimg3 flex justify-center'>
                <div className='w-[100%] lg:w-[70%]'>
                    <h1 className='text-5xl text-black'>Frequently asked questions</h1>
                    <p className='text-2xl mt-5'>If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
                    <div className='w-[100%] grid grid-cols-12 gap-x-10 mt-12'>
                        <div className='w-[full] col-span-8 lg:col-span-4 '>
                            <div className='flex flex-col'>
                                <h1 className='font-semibold text-xl mt-4'>Does TaxPal handle VAT?</h1>
                                <p className='mt-5'>Well no, but if you move your company offshore you can probably ignore it.</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>How do you generate reports?</h1>
                                <p className='mt-5'>You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>What was that testimonial about tax fraud all about?</h1>
                                <p className='mt-5'>TaxPal is just a software application, ultimately your books are your responsibility.</p>
                            </div>
                        </div>
                        <div className='col-span-8 lg:col-span-4'>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>What was that testimonial about tax fraud all about?</h1>
                                <p className='mt-5'>TaxPal is just a software application, ultimately your books are your responsibility.</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>Does TaxPal handle VAT?</h1>
                                <p className='mt-5'>Well no, but if you move your company offshore you can probably ignore it.</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>How do you generate reports?</h1>
                                <p className='mt-5'>You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.</p>
                            </div>
                        </div>
                        <div className='col-span-8 lg:col-span-4'>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>How do you generate reports?</h1>
                                <p className='mt-5'>You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>Does TaxPal handle VAT?</h1>
                                <p className='mt-5'>Well no, but if you move your company offshore you can probably ignore it.</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl mt-4'>What was that testimonial about tax fraud all about?</h1>
                                <p className='mt-5'>TaxPal is just a software application, ultimately your books are your responsibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
