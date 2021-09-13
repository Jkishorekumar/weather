import React from 'react'
import "../css/weathercomponent.css"
import WeatherInfoComponent from './WeatherInfoComponent'
import { displaytime } from './Time'

const weathericons = {
    "01d" : "Icons/sunny.svg",
    "01n" : "Icons/night.svg",
    "02d" : "Icons/cloudy.svg",
    "02n" : "Icons/cloudy-night.svg",
    "03d" : "Icons/scattered-day-clouds.svg",
    "03n" : "Icons/scattered-night-cloud.svg",
    "04d" : "Icons/cloudy.svg",
    "04n" : "Icons/cloudy-night.svg",
    "09d" : "Icons/rain.svg",
    "09n" : "Icons/rain-night.svg",
    "10d" : "Icons/rain.svg",
    "10n" : "Icons/rain-night.svg",
    "11d" : "Icons/storm.svg",
    "11n" : "Icons/storm.svg",
    "13d" : "Icons/snow.svg",
    "13n" : "Icons/snow.svg",
    "50d" : "Icons/mist.svg",
    "50n" : "Icons/mist.svg"
}

function WeatherComponent({value , setlocation , fetchweather}) {

    const isday = value.weather[0].icon.includes("d")
    const gettime = (timestamp) => `${new Date(timestamp * 1000).getHours()} : ${new Date(timestamp * 1000).getMinutes()}`

    return (
        <>
            <div className="weathercondition">
                <p className="condition">
                    <span>{Math.floor(value.main.temp - 273)}&deg;c</span>
                    {` | ${value.weather[0].description} `}
                </p>
                <img className="img" src={weathericons[value.weather[0].icon]} alt='icon'></img>
            </div>

            <form className='insearch' onSubmit={fetchweather}>
                <button type='submit'>Search</button>
                <input type='text' onChange={e => setlocation(e.target.value)} placeholder="Search Another Location"></input>
            </form>

            <div className="Location">{ `${value.name} , ${value.sys.country}` }</div>

            <p className='time'>{displaytime}</p>

            <div className="weatherinfolabel">Weather Information</div>

            <div className='weatherinfocontainer'>
                <WeatherInfoComponent name="Cloudy" unit="%" value={value.clouds.all}/>
                <WeatherInfoComponent name="Humidity" unit="%" value={value.main.humidity}/>
                <WeatherInfoComponent name="Wind" unit="km/h" value={value.wind.speed}/>
                <WeatherInfoComponent name="Pressure" unit="mb" value={value.main.pressure}/>
            </div>
            
            <hr style={{width: "60%"}}></hr>

            <div>
                <WeatherInfoComponent 
                    name={isday ? "Sunset" : "Sunrise"} 
                    value={isday ? gettime(value.sys.sunrise) : gettime(value.sys.sunset)}
                />
            </div>
        </>
    )
}

export default WeatherComponent