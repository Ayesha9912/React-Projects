import React, { useEffect, useState } from 'react'
export default function Pagenc() {
    const [currentpage, setcurrentpage] = useState(1)
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(false)
    const postsPerPage = 10
    useEffect(() => {
        const fetchPost = async () => {
            setloading(true)
            try {
                let res = await fetch('https://jsonplaceholder.typicode.com/posts')
                let data = await res.json()
                console.log(data);
                setpost(data)
                setloading(false)
            }
            catch (error) {
                console.log(error);
                setloading(false)
            }
        }
        fetchPost()
    }, [])
    let lastIndex = currentpage * postsPerPage
    let firstIndex = lastIndex - postsPerPage
    let currentPosts = post.slice(firstIndex, lastIndex)
    let pageNumber = []
    for (let i = 1; i <= Math.ceil(post.length / postsPerPage); i++) {
        pageNumber.push(i)
    }
    const handleClick = (number) =>{
        setcurrentpage(number)
    }
    const handlePrev = () =>{
        setcurrentpage((prev) => prev > 1 ? prev - 1 : pageNumber.length)
    }
    const handleNext = () => {
        setcurrentpage((prev) => prev < pageNumber.length ? prev + 1 : 1)
    }
    const handleFirst = () =>{
        setcurrentpage(1)
    }
    const handleLast = () =>{
        setcurrentpage(10)
    }
    if (loading){
        return <div className='w-full h-[100vh] flex justify-center items-start'><p>Loading...</p></div>
    }
    return(
        <>
            <h1 className='text-3xl font-bold text-center  mt-10'>Post Pagination</h1>
            <div className='w-full mt-3  flex flex-col p-2  items-center'>
                <ul>
                    {currentPosts.map((item) =>{
                        return(
                            <li key={item.id} className='w-[90%] lg:w-[650px] p-5  rounded-md shadow-lg hover:bg-gray-50 mt-5'>
                                <span className='font-bold'> {item.id} .</span>{item.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='w-[100%] py-5 lg:w-[50%] ~ m-auto flex justify-between items-center'>
                {pageNumber.map((number) => {
                    return(
                        <button className={`w-12 h-12 rounded-full ${currentpage === number ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'}`}onClick={() => handleClick(number)}>{number}</button>
                    )
                })}
            </div>
            <div className='w-[100%] py-5 lg:w-[50%] m-auto flex justify-center'>
                <button onClick={handlePrev} className='px-3 py-2 bg-blue-500 rounded-md'>Previous</button>
                <button onClick={handleNext} className='px-3 py-2 bg-blue-500 rounded-md ml-4'>Next</button>
            </div>
            <div className='w-[100%] py-5 lg:w-[50%] m-auto flex justify-center'>
                <button onClick={handleFirst} className='px-3 py-2 bg-blue-500 rounded-md'>First</button>
                <button onClick={handleLast} className='px-3 py-2 bg-blue-500 rounded-md ml-4'>Last</button>
            </div>
        </>
    )
}
