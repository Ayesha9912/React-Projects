import React, { useEffect, useState } from 'react';
export default function Pagen(){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    useEffect(() =>{
        const fetchPosts = async () =>{
            setLoading(true);
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                console.log(data);
                setPosts(data);
                setLoading(false);
            }catch (error){
                console.log(error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const currentPosts = posts.slice(firstIndex, lastIndex);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++){
        pageNumbers.push(i);
    }
    const handleClick = (pageNumber) =>{
        setCurrentPage(pageNumber);
    };
    const handleNext = () =>{
        setCurrentPage((prev) =>(prev < pageNumbers.length ? prev + 1 : 1));
    };
    const handlePrev = () =>{
        setCurrentPage((prev) =>(prev > 1 ? prev - 1 : pageNumbers.length));
    };
    if(loading){
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }
    return(
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-center text-4xl font-bold mb-8">Pagination</h1>
            <ul className="space-y-4 mb-8">
                {currentPosts.map((item) =>(
                    <li key={item.id} className="p-4 border rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                        <span className="font-bold">{item.id}.</span>{item.title}
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mb-8">
                <ul className="flex space-x-2">
                    {pageNumbers.map((number)=>(
                        <li key={number}>
                            <button
                                onClick={() => handleClick(number)}
                                className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-blue-200 transition duration-300'}`}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Previous
                </button>
                <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Next
                </button>
            </div>
        </div>
    );
}
