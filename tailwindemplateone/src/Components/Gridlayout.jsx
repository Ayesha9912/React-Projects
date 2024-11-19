import React from 'react'
import team1 from'../images/avatar-1.png'
import team2 from'../images/avatar-2.png'
import team3 from'../images/avatar-3.png'
import team4 from'../images/avatar-4.png'
import team5 from'../images/avatar-5.png'


export default function Gridlayout() {
  return (
    <div className='bg-white max-auto py-20 p-3 flex flex-col items-center'>
        <h1 className='text-black font-bold text-center text-5xl'>Loved by businesses worldwide.</h1>
        <p className='text-center mt-5 w-[100%] lg:w-[30%]'>Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.</p>
        <div className='grid grid-cols-12 p-0 md:p-20 w-[100%] xl:w-[80%] gap-x-0 md:gap-x-10  gap-y-5'>
            <div className='col-span-12 lg:col-span-4 shadow-2xl bg-white rounded-3xl p-7 lg:p-10 h-[max-content]'>
                <p className='text-black text-xl'>TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Sheryl Berge</h1>
                        <p className='font-normal'>CEO at Lynch LLC</p>
                    </div>
                    <img src={team1} class="img-fluid rounded-full"alt=""/>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4 shadow-2xl bg-white rounded-3xl p-7 lg:p-10 h-[max-content]'>
                <p className='text-black text-xl'>The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Sheryl Berge</h1>
                        <p className='font-normal'>CEO at Lynch LLC</p>
                    </div>
                    <img src={team2} class="img-fluid rounded-full"alt=""/>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4 shadow-2xl bg-white rounded-3xl p-7 lg:p-10 h-[max-content]'>
                <p className='text-black text-xl'>I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Sheryl Berge</h1>
                        <p className='font-normal'>CEO at Lynch LLC</p>
                    </div>
                    <img src={team4} class="img-fluid rounded-full"alt=""/>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4 shadow-2xl bg-white rounded-3xl p-7 lg:p-10 h-[max-content] mt-0 lg:-mt-16'>
                <p className='text-black text-xl'>The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Sheryl Berge</h1>
                        <p className='font-normal'>CEO at Lynch LLC</p>
                    </div>
                    <img src={team3} class="img-fluid rounded-full"alt=""/>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4 shadow-2xl bg-white rounded-3xl p-7 lg:p-10 h-[max-content]'>
                <p className='text-black text-xl'>TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, id? Lorem ipsum dolor sit amet.</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Sheryl Berge</h1>
                        <p className='font-normal'>CEO at Lynch LLC</p>
                    </div>
                    <img src={team4} class="img-fluid rounded-full"alt=""/>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4 shadow-2xl bg-white rounded-3xl p-7 lg:p-10 h-[max-content] mt-0 lg:-mt-10'>
                <p className='text-black text-xl'>I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Sheryl Berge</h1>
                        <p className='font-normal'>CEO at Lynch LLC</p>
                    </div>
                    <img src={team5} class="img-fluid rounded-full"alt=""/>
                </div>
            </div>

        </div>



    </div>
  )
}
