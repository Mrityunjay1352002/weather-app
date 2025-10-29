import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp () {
        const [weatherInfo, setWeatherInfo] = useState({
            city: "Wanderland",
            feelslike: 24.44,
            temp: 24,
            tempMax: 25.8,
            tempMin: 23.34,
            humidity: 47,
            weather: "haze",
        });

        let updateInfo = (newInfo) => {
            setWeatherInfo(newInfo);
        };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Mrityunjay</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}