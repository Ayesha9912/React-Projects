import React, { useState } from 'react'
import Data from './Data'
import List from './List';
function Filterarr() {
    const [people, setpeople] = useState(Data)
    const filterByNextWeekBirthday = () => {
        const today = new Date();
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

        const filteredPeople = people.filter(person => {
            const personBirthday = new Date(today.getFullYear(), getMonthIndex(person.month), person.date)
            console.log(personBirthday);
            return personBirthday >= today && personBirthday <= nextWeek;
        })
        setpeople(filteredPeople)
        console.log(filteredPeople);
    }
    const getMonthIndex = month => {
        const monthNames = [
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
        return monthNames.findIndex(m => m === month)
    }
    const reloadData = () => {
        setpeople(Data)
    }
    return (
        <div>
            <main className='w-[100%] h-[100vh] p-5 bg-blue-400 flex justify-center items-center'>
                <section className='w-[500px] p-[15px] rounded-md bg-white shadow-blue-50'>
                    <h2 className='text-center text-black text-3xl font-bold'>{people.length} Birthday Today</h2>
                    <List people={people} />
                    <button onClick={() => setpeople([])} className='w-[100%] rounded-md text-white mt-5 text-2xl cursor-pointer bg-blue-500 p-[8px]'>Clear All</button>
                    <button onClick={filterByNextWeekBirthday} className='w-[100%] rounded-md text-white mt-5 text-2xl cursor-pointer bg-blue-500 p-[8px]'>Filter By Next Week's Birthday</button>
                    <button onClick={reloadData} className='w-[100%] rounded-md text-white mt-5 text-2xl cursor-pointer bg-blue-500 p-[8px]'>Reload</button>
                </section>
            </main>
        </div>
    )
}
export default Filterarr
