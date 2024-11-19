import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Weatherapi() {
    const [city, setcity] = useState("lahore")
    const [weather, setweather] = useState({})
    const [isloading, setisloading] = useState(true)
    const apiKey = "f65e32faa80c40a876bd4112cd36e525"
    setisloading(true)
    const handleapi = async () =>{
        try{
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            let data = await (response.json())
            console.log(data);
            let mainCity = data.name
            let temperature = data.main.temp
            let cTemp = Math.floor((temperature - 273.15))
            let img = data.weather[0].icon
            let dec = data.weather[0].main
            let wind = data.wind.speed
            let icon_image = `https://openweathermap.org/img/wn/${img}@2x.png`
            setweather({
                mainCity,
                cTemp,
                dec,
                wind,
                icon_image
            })
            setisloading(false)
        }
        catch (error){
            console.log("data not found");
        }
    }
    // handleapi()
    useEffect(() => {
        handleapi()
    }, [])
    let handleCity = () =>{
        if(city.trim() !== ""){
            setcity(city)
        }
        else{
            alert("please enter city name")
        }
    }
    return(
        <div>
            <div class="container">
                <div class="weatherdiv">
                    <div class="weatherinput">
                        <input type="text" class="C-name" placeholder="Enter the City name" value={city} onChange={(e) => setcity(e.target.value)} />
                        <button class="btn" onClick={handleCity}><FaSearch/></button>
                    </div>
                    {weather && !isloading  ? (
                        <div class="text">
                            <div class="maintext">
                                <h1>Weather in <span class="city-name">{weather.mainCity}</span></h1>
                                <h2 class="Temp">{weather.cTemp}'C</h2>
                                <p class="condition">Condtion{weather.dec}</p>
                                <h3>Wind: <span class="speed">{weather.wind}km/h</span></h3>
                            </div>
                            <div class="icon">
                                <div class="mainicon">
                                    <img src={weather.icon_image}/>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading.....</div>
                    )}
                </div>
            </div>
        </div>
    )
}

