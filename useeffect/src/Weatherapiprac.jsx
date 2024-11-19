import React, { useRef, useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify'

export default function Weatherapiprac(){
    const [city, setcity] = useState('lahore')
    const [weather, setweather] = useState({})
    const [Isloading, setIsloading] = useState(true)
    const apiKey = "f65e32faa80c40a876bd4112cd36e525"
    const InptRef = useRef()
    let handleapi = async () =>{
        console.log("handleInput");
        setIsloading(true)
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            // console.log(response);
            if (response.ok) {
                let data = await response.json()
                let mainCity = data.name
                let temperature = data.main.temp
                let cTemp = Math.floor((temperature - 273.15))
                let img = data.weather[0].icon
                let dec = data.weather[0].main
                let wind = data.wind.speed
                console.log(wind);
                let icon_image = `https://openweathermap.org/img/wn/${img}@2x.png`
                setweather({
                    mainCity,
                    cTemp,
                    dec,
                    wind,
                    icon_image
                })
                setIsloading(false)
            }
        }
        catch (error) {
            console.error("Data not found")
        }
    }
    useEffect(() =>{
        handleapi()
    }, [city]) 
    const handleInput = () =>{
        // setcity(e.target.value)
        let inpVal = InptRef.current.value
        console.log(InptRef.current);
        if (city.trim() !== ""){
            setcity(inpVal)
        }
        else{
            alert("Enter city name")
        }
    }
    return(
        <div>
            <div className="container">
                <div className="weatherdiv">
                    <div className="weatherinput">
                        <input type="text" className="C-name" placeholder="Enter the City name" ref={InptRef} />
                        <button className="btn" onClick={handleInput}><FaSearch /></button>
                    </div>
                    {
                        weather && !Isloading ? (
                            <div className="text">
                                <div className="maintext">
                                    <h1>Weather in <span className="city-name">{weather.mainCity}</span></h1>
                                    <h2 className="Temp">{weather.cTemp}'C</h2>
                                    <p className="condition">Condtion{weather.dec}</p>
                                    <h3>Wind: <span className="speed">{weather.wind}km/h</span></h3>
                                </div>
                                <div className="icon">
                                    <div className="mainicon">
                                        <img src={weather.icon_image} alt="" />
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className="text">Loading...</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
