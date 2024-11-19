import React, { useEffect, useState } from 'react';

export default function Mark(){
    const [inp, setInput] = useState('');
    const [result, setResult] = useState('');
    useEffect(() =>{
        setResult(inp);
    },[inp]);
    // useEffect(() => {
    //   console.log("empty");
    // }, [])
    return(
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold mb-10 text-gray-800">MARKDOWN PREVIEW</h1>
                <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-10">
                    <textarea
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full h-56 border border-gray-300 rounded-lg p-4 shadow-sm focus:outline-none focus:border-blue-400"
                        placeholder="Type your markdown here..."
                    ></textarea>
                </div>
                <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white rounded-lg p-6 shadow-lg">
                    <div className="markdown-body prose max-w-none">{result}</div>
                </div>
            </div>
        </>
    );
}
