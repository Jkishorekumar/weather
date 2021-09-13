import React,{useState} from 'react'
import axios from 'axios'
import CityComponent from "./components/CityComponent"
import WeatherComponent from "./components/WeatherComponent"
import "./css/App.css"

const API_KEY = "954c669697027fdbd1c4800524587bb9"

function App() {
  const [location, setlocation] = useState('')
  const [condition, setcondition] = useState()

  const fetchweather = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
          .then(response => {setcondition(response.data)} )
  }
  return (
    <div className='container'>
      
      { condition ? 
          (<WeatherComponent value={condition} setlocation={setlocation} fetchweather={fetchweather}/>) :
          (<CityComponent location={location} setlocation={setlocation} fetchweather={fetchweather}/>)
      }
    </div>
  )
}

export default App;