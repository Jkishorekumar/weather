import React from 'react'
import '../css/weatherinfocomponent.css'

const infoicons = {
    Cloudy: "Icons/cloudy.svg",
    Humidity : "Icons/humidity.svg",
    Wind : "Icons/wind.svg",
    Pressure : "Icons/pressure.svg",
    Sunrise : "Icons/sunny.svg",
    Sunset : "Icons/night.svg"
}

function WeatherInfoComponent({name , value , unit}) {
    return (
        <div className="infocontainer">
          <img src={infoicons[name]} alt="icon" width="36px" height="36px" ></img>
          <div className={`infolabel ${name}`}>
              <span>{name}</span>   
              {value} {unit}     
          </div> 
        </div>
    )
}

export default WeatherInfoComponent