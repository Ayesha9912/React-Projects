import React, { useEffect, useState } from 'react'
export default function App1() {
    const [Data, setData] = useState([])

    const handleData = async () => {
        let data = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let response = await data.json()
        // console.log(response);
        setData(response)
    }
    useEffect(() =>{
        handleData()

    }, [])
    console.log(Data);
    return(

        <div>
            <div>{Data.map((ele, index)=>{
        return(
            <div key={index}>
                <h1>{ele.name}</h1>
                <p>{ele.phone}</p>
                <p>{ele.username}</p>
            </div>
        )
       })}

       </div>

            {/* <div>{Data && Data.map((ele, index) => {
                return(

                    <div></div>
                )
            })}</div> */}

        </div>
    )
}
