import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox ({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = "de0cc7fd25c0c850f39e1e56060ad7e0";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&limit=1&appid=${API_KEY}`);
            let data = await response.json();

            let { lat, lon } = data[0];
            let weatherResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );
            let weatherData = await weatherResponse.json();
            // console.log(weatherData);
            
            let result = {
                city: city,
                temp: weatherData.main.temp,
                tempMin: weatherData.main.temp_min,
                tempmax: weatherData.main.temp_max,
                humidity: weatherData.main.humidity,
                feelsLike: weatherData.main.feels_like,
                weather: weatherData.weather && weatherData.weather.length > 0 
                ? weatherData.weather[0].description 
                : "N/A",
            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            console.log(city);
            setError(false); 
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    };

    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                 <TextField 
                    onChange={handleChange} 
                    value={city} id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                />
                <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place exists!</p> }
            </form>
        </div>
    )
}