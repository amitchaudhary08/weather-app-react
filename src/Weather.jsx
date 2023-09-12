import React, { useState } from 'react'
import './Weather.css'

const api = {
    key:"4cd0d6d6e449eff3901a45f85f4ce1b6",
    base:"https://api.openweathermap.org/data/2.5/"
}
const Weather = () => {
    const [query,setQuery]=useState('');
    const [weather,setWeather]=useState({});

    const search = evt => {
        if(evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res=> res.json())
            .then(result=> {
                setWeather(result);
                setQuery('')
                console.log(result)
            } )
        }
    }
    function date(){
        return new Date().toLocaleDateString()
    }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app'): ('app')}>
        <main>
            <div className='search-box'>
            <input type='text'
                className='search-bar'
                placeholder='Search...'
                value={query}
                onChange={e=> setQuery(e.target.value)}
                onKeyPress={search}/>
            </div>
            {(typeof weather.main != "undefined") ? (<div>
                <div className='location-box'>
             <div className='location'>
               {weather.name},{weather.sys.country}
             </div>
             <div className='date'>
             {date()}
             </div>
                </div>
                <div className='weather-box'>
             <div className='temp'>{Math.round(weather.main.temp)}℃</div>
            </div>
            <div className='weather'>
               {weather.weather[0].main}
            </div>
            </div>) : ('')}
            
            
        </main>
    </div>
  )
}

export default Weather