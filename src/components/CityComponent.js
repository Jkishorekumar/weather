import React from 'react'
import '../css/citycomponent.css'
import { displaytime } from './Time'

function Citycomponent({location , setlocation , fetchweather}) {
    
    return (
        <>
            <div className='weather'>Current Weather Report</div>
            <p className="timing">{displaytime}</p>
            <img className="image" src="Icons/day.svg" alt="weather-icon"></img>
            <h4 className='hint'>Finding Out Weather Conditions Of Your City</h4>
            
            <form className='search' onSubmit={fetchweather}>
                <input type='text' value={location} onChange={e => setlocation(e.target.value)} placeholder="Search Location"></input>
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default Citycomponent