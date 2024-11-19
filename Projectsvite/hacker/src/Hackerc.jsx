import React, { useEffect, useState } from 'react'

export default function Hackerc() {

    const [load, setload] = useState(false)
    const [news, setnews] = useState([])
    const [search, setsearch] = useState('react')
    const [curentpage, setcurentpage] = useState(1)
    const [postperpage] = useState(10)
    const searchApi = async () => {
        try {
            setload(true)
            const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${search}&page=${curentpage}`)
            const data = await response.json()
            console.log(data, "data");
            setnews(data.hits)
        }
        catch (error){
            console.log(error);
        }
        finally {
            setload(false)
        }
    }
    useEffect(() =>{
        searchApi()
    }, [])
    let lastIndex = curentpage * postperpage
    console.log(lastIndex);
    let firstIndex = lastIndex - postperpage
    console.log(firstIndex);
    let serchArray = news.slice(firstIndex, lastIndex)
    console.log(serchArray, "SearchArray");
    const next = () =>{
        if (curentpage >= Math.ceil(news.length / postperpage)) {
            setcurentpage(1)
        }
        setcurentpage(curentpage + 1)
    }
    const prev = () => {
        if (curentpage <= 1) {
            setcurentpage(Math.ceil(news.length / postperpage))
        }
        else {
            setcurentpage(curentpage - 1)
        }
    }

    const del = (index) => {
        let newArray = [...news]
        newArray.splice(index, 1)
        setnews(newArray)
    }
    return (
        <div className='w-full bg-gray-100 p-5'>
            <h1 className='text-center text-4xl font-semibold mt-10'>Hackers News</h1>
            <div className='max-w-4xl mx-auto mt-4 flex justify-center items-center'>
                <input type="text"
                    onChange={(e) => setsearch(e.target.value)}
                    placeholder='Search here...'
                    className='w-64 h-12 border border-gray-500 outline-none px-4 rounded-md shadow-sm' />
                <button
                    onClick={searchApi}
                    className='ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700'>
                    Search
                </button>
            </div>
            <div className='w-[80%] mx-auto mt-10 flex  flex-wrap gap-4 justify-center'>
                {load ? (
                    <div className='w-full text-center'>
                        <p className='font-bold'>Loading...</p>
                    </div>
                ) : (
                    serchArray.map((item , index) =>(
                        <div key={index} className='w-[45%] p-4 border border-gray-400 rounded-md shadow-lg'>
                            <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
                            <a href={item.url} className='text-blue-600 hover:underline block mb-4'>
                                {item.url}
                            </a>
                            <button 
                            onClick={()=> del(index)} 
                            className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className='max-w-4xl mx-auto mt-8 flex justify-center items-center'>
                <button onClick={prev} className='px-4 py-2 bg-gray-500 text-white'>Previous</button>
                <span className='text-black font-semibold ml-3'>{curentpage}</span>
                <button onClick={next} className='px-4 py-2 bg-gray-500 text-white ml-3'>Next</button>
            </div>
        </div>
    )
}
