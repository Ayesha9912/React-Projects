import React, {useState} from 'react'
import Data from './Data'
import Listprac from './Listprac';

function Filterarrprac(){
    const [people, setpeople] = useState(Data)
    const nextWeekBD = ()=>{
        const today = new Date()
        const nextWeek = new Date(today.getTime()+7*24*60*60*1000)
        const filter = people.filter(ele=>{
            const getperson = new Date(today.getFullYear(), monthIndex(ele.month), ele.date)
            return getperson >= today && getperson <= nextWeek
        })
        setpeople(filter)
    }
    let monthIndex = month =>{
        let monthNames =[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        return monthNames.findIndex( m=>m === month)
    }
    const reload = ()=>{
        setpeople(Data)
    }
  return(
    <div>
        <main className='w-[100%] h-[100vh] bg-red-400 flex justify-center items-center'>
            <div className='w-[500px] rounded-md bg-yellow-200 p-4'>
                <h1 className='text-3xl font-bold text-center'>{people.length}People Birthday</h1>
                <Listprac people={people}/>
                <button onClick={()=>setpeople([])} className='w-[100%] h-[40px] bg-sky-300 rounded-md text-xl font-semibold text-black mt-2'>Clear All</button>
                <button onClick={reload} className='w-[100%] h-[40px] bg-sky-300 rounded-md text-xl font-semibold text-black mt-2'>Reaload</button>
                <button onClick={nextWeekBD} className='w-[100%] h-[40px] bg-sky-300 rounded-md text-xl font-semibold text-black mt-2'>Next Month BD</button>
            </div>
        </main>
    </div>
  )
}
export default Filterarrprac