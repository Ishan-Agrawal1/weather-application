import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SearchBox.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Info from './Info';

export default function SearchBox( {updateInfo} ) {
    let [city, setCity] = useState("");

    const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct"
    const API_KEY = "138240171ca75d73c1986156d484d93c"
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather"

    let getWeather = async () => {
        let geores = await fetch(`${GEO_API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonGeoRes = await geores.json();

        let weatherRes = await fetch(`${WEATHER_API_URL}?lat=${jsonGeoRes[0].lat}&lon=${jsonGeoRes[0].lon}&appid=${API_KEY}&units=metric`);
        let jsonRes = await weatherRes.json();

        let res = {
            city : city,
            feelslike : jsonRes.main.feels_like,
            temperature : jsonRes.main.temp,
            tempMin : jsonRes.main.temp_min,
            tempMax : jsonRes.main.temp_max,
            humidity : jsonRes.main.humidity
        }

        return res;
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        let info = await getWeather();
        updateInfo(info);
        setCity("");
    }
    return (
        <div className='SearchBox'>
            <h2>Search for a weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Serach City" variant="outlined" value={city} onChange={handleChange} required />
                <br></br> <br></br>

                <Button variant="contained" type='submit'>Submit</Button>
            </form>
        </div>
    );
};
